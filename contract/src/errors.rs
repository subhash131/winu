use anchor_lang::prelude::error_code;

#[error_code]
pub enum VenueError {
    #[msg("You cannot perform this action..!")]
    ActionDenied,
    #[msg("Winner already declared..!")]
    WinnerDeclared,
    #[msg("No bids found..!")]
    NoBids,
    #[msg("Prize already claimed..!")]
    AlreadyClaimed,
}
