import '../src/app/globals.css'; // Ensure this import is correct
import type { AppProps } from 'next/app';
import Header from '@/components/header';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="bg-gradient-to-r from-slate-900 to-slate-700 min-h-screen text-white">
      <Header />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;