import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import AppProvider from "@/providers/app-provider";
import Navbar from "@/components/navbar";
import "@solana/wallet-adapter-react-ui/styles.css";
import AuthProvider from "@/providers/auth-provider";
import { Toaster } from "sonner";
import { FileStoreProvider } from "@/providers/file-storage-provider";

export const metadata: Metadata = {
  title: "Winu",
  description: "Play Fantasy e-sports games",
};

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} bg-black text-white font-semibold`}
      >
        <AuthProvider>
          <AppProvider>
            <FileStoreProvider>
              <Navbar />
              <Toaster />
              {children}
            </FileStoreProvider>
          </AppProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
