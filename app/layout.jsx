import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import React from "react";
import Provider from "./provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Logo Maker AI",
  description: "Generate Logos in no time!",
};


export default function RootLayout({ children }) {

  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gradient-to-r from-[#f9e1e3]  to-[#d0faf1]`}
        >
          <Provider>
          {children}
          </Provider>
        </body>
      </html>
    </ClerkProvider>
  );
}
