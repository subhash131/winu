"use client";
import { getBidAddress, getVenueAddress } from "@/helpers/contract/program";
import { AnchorError, Idl, Program } from "@project-serum/anchor";
import {
  sendAndConfirmRawTransaction,
  SystemProgram,
  Transaction,
} from "@solana/web3.js";
import { AnchorWallet } from "@solana/wallet-adapter-react";
import { toast } from "sonner";

export const claimReward = async ({
  venueId,
  program,
  bidId,
  wallet,
}: {
  venueId: string;
  bidId: string;
  program?: Program<Idl>;
  wallet: AnchorWallet;
}) => {
  const venuePk = getVenueAddress(venueId);
  console.log("🚀 ~ venuePk:", venuePk?.toString());

  if (!venuePk) {
    return;
  }

  const bidPk = getBidAddress(venuePk, bidId);

  const provider = program?.provider;
  if (!provider) {
    toast.error("Failed to establish connection!");
    return;
  }

  if (!wallet) {
    toast.error("Please connect your wallet");
    return;
  }
  if (!program) {
    toast.error("Contraction connection failed😕. Please refresh the page..");
    return;
  }
  try {
    const provider = program.provider;

    const tx = await program.methods
      .claimPrize(venueId, bidId)
      .accounts({
        venue: venuePk,
        bid: bidPk,
        authority: wallet.publicKey,
        systemProgram: SystemProgram.programId,
      })
      .rpc();
    if (tx) {
      toast.success("Reward Claimed");
    }
  } catch (err) {
    if (err instanceof AnchorError) {
      toast.error(err.error.errorMessage);
    } else {
      toast.error("Failed to place bid😢! Check console for detailed error!");
    }

    console.log("🚀 ~ placeBid ~ err:", err);
  }
};
