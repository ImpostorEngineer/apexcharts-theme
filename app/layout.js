import './globals.css';
import Footer from '@/components/footer';
import Navbar from '@/components/navbar';

export const metadata = {
  title: 'ApexCharts testing',
  description: 'ApexCharts testing',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={`container mx-auto px-4 py-4`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
