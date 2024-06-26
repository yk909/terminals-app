import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { SessionProvider } from 'next-auth/react';
import { PolkadotExtensionContextProvider } from '@/context/polkadotExtensionContext';
import { Analytics } from '@vercel/analytics/react';


export default function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
      <SessionProvider session={session}>
        <PolkadotExtensionContextProvider>
          <Component {...pageProps} />
          <Analytics />
        </PolkadotExtensionContextProvider>
      </SessionProvider>
  );
}
