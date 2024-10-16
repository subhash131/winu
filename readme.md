# WINU - Fantasy Gaming Platform

Welcome to WINU, the ultimate fantasy gaming platform designed for esports enthusiasts! Build your dream teams, place bids, and compete for exciting prizes in a secure, crypto-powered environment.

Live link: https://thewinu.vercel.app

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
- [How to Use the App](#how-to-use-the-app)
- [Hosting a Tournament](#hosting-a-tournament)
- [Place a bid](#place-a-bid)
- [Ending the Game](#ending-the-game)
- [Claim rewards](#claim-rewards)
- [Bidding System](#bidding-system)
- [Technical Details](#technical-details)
- [Contributing](#contributing)

## Features

- Host tournaments and manage participants.
- Create your dream esports teams.
- Place bids with friends and fellow gamers.
- Transparent prize distribution model.
- Secure and fast transactions using SOL.

## Getting Started

To use WINU, follow these steps:

1. **Visit the App**: Go to [WINU](https://thewinu.vercel.app/).
2. **Connect Your Wallet**: Ensure you have a compatible Solana wallet (e.g., Phantom) connected to the app.
3. **Host a Tournament**: Create or host your own tournament.
4. **Create a Team**: Select your players and create your dream esports team.

## How to Use the App

### Hosting a Tournament
[Watch Video](https://youtu.be/fn7DSIvE8Kw?feature=shared)
1. Log in to your account as a host(make sure you are connected with Host wallet).
2. Navigate to the create section.
3. Fill in the tournament details.
4. Add teams.
5. Save.

### Place a bid
[Watch Video](https://youtu.be/tocOvQamyOc?feature=shared)
1. Log in to your account (make sure you are connected with Bidder wallet).
2. Navigate to Home.
3. Select the tournament.
4. Select your preferred players from the available list.
5. Confirm your team selection.
6. Place Bid (limited to **1 SOL** for simplicity).

### IMPORTANT⚠️

> **Note:** The app expects at least **5 bids** to end the game.
> **For Testing:** Repeat the [Place a bid](#place-a-bid) instruction atleast 5 times.

### Ending the Game
1. Log in to your account as a host(make sure you are connected with Host wallet).
2. Navigate to My Venues.
3. select the venue.
4. Click on Manage
5. Update the results.
6. Click on End Game.
7. The transaction will credit the **Host** with 35% of the pool and the **Platform (WINU)** with 10% of the pool.

### Claim rewards
1. Once the venue ends, navigate to the Leader board and check the winner.
2. Log in to your account (make sure you are connected with Bidder wallet).
3. Navigate to My Bids.
4. If your team has made it to the top, you will see an option to claim your reward.
5. Click on Claim reward.
6. The transaction will credit the **Winner** with 50% of the pool.


## Bidding System
- The **host** receives **35%** of the pool.
- The **winner** receives **50%** of the pool.
- The **platform** (WINU) receives **10%** of the pool.
- **5%** is reserved for transaction fees.


## Technical Details
- Built on the **Solana** blockchain for fast and secure transactions.
- Backend(Off-Chain): Mongodb
- Frontend: Next JS(Typescript)
- State management: Redux toolkit
- Asset management: Edge Store

## Contributing
Contributions are welcome! If you have suggestions for improvements or new features, please open an issue or submit a pull request.

---

Thank you for using WINU! Get ready to challenge your peers and win big!
