import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import React, { useState, useEffect, useRef } from "react";

import DAOCAT_LOGO_DARK from "../assets/DAOCAT_LOGO_DARK.png";
import remarkGfm from "remark-gfm";
import ReactMarkdown from "react-markdown";
const inter = Inter({ subsets: ["latin"] });

export default function Blog() {
  const [nftGameMenuVisible, setNftGameMenuVisible] = useState(false);
  const testMd =
    "# Hello World !\n ## 你好，世界! ![美女漂亮不](https://daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.jpg)";
  const NavBar = (
    <div className="ds-navbar bg-base-100 w-fulls px-10  ">
      <div className="ds-navbar-start">
        <Image
          src={DAOCAT_LOGO_DARK}
          alt="DaoCat Logo"
          width={100}
          height={100}
        />
        <a className="ds-btn ds-btn-ghost normal-case text-3xl  font-google-caveat">
          DAOCAT
        </a>
      </div>

      <div className="ds-navbar-center hidden lg:flex">
        <ul className="ds-menu ds-menu-horizontal px-1">
          <li>
            <a>Governance</a>
          </li>
          <li>
            <a>NFT</a>
          </li>
          <li>
            <a>Game</a>
          </li>
          <li>
            <a>White Papper</a>
          </li>
        </ul>
      </div>

      <div className="ds-navbar-end invisible lg:visible">
        <a className="ds-btn">Get started</a>
      </div>
      {/* <div className="ds-dropdown  ds-dropdown-end visible lg:invisible">
        <label tabIndex={0} className="ds-btn ds-btn-ghost ds-btn-circle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h7"
            />
          </svg>
        </label>
        <ul
          tabIndex={0}
          className="ds-menu ds-menu-compact ds-dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
          <li>
            <a>Homepage</a>
          </li>
          <li>
            <a>Portfolio</a>
          </li>
          <li>
            <a>About</a>
          </li>
        </ul>
      </div> */}
    </div>
  );

  const BottomNav = (
    <div className="ds-btm-nav visible lg:invisible z-20">
      <ul
        className="ds-menu bg-white w-[140px] rounded-box fixed h-auto bottom-[64px] left-[190px] shadow-xl"
        style={{ visibility: nftGameMenuVisible ? "visible" : "hidden" }}
        onMouseOut={() => {
          setNftGameMenuVisible(false);
        }}>
        <li className="w-full">
          <a>Game</a>
        </li>
        <li className="w-full">
          <a>NFT</a>
        </li>
      </ul>
      <button className="ds-active">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
          />
        </svg>
        <span className="ds-btm-nav-label">Home</span>
      </button>
      <button>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <span className="ds-btm-nav-label">Governance</span>
      </button>
      <button
        onClick={() => {
          setNftGameMenuVisible(true);
        }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
          />
        </svg>
        <span className="ds-btm-nav-label">NFT/Game</span>
      </button>
      <button>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
          />
        </svg>
        <span className="ds-btm-nav-label">About</span>
      </button>
    </div>
  );

  const blogContent = (
    <div className="grow lg:w-1/2 p-3 lg:p-10 m-4 mb-[100px] rounded-xl shadow-lg border-gray-100  border-y-2">
      <article className="prose max-w-none dark:prose-invert">
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
      <div className="w-screen lg:min-h-screen h-full overflow-y-auto  bg-white flex flex-col pb-[80px] lg:pb-0 justify-between items-center">
        {NavBar}
        {/* {Banner} */}
        {blogContent}
        <footer className="ds-footer px-10 bg-base-200 text-base-content">
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
              {/* <span className="ds-footer-title">Services</span> */}
              <a className="ds-link ds-link-hover">White Paper</a>
              <a className="ds-link ds-link-hover">About Us</a>
              <a className="ds-link ds-link-hover">Contact</a>
              <a className="ds-link ds-link-hover">Github</a>
            </div>
            {/* <div className="flex flex-col  space-y-4">
              <span className="ds-footer-title">Services</span>
              <a className="ds-link ds-link-hover">Branding</a>
              <a className="ds-link ds-link-hover">Design</a>
              <a className="ds-link ds-link-hover">Marketing</a>
              <a className="ds-link ds-link-hover">Advertisement</a>
            </div> */}
          </div>
        </footer>
      </div>

      {BottomNav}
    </>
  );
}
