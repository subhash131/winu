"use client";
import { getVenueAddress } from "@/helpers/contract/program";
import { AnchorError, Idl, Program } from "@project-serum/anchor";
import {
  PublicKey,
  SendTransactionError,
  SystemProgram,
} from "@solana/web3.js";
import { toast } from "sonner";

export const endGame = async ({
  venueId,
  winner,
  program,
  wallet,
}: {
  venueId: string;
  program?: Program<Idl>;
  wallet?: PublicKey;
  winner: PublicKey;
}) => {
  // Get the venue address based on venueId
  const venuePk = await getVenueAddress(venueId);

  // Validate wallet connection
  if (!wallet) {
    toast.error("Please connect your wallet");
    return;
  }

  // Validate program instance
  if (!program) {
    toast.error("Contract connection failed 😕. Please refresh the page.");
    return;
  }

  try {
    if (!venuePk) {
      toast.error("Failed to generate primary key.");
      return;
    }

    const txHash = await program.methods
      .pickWinner(venueId, winner)
      .accounts({
        venue: venuePk,
        authority: wallet,
        systemProgram: SystemProgram.programId,
      })
      .rpc();

    if (txHash) {
      toast.success("Game Ended successfully! 🎉 Transaction Hash: " + txHash);
    }
  } catch (err: any) {
    // Handle different types of errors
    if (err instanceof AnchorError) {
      toast.error(`Anchor Error: ${err.error.errorMessage}`);
    } else if (err instanceof SendTransactionError) {
      toast.error(`Transaction Error: ${err.message}`);
    } else {
      toast.error("Failed to End Game! 😢 Please try again.");
    }

    console.error("Error ending game:", err);
  }
};
