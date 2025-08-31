import type { Metadata } from "next";
import "./globals.css";
import { WalletContextProvider } from '@/components/wallet/WalletProvider'

export const metadata: Metadata = {
  title: "$JAO WARFARE DASH",
  description: "The World's Most Effective Social Media Marketing Tool — Now On-Chain",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <WalletContextProvider>
          {children}
        </WalletContextProvider>
      </body>
    </html>
  );
}