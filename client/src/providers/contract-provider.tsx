"use client";
import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import { PhantomWalletAdapter } from "@solana/wallet-adapter-wallets";
import { clusterApiUrl } from "@solana/web3.js";
import { createContext, useMemo } from "react";

const Contract = createContext({});

const SolanaProvider = ({ children }: { children: React.ReactNode }) => {
  const network = "devnet";
  const endpoint = useMemo(() => clusterApiUrl(network), [network]);
  const wallets = useMemo(() => [new PhantomWalletAdapter()], []);

  return (
    <Contract.Provider value={{}}>
      <ConnectionProvider endpoint={endpoint}>
        <WalletProvider wallets={wallets} autoConnect>
          {children}
        </WalletProvider>
      </ConnectionProvider>
    </Contract.Provider>
  );
};

export default SolanaProvider;
