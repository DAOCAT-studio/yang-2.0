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
const inter = Inter({ subsets: ["latin"] });

export default function Governance() {
  const [nftGameMenuVisible, setNftGameMenuVisible] = useState(false);
  
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
      <div className="w-screen lg:min-h-screen h-screen overflow-y-auto  bg-paper flex flex-col pb-[80px] lg:pb-0 justify-between items-center">
        <div className=" invisible lg:visible w-full h-0 lg:h-auto ">
          <NavBar />
        </div>

        <div className="w-full grow">
          <iframe
            className="w-full h-full bg-paper"
            src="https://manager.daolens.com/app/dao/DAOCAT/1285/channel/4462"></iframe>
        </div>

        {/* <footer className="ds-footer px-10 bg-base-200 text-base-content">
          <div>
            <Image
              src={DAOCAT_LOGO_DARK}
              alt="DaoCat Logo"
              width={100}
              height={100}
            />
            <p>
              DAOCAT
              <br />
              DAO,Coffe And Tea
            </p>
          </div>
          <div>
            <span className="ds-footer-title">Social</span>
            <div className="grid grid-flow-col gap-4">
              <a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                </svg>
              </a>
              <a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current">
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                </svg>
              </a>
              <a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                </svg>
              </a>
            </div>
          </div>
          <div className="w-full flex fle-row justify-between">
            <div className="flex flex-col space-y-4">
              <a className="ds-link ds-link-hover">White Paper</a>
              <a className="ds-link ds-link-hover">About Us</a>
              <a className="ds-link ds-link-hover">Contact</a>
              <a className="ds-link ds-link-hover">Github</a>
            </div>

          </div>
        </footer> */}
      </div>

      <BottomNavBar />
    </>
  );
}
