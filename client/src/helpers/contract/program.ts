import {
  AnchorProvider,
  BN,
  Program,
  Wallet,
  Idl,
} from "@project-serum/anchor";
import { PublicKey, LAMPORTS_PER_SOL, Connection } from "@solana/web3.js";

import IDL from "./idl.json";

import { BID_SEED, MASTER_SEED, VENUE_SEED, PROGRAM_ID } from "./constants";

// How to fetch our Program
export const getProgram = (connection: Connection, wallet: Wallet) => {
  if (!PROGRAM_ID) {
    return { msg: "PROGRAM_ID not found!" };
  }
  const provider = new AnchorProvider(connection, wallet, {
    commitment: "confirmed",
  });
  const program = new Program(IDL as Idl, PROGRAM_ID, provider);
  return program;
};

export const getMasterAddress = async () => {
  if (!PROGRAM_ID) {
    return { msg: "PROGRAM_ID not found!" };
  }
  if (!MASTER_SEED) {
    return { msg: "MASTER_SEED not found!" };
  }
  return (
    await PublicKey.findProgramAddressSync(
      [Buffer.from(MASTER_SEED)],
      new PublicKey(PROGRAM_ID)
    )
  )[0];
};

export const getVenueAddress = async (id: number) => {
  if (!VENUE_SEED) {
    return { msg: "VENUE_SEED not found!" };
  }
  if (!PROGRAM_ID) {
    return { msg: "PROGRAM_ID not found!" };
  }
  return (
    await PublicKey.findProgramAddressSync(
      [Buffer.from(VENUE_SEED), new BN(id).toArrayLike(Buffer, "le", 4)],
      new PublicKey(PROGRAM_ID)
    )
  )[0];
};

export const getBidAddress = async (venuePk: PublicKey, id: number) => {
  if (!BID_SEED) {
    return { msg: "VENUE_SEED not found!" };
  }
  if (!PROGRAM_ID) {
    return { msg: "Program id not found!" };
  }
  return (
    await PublicKey.findProgramAddressSync(
      [
        Buffer.from(BID_SEED),
        venuePk.toBuffer(),
        new BN(id).toArrayLike(Buffer, "le", 4),
      ],
      new PublicKey(PROGRAM_ID)
    )
  )[0];
};

export const getTotalPrize = (venue: { lastBidId: BN; bidPrice: BN }) => {
  return new BN(venue.lastBidId)
    .mul(venue.bidPrice)
    .div(new BN(LAMPORTS_PER_SOL))
    .toString();
};
