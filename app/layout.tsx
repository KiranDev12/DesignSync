import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { ConvexClientProvider } from "@/providers/convex-client-provider";
import { Toaster } from "sonner";
import { ModalProvider } from "@/providers/model-provider";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DesignSync",
  description:
    "It is a collabrative platform to create realtime designs with people of your organization",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <link rel="icon" href="/logobig.svg" sizes="any" />
        <ConvexClientProvider> {/*Wrapping the children with the convex functionality and data fetching */}
          <Toaster />
          <ModalProvider/>
          {children}
        </ConvexClientProvider>
      </body>
    </html>
  );
}
