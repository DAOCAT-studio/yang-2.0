import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import React, { useState, useEffect, useRef } from "react";

import DAOCAT_LOGO_DARK from "../assets/DAOCAT_LOGO_DARK.png";
import remarkGfm from "remark-gfm";
import ReactMarkdown from "react-markdown";
import NavBar from "@/components/NavBar";
import BottomNavBar from "@/components/BottomNavBar";
import Footer from "@/components/Footer";
const inter = Inter({ subsets: ["latin"] });

export default function Blog() {
  const [nftGameMenuVisible, setNftGameMenuVisible] = useState(false);
  const testMd =
    "# Hello World !\n ## 你好，世界! ![美女漂亮不](https://daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.jpg)";

  const blogContent = (
    <div className="grow lg:w-1/2 p-3 lg:p-10 m-4 bg-sunset mb-[100px] rounded-xl shadow-lg text-jungle">
      <article className="prose prose-jungle max-w-none dark:prose-invert">
        <ReactMarkdown children={testMd} remarkPlugins={[remarkGfm]} />
      </article>
    </div>
  );

  return (
    <>
      <Head>
        <title>DAOCAT</title>
        <meta name="description" content="DAO Coffe And Tea" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/DAOCAT_LOGO_DARK.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Caveat&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className="w-screen lg:min-h-screen h-full overflow-y-auto bg-paper flex flex-col pb-[80px] lg:pb-0 justify-between items-center">
        <NavBar />
        {/* {Banner} */}
        {blogContent}
        <Footer />
      </div>

      <BottomNavBar />
    </>
  );
}
