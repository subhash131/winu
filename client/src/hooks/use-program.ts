"use client";
import { PROGRAM_ID } from "@/helpers/contract/constants";
import { AnchorProvider, Idl, Program } from "@project-serum/anchor";
import { Wallet } from "@project-serum/anchor/dist/cjs/provider";
import { Connection } from "@solana/web3.js";

import IDL from "@/helpers/contract/idl.json";
import { toast } from "sonner";

export const useProgram = (
  connection: Connection,
  wallet: Wallet | undefined
) => {
  if (!PROGRAM_ID) {
    toast.error("PROGRAM_ID Not Found");
    return;
  }
  if (!wallet) {
    toast.error("Connect your wallet");
    return;
  }
  const provider = new AnchorProvider(connection, wallet, {
    commitment: "confirmed",
  });

  const program = new Program(IDL as Idl, PROGRAM_ID, provider);
  return program;
};
