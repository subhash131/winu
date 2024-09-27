"use client";
import { AnchorProvider, Idl, Program } from "@project-serum/anchor";
import {
  AnchorWallet,
  ConnectionProvider,
  useAnchorWallet,
  useConnection,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import { PhantomWalletAdapter } from "@solana/wallet-adapter-wallets";
import { clusterApiUrl } from "@solana/web3.js";
import { createContext, useContext, useEffect, useMemo, useState } from "react";

const Contract = createContext({});

const SolanaProvider = ({ children }: { children: React.ReactNode }) => {
  const network = "devnet";
  const endpoint = useMemo(() => clusterApiUrl(network), [network]);
  const wallets = useMemo(() => [new PhantomWalletAdapter()], []);
  const [program, setProgram] = useState<Program>();
  const { connection } = useConnection();

  return (
    <Contract.Provider value={{ program }}>
      <ConnectionProvider endpoint={endpoint}>
        <WalletProvider wallets={wallets} autoConnect>
          {children}
        </WalletProvider>
      </ConnectionProvider>
    </Contract.Provider>
  );
};

export default SolanaProvider;
