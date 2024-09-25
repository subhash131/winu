import { MASTER_SEED, PROGRAM_ID } from "@/helpers/contract/constants";
import { PublicKey } from "@solana/web3.js";

export const useMasterPublickey = () => {
  if (!MASTER_SEED || !PROGRAM_ID) {
    return { msg: "Please validate env variables!" };
  }
  return PublicKey.findProgramAddressSync(
    [Buffer.from(MASTER_SEED)],
    new PublicKey(PROGRAM_ID)
  )[0];
};
