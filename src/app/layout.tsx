"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
// import { Inter } from "next/font/google";
// import { Cinzel } from "next/font/google";
import { Roboto_Slab, Cinzel, Raleway } from "next/font/google";
import "node_modules/react-modal-video/css/modal-video.css";
import "../styles/index.css";

// const inter = Inter({ subsets: ["latin"] });

// const cinzel = Cinzel({ subsets: ["latin"] });
const robotoSlab = Roboto_Slab({
  weight: ["100", "400", "700", "900"],
  subsets: ["latin"],
  display: "swap",
});

const cinzel = Cinzel({
  weight: ["400", "900"],
  subsets: ["latin"],
  display: "swap",
});

const raleway = Raleway({
  weight: ["100", "400", "700", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />

      {/* <body className={`bg-[#FCFCFC] dark:bg-black ${inter.className}`}> */}
      <body
        className={`bg-[#FCFCFC] dark:bg-black  ${raleway.className}  ${robotoSlab.className} `}
      >
        <Providers>
          <Header />
          {children}
          <Footer />
          <ScrollToTop />
        </Providers>
      </body>
    </html>
  );
}

import { Providers } from "./providers";
