import "@/styles/globals.css";
import { SessionProvider } from "next-auth/react";
import type { AppProps } from "next/app";
import { Inter } from 'next/font/google'
 
// If loading a variable font, you don't need to specify the font weight
const inter = Inter({ subsets: ['latin', 'cyrillic'] });

export default function App({ Component, pageProps }: AppProps) {
  return ( 
    <SessionProvider session={pageProps.session}>
        <Component className={inter.className}  {...pageProps} />
    </SessionProvider>
  );
}
