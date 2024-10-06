import { PROGRAM_ID, BID_SEED } from "@/helpers/contract/constants";
import { PublicKey } from "@solana/web3.js";

export const useBidPublickey = (walletAddress?: PublicKey | null) => {
  if (!BID_SEED || !PROGRAM_ID) {
    return { msg: "Please validate env variables!" };
  }
  if (!walletAddress) return;
  return PublicKey.findProgramAddressSync(
    [Buffer.from(BID_SEED), walletAddress.toBuffer()],
    new PublicKey(PROGRAM_ID)
  )[0];
};
