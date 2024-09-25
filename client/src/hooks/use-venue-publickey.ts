import { VENUE_SEED, PROGRAM_ID } from "@/helpers/contract/constants";
import { BN } from "@project-serum/anchor";
import { PublicKey } from "@solana/web3.js";

export const useVenuePublicKey = (id: number) => {
  if (!VENUE_SEED || !PROGRAM_ID) {
    return { msg: "Please validate env variables!" };
  }
  return PublicKey.findProgramAddressSync(
    [Buffer.from(VENUE_SEED), new BN(id).toArrayLike(Buffer, "le", 4)],
    new PublicKey(PROGRAM_ID)
  )[0];
};
