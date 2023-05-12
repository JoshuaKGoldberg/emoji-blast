"use client";

import { NavBar } from "@/components/nav-bar/nav-bar";

import "./globals.css";


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
        <head>
            <link rel="icon" href="https://em-content.zobj.net/thumbs/320/apple/354/party-popper_1f389.png" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="description" content="Website for the Emojisplosion package" />
            <title>Emojisplosion</title>
        </head>
        <body suppressHydrationWarning={true}>
            <NavBar />
            <div>{children}</div>
        </body>
    </html>
  )
};