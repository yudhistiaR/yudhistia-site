import "./globals.css";
import { Fira_Code } from "next/font/google";

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
  instagram: {
    title: "devaslife_20",
    card: "summary_large_image",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={FiraCode.className}>{children}</body>
    </html>
  );
}
