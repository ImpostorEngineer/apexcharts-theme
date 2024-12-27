import Footer from '@/components/footer';
import './globals.css';
import Navbar from '@/components/navbar';

export const metadata = {
  title: 'North Country Cybersecurity Conference',
  description: 'North Country Cybersecurity Conference',
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
