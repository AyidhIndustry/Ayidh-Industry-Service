import type { Metadata } from "next";
import "./globals.css";
import 'swiper/css';
import 'rsuite/dist/rsuite-no-reset.min.css';


export const metadata: Metadata = {
  title: "Ayidh Industry Services",
  icons: {
    icon: "/favicon.ico",
  },
  description: "Ayidh Industry Service delivers reliable and efficient industrial solutions, offering a premium selection of motors, pumps, and generators for diverse sectors. Quality you can trust.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
       <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={``}>{children}</body>
    </html>
  );
}
