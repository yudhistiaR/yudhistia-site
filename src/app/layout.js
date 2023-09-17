import "./globals.css";

//** components
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { TailwindIndicator } from "@/components/TailwindIndicator";

import Script from "next/script";
import { Fira_Code, Scada } from "next/font/google";

const FiraCode = Fira_Code({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "Yudhisita Site",
    template: "%s || Yudhisita",
  },
  description:
    "I'm a passionate Front End Developer. With expertise in React.js and Next.js, I transform design masterpieces into flawless code. My skills in TailwindCSS ensure visually stunning and responsive websites. Get ready to witness the magic as I bring high-quality work to make the internet a brighter and funnier place!",
  openGraph: {
    title: "Yudhisita",
    description:
      "I'm a passionate Front End Developer. With expertise in React.js and Next.js, I transform design masterpieces into flawless code. My skills in TailwindCSS ensure visually stunning and responsive websites. Get ready to witness the magic as I bring high-quality work to make the internet a brighter and funnier place!",
    siteName: "Yudhisita",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/icon.png",
    apple: "/apple-touch-icon.png",
  },
  twitter: {
    title: "M.Yudhistia Rahman",
    card: "summary_large_image",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={FiraCode.className}>
        <main>
          <Navbar />
          {children}
          <Footer />
        </main>
        <TailwindIndicator />
      </body>
      {process.env.NODE_ENV === "production" && (
        <Script
          async
          src="https://analytics.umami.is/script.js"
          data-website-id="ca764581-cdf3-40c4-a71f-0301df992fab"
        />
      )}
    </html>
  );
}
