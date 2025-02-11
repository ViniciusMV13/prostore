import Header from '@/components/shared/header';
import Footer from '@/components/footer';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'  suppressHydrationWarning>
      <body >
        <div className='flex h-screen flex-col'>
          <Header />
          <main className='flex-1 wrapper'>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}