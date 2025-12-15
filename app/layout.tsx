import './globals.css';
import type { Metadata } from 'next';
import Script from 'next/script';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'STAAJ Solutions | Scaling your business with confidence',
  description: 'STAAJ Solutions empowers small and midsize businesses to scale with confidence through our proven quarterly framework and expert consulting services.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children} 
        <Script
          id="hs-script-loader" 
          src="//js-na2.hs-scripts.com/23288613.js" 
          strategy="afterInteractive" 
          async 
          defer 
        />
      </body>
    </html>
  );
}
