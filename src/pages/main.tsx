import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import React, { useState, useEffect } from "react";

import DAOCAT_LOGO_DARK from "../assets/DAOCAT_LOGO_DARK.png";
import coffeePotFull from "../assets/coffeePotFull.png";
import coffeePotBlank from "../assets/coffeePotBlank.png";
import VoteCat1 from "../assets/VoteCat1.png";
import VoteCat2 from "../assets/VoteCat2.png";
import VoteCat3 from "../assets/VoteCat3.png";
import VoteCat4 from "../assets/VoteCat4.png";

const inter = Inter({ subsets: ["latin"] });

export default function Main() {
  const [number, setNumber] = useState(0);
  const [progress, setProgress] = useState(0);
  const [progressIndex, setProgressIndex] = useState(0);
  const [hovering, setHovering] = useState(false);
  useEffect(() => {
    const interval = setInterval(() => {
      setNumber(
        (prevNumber) => prevNumber + Math.floor(Math.random() * 100) + 1
      );
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  // useEffect(() => {
  //   const intervalId = setInterval(() => {
  //     if (!hovering) {
  //       if (progress < 100) {
  //         setProgress(progress + 0.2);
  //       } else {
  //         setProgress(0);
  //         setProgressIndex(progressIndex + 1);
  //         if (progressIndex == 3) {
  //           setProgressIndex(0);
  //         }
  //       }
  //     } else {
  //       clearInterval(intervalId);
  //     }
  //   }, 25);

  //   return () => clearInterval(intervalId);
  // }, [progress, hovering]);

  const NavBar = (
    <div className="ds-navbar bg-base-100 w-fulls px-10 ">
      <div className="ds-navbar-start">
        <Image
          src={DAOCAT_LOGO_DARK}
          alt="DaoCat Logo"
          width={100}
          height={100}
        />
        <div className="ds-dropdown invisible lg:visible">
          <label tabIndex={0} className="ds-btn ds-btn-ghost lg:hidden">
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
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="ds-menu ds-menu-compact ds-dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            <li>
              <a>Item 1</a>
            </li>
            <li tabIndex={0}>
              <a className="justify-between">
                Parent
                <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24">
                  <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                </svg>
              </a>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>

        <a className="ds-btn ds-btn-ghost normal-case text-xl">DAOCAT</a>
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
  const progressBarStyle = {
    width: `${progress}%`,
  };
  const BottomNav = (
    <div className="ds-btm-nav visible lg:invisible z-20">
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
            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
          />
        </svg>
        <span className="ds-btm-nav-label">Home</span>
      </button>
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
            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <span className="ds-btm-nav-label">Warnings</span>
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
        <span className="ds-btm-nav-label">Statics</span>
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
        <span className="ds-btm-nav-label">Statics</span>
      </button>
    </div>
  );
  const Banner = (
    <div className="lg:w-[1350px] lg:h-[500px] h-[429px] my-5 px-5 ">
      <div className="ds-carousel w-full rounded-xl shadow-xl  ">
        <div id="slide1" className="ds-carousel-item relative w-full">
          <div className="ds-card lg:ds-card-side bg-base-100 shadow-xl w-full h-[429px] lg:h-[500px]  rounded-none">
            <figure className="lg:w-3/4">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/e/e4/Latte_and_dark_coffee.jpg"
                alt="Album"
                className="w-full lg:h-[500px] object-cover"
              />
            </figure>
            <div className="ds-card-body lg:w-1/4 ">
              <h2 className="ds-card-title">DAO Coffee And Tea</h2>
              <p>Click the button to listen on Spotiwhy app.</p>
              <div className="ds-card-actions justify-end">
                <button className="ds-btn ds-btn-primary">Listen</button>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="ds-carousel-item relative w-full">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/e/e4/Latte_and_dark_coffee.jpg"
            className="w-full lg:h-[500px] h-[429px] object-cover"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
      <div className="relative bottom-12 right-0 flex justify-center w-full py-2 gap-2 invisible lg:visible">
        <a href="#slide1" className="ds-btn ds-btn-xs">
          1
        </a>
        <a href="#slide2" className="ds-btn ds-btn-xs">
          2
        </a>
      </div>
    </div>
  );
  const ProgressBar = (
    <div className="w-full flex flex-col-reverse lg:flex-row lg:h-[250px] justify-between ">
      <div className="w-full lg:w-1/2 min-h-[200px] lg:h-[200px] bg-white rounded-lg flex justify-center shadow-xl">
        {progressIndex == 0 && (
          <div className="flex flex-col w-2/3 justify-center">
            <div className="ds-stat-value">{number}</div>
            <span> squares advanced by all players</span>
          </div>
        )}
        {progressIndex == 1 && (
          <div className="flex flex-col w-2/3 justify-center">
            <div className="ds-stat-value">{number} DCT</div>
            <div className="ds-stat-value">{(number / 300).toFixed(0)} NFT</div>
            <span> reward to player from Miaonopoly. </span>
          </div>
        )}
        {progressIndex == 2 && (
          <div className="flex flex-col w-2/3 justify-center">
            <div className="ds-stat-value">{number}</div>
            <span>of votes in the DAOCAT community</span>
          </div>
        )}
        {progressIndex == 3 && (
          <div className="flex flex-row w-full lg:w-2/3 justify-center pt-5">
            {/* //145:0  80:100  */}
            <div className="w-[150px] lg:w-[200px] h-[150px]">
              <div
                className={`w-[150px] lg:w-[200px] h-[112px] absolute overflow-hidden z-10 `}>
                <Image
                  src={coffeePotBlank}
                  alt="DaoCat Logo"
                  width={300}
                  height={300}
                  style={{ objectFit: "cover", objectPosition: "bottom" }}
                  // objectFit="cover"
                  // objectPosition="bottom"
                />
              </div>
              <div className="w-[150px] lg:w-[200px] h-[150px] relative ">
                <Image
                  src={coffeePotFull}
                  alt="DaoCat Logo"
                  width={300}
                  height={300}
                />
              </div>
            </div>
            <div className="w-100">
              <div className="ds-stat-value">{0} /10000$</div>
              <span>
                Holding DCT or playing Miaonopoly will support us to open the
                first DAOCAT coffee shop.
              </span>
            </div>
          </div>
        )}
      </div>

      <div
        className="flex flex-col w-full lg:w-[400px] pb-5"
        onMouseOver={() => {
          setHovering(true);
        }}
        onMouseLeave={() => {
          setHovering(false);
        }}>
        <div className="ds-tabs flex flex-row justify-around">
          <a
            className={"ds-tab " + (progressIndex == 0 ? "ds-tab-active" : "")}
            onClick={() => {
              setProgressIndex(0);
            }}>
            Miaonopoly
          </a>
          <a
            className={"ds-tab " + (progressIndex == 1 ? "ds-tab-active" : "")}
            onClick={() => {
              setProgressIndex(1);
            }}>
            Reward
          </a>
          <a
            className={"ds-tab " + (progressIndex == 2 ? "ds-tab-active" : "")}
            onClick={() => {
              setProgressIndex(2);
            }}>
            Vote
          </a>
          <a
            className={"ds-tab " + (progressIndex == 3 ? "ds-tab-active" : "")}
            onClick={() => {
              setProgressIndex(3);
            }}>
            Crowdfunding
          </a>
        </div>
        <div className="h-1 w-full rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-green-300 to-amber-700 transition-all"
            style={progressBarStyle}></div>
        </div>
        <div className="w-full min-h-[200px] bg-white rounded-xl p-10 shadow-xl">
          {progressIndex == 0 && (
            <div className="w-full h-full">
              <span>
                Miaonopoly is a blockchain version of Monopoly game, you can win
                DAO CAT TOKEN and limited NFT by playing Miaonopoly
              </span>
            </div>
          )}
          {progressIndex == 1 && (
            <div className="w-full h-full">
              <span>
                Miaonopoly will update new maps and rewards every season, but
                token rewards and NFT rewards for each season are limited.{"\r"}
                "Act quickly to win, hesitate and you'll fall behind."
              </span>
            </div>
          )}
          {progressIndex == 2 && (
            <div className="w-full h-full">
              <span>
                Vote to decide the operation of DAOCAT community and coffee
                shop. Actively participate in voting and you will get more
                rewards.
              </span>
            </div>
          )}
          {progressIndex == 3 && (
            <div className="w-full h-full">
              <span>
                DAOCAT coffee shop - A coffee shop operated by DAO, your support
                will make you one of the owners of DAOCAT coffee shop.
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
  return (
    <>
      <Head>
        <title>DAOCAT</title>
        <meta name="description" content="DAO Coffe And Tea" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/DAOCAT_LOGO_DARK.png" />
      </Head>
      <div className="w-screen lg:min-h-screen h-full overflow-y-auto  bg-white flex flex-col pb-[80px] lg:pb-0 justify-center items-center">
        {NavBar}
        {Banner}
        <div className="lg:px-[200px] grow pt-5 lg:pt-10 px-4 w-full">
          {ProgressBar}
        </div>
        <div className="h-[500px] w-full flex justify-center flex-col items-center px-10">
          <span>Governed by the community</span>
          <span>
            DAOCAT is a fully decentralized, community governed protocol with
            156,720 token holders.
          </span>
          <div className="flex flex-col p-4 bg-white rounded-xl object-none shadow-xl">
            <div className="flex flex-row">
              <div>
                <Image src={VoteCat1} alt="VoteCat1" width={200} height={200} style={{borderRadius:"0.75rem"}} />
              </div>
              <div>
                <Image src={VoteCat2} alt="VoteCat1" width={200} height={200} style={{borderRadius:"0.75rem"}}  />
              </div>
            </div>
            <div className="flex flex-row">
              <div>
                <Image src={VoteCat3} alt="VoteCat1" width={200} height={200} style={{borderRadius:"0.75rem"}}  />
              </div>
              <div>
                <Image src={VoteCat4} alt="VoteCat1" width={200} height={200} style={{borderRadius:"0.75rem"}}  />
              </div>
            </div>
          </div>
        </div>
      </div>
      {BottomNav}
    </>
  );
}
