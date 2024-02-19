import type { Metadata } from "next";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Montserrat } from "next/font/google";

const font = Montserrat({
  weight: "500",
  preload: false,
});

export const metadata: Metadata = {
  title: "Codepen website",
  description:
    "The best place to build, test, and discover front-end code. CodePen is a social development environment for front-end designers and developers.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ClerkProvider>
        <body className={font.className}>{children}</body>
      </ClerkProvider>
    </html>
  );
}
