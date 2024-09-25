use anchor_lang::{
    prelude::*,
    solana_program::{program::invoke, system_instruction::transfer},
};

mod constants;
mod errors;
mod state;
use crate::{constants::*, errors::*, state::*};

declare_id!("9dpmvm6EphR9QwNxMnkEKiB2gvEHuhNo33Y9XRheSPL3");

#[program]
pub mod winu {
    use super::*;

    pub fn init_master(_ctx: Context<InitMaster>) -> Result<()> {
        Ok(())
    }

    pub fn create_venue(ctx: Context<CreateVenue>, bid_price: u64) -> Result<()> {
        let venue = &mut ctx.accounts.venue;
        let master = &mut ctx.accounts.master;

        master.last_id += 1;

        venue.id = master.last_id;
        venue.authority = ctx.accounts.aythority.key();
        venue.bid_price = bid_price;

        msg!("Created Venue :{}!", venue.id);
        msg!("Bid Prize :{}!", venue.bid_price);
        Ok(())
    }

    pub fn place_bid(ctx: Context<PlaceBid>, venue_id: u32) -> Result<()> {
        let venue = &mut ctx.accounts.venue;
        let bid = &mut ctx.accounts.bid;
        let buyer = &ctx.accounts.buyer;

        // Transfer SOL
        invoke(
            &transfer(&buyer.key(), &venue.key(), venue.bid_price),
            &[
                buyer.to_account_info(),
                venue.to_account_info(),
                ctx.accounts.system_program.to_account_info(),
            ],
        )?;

        venue.last_bid_id += 1;
        bid.id = venue.last_bid_id;
        bid.venue_id = venue_id;
        bid.authority = buyer.key();
        msg!("Bid Successful:: {}", bid.id);
        Ok(())
    }

    pub fn pick_winner(ctx: Context<PickWinner>, _venue_id: u32, winner: Pubkey) -> Result<()> {
        let venue = &mut ctx.accounts.venue;

        if venue.winner.is_some() {
            return err!(VenueError::WinnerDeclaried);
        }
        if venue.last_bid_id == 0 {
            return err!(VenueError::NoBids);
        }
        venue.winner = Some(winner);

        Ok(())
    }

    pub fn claim_prize(ctx: Context<ClaimPrize>, _venue_id: u32, _bid_id: u32) -> Result<()> {
        let venue = &mut ctx.accounts.venue;
        let bid = &mut ctx.accounts.bid;
        let winner = &ctx.accounts.authority;

        if venue.claimed {
            return err!(VenueError::AlreadyClaimed);
        }
        if venue.winner != Some(winner.key()) {
            return err!(VenueError::ActionDenied);
        }

        let prize = venue.bid_price;

        **venue.to_account_info().try_borrow_mut_lamports()? -= prize;
        **winner.to_account_info().try_borrow_mut_lamports()? += prize;

        venue.claimed = true;

        msg!(
            "{} claimed {} lamports for the bid {}",
            winner.key(),
            prize,
            bid.id
        );
        Ok(())
    }
}

#[derive(Accounts)]
#[instruction(venue_id:u32, bid_id: u32)]
pub struct ClaimPrize<'info> {
    #[account(
        mut,
        seeds=[VENUE_SEED.as_bytes(), &venue_id.to_le_bytes()],
        bump,
    )]
    pub venue: Account<'info, Venue>,

    #[account(
        mut,
        seeds=[
            BID_SEED.as_bytes(),
            venue.key().as_ref(),
            &bid_id.to_le_bytes()
         ],
        bump,
        has_one = authority
    )]
    pub bid: Account<'info, Bid>,

    #[account(mut)]
    pub authority: Signer<'info>,

    pub system_program: Program<'info, System>,
}

#[derive(Accounts)]
#[instruction(venue_id:u32, winner: Pubkey)]
pub struct PickWinner<'info> {
    #[account(
        mut,
        seeds=[VENUE_SEED.as_bytes(), &venue_id.to_le_bytes()],
        bump,
        has_one = authority
    )]
    pub venue: Account<'info, Venue>,

    pub authority: Signer<'info>,

    pub system_program: Program<'info, System>,
}

#[derive(Accounts)]
#[instruction(venue_id:u32)]
pub struct PlaceBid<'info> {
    #[account(
        mut,
        seeds=[VENUE_SEED.as_bytes(), &venue_id.to_le_bytes()],
        bump
        )]
    pub venue: Account<'info, Venue>,

    #[account(
        init,
        payer=buyer,
        space= 8 +  std::mem::size_of::<Bid>(),
        seeds=[
            BID_SEED.as_bytes(),
            venue.key().as_ref(),
            &(venue.last_bid_id + 1).to_le_bytes()
            ],
        bump
    )]
    pub bid: Account<'info, Bid>,

    #[account(mut)]
    pub buyer: Signer<'info>,

    pub system_program: Program<'info, System>,
}

#[derive(Accounts)]
pub struct CreateVenue<'info> {
    #[account(
        init,
        payer = aythority,
        space = 8 + std::mem::size_of::<Venue>(),
        seeds = [VENUE_SEED.as_bytes(), &(master.last_id + 1).to_le_bytes()],
        bump
    )]
    pub venue: Account<'info, Venue>,

    #[account(mut)]
    pub aythority: Signer<'info>,

    #[account(
        mut,
        seeds = [MASTER_SEED.as_bytes()],
        bump
        )]
    pub master: Account<'info, Master>,

    pub system_program: Program<'info, System>,
}

#[derive(Accounts)]
pub struct InitMaster<'info> {
    #[account(
        init, 
        payer = payer, 
        space = 8 + std::mem::size_of::<Master>(),
        seeds = [MASTER_SEED.as_bytes()],
        bump
        )]
    pub master: Account<'info, Master>,

    #[account(mut)]
    pub payer: Signer<'info>,

    pub system_program: Program<'info, System>,
}
