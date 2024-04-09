import type { Metadata } from "next";
import { Roboto } from 'next/font/google'
import "./globals.css";
import {UiProviders} from "./providers/ui-providers";
import {ThemeProvider as NextThemesProvider} from "next-themes";

const roboto = Roboto({
    weight: '400',
    subsets: ["latin"]
});

export const metadata: Metadata = {
  title: "Flash card",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
      <UiProviders>
          <NextThemesProvider attribute="class" defaultTheme="dark">
              { children }
          </NextThemesProvider>
      </UiProviders>
      </body>
    </html>
  );
}
