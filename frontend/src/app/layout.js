'use client';
import './globals.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/styles/bootstrap.custom.css';
import '../assets/styles/index.css';
// import Header from '@/components/Header';
import dynamic from 'next/dynamic';
const Header = dynamic(() => import('@/components/Header'), { ssr: false });
import Footer from '@/components/Footer';
import { Container } from 'react-bootstrap';
import { Providers } from '@/redux/provider';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { PayPalScriptProvider } from '@paypal/react-paypal-js';
import { HelmetProvider } from 'react-helmet-async';

export const metadata = {
  title: 'Pro Shop',
  description: 'Generated by Pro Shop',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <head>
        <title>Pro shop</title>
      </head>
      <body>
        <HelmetProvider>
          <Providers>
            <PayPalScriptProvider deferLoading={true}>
              <Header />
              <main className='py-3 '>
                <Container>{children}</Container>
              </main>
              <Footer />
              <ToastContainer />
            </PayPalScriptProvider>
          </Providers>
        </HelmetProvider>
      </body>
    </html>
  );
}
