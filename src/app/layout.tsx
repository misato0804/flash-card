import type { Metadata } from "next";
import { Roboto } from 'next/font/google'
import "./globals.css";
import { UiProviders } from "@/app/providers/ui-providers";
import { ThemeProvider as NextThemesProvider } from "next-themes";

const roboto = Roboto({
    weight: ['100', '300', '400', '500', '700', '900'],
    subsets: ["latin"]
});

export const metadata: Metadata = {
    title: "Snap study",
    description: "Let's study with snap study",
};
export default function RootLayout({ children }: Readonly<{
    children: React.ReactNode;
}>) {
    
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={roboto.className}>
                <UiProviders>
                    <NextThemesProvider attribute="class" defaultTheme="dark">
                        {children}
                    </NextThemesProvider>
                </UiProviders>
            </body>
        </html>
    );
}
