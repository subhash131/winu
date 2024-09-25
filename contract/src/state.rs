use anchor_lang::prelude::*;
#[account]
pub struct Bid {
    pub id: u32,
    pub authority: Pubkey,
    pub venue_id: u32,
}

#[account]
pub struct Venue {
    pub id: u32,
    pub authority: Pubkey,
    pub bid_price: u64,
    pub last_bid_id: u32,
    pub winner: Option<Pubkey>,
    pub claimed: bool,
}

#[account]
pub struct Master {
    pub last_id: u32,
}
