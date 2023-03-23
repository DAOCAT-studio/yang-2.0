import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import React, { useState, useEffect, useRef } from "react";

import DAOCAT_LOGO_DARK from "../assets/DAOCAT_LOGO_DARK.png";
import coffeePotFull from "../assets/coffeePotFull.png";
import coffeePotBlank from "../assets/coffeePotBlank.png";

import NavBar from "@/components/NavBar";
import BottomNavBar from "@/components/BottomNavBar";
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
  const [nftGameMenuVisible, setNftGameMenuVisible] = useState(false);
  const progressBarRef = useRef<null | HTMLDivElement>(null); 
  useEffect(() => {
    const interval = setInterval(() => {
      setNumber(
        (prevNumber) => prevNumber + Math.floor(Math.random() * 100) + 1
      );
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (!hovering) {
        if (progress < 100) {
          setProgress(progress + 0.2);
        } else {
          setProgress(0);
          setProgressIndex(progressIndex + 1);
          if (progressIndex == 3) {
            setProgressIndex(0);
          }
        }
      } else {
        clearInterval(intervalId);
      }
    }, 25);

    return () => clearInterval(intervalId);
  }, [progress, hovering]);

  const progressBarStyle = {
    width: `${progress}%`,
  };
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
                <button className="ds-btn ds-btn-outline">More</button>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle text-gray-300">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle text-gray-300">
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
            <a href="#slide1" className="btn btn-circle text-gray-300">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle text-gray-300">
              ❯
            </a>
          </div>
        </div>
      </div>
      <div className="relative bottom-12 right-0 flex justify-center w-full py-2 gap-2 invisible lg:visible">
        <a
          href="#slide1"
          className="ds-btn ds-btn-xs ds-btn-outline border-gray-300 text-gray-300">
          1
        </a>
        <a
          href="#slide2"
          className="ds-btn ds-btn-xs ds-btn-outline  border-gray-300 text-gray-300">
          2
        </a>
      </div>
    </div>
  );
  const ProgressBar = (
    <div
      className="w-full flex flex-col-reverse lg:flex-row lg:h-[250px] justify-between "
      ref={progressBarRef}>
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
            <div className="w-[150px] lg:w-[200px] h-[150px] static ">
              {/* <div
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
              </div> */}
              <div className="w-[150px] lg:w-[200px] h-[150px] relative ">
                <Image
                  src={coffeePotBlank}
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
        className="flex flex-col w-full lg:w-[400px] mb-2"
        onMouseOver={() => {
          setHovering(true);
        }}
        onMouseLeave={() => {
          setHovering(false);
        }}>
        <div
          className="ds-tabs flex flex-row  w-full justify-around flex-nowrap overflow-x-hidden"
          onClick={() => {
            if (progressBarRef.current != null) {
              progressBarRef.current.scrollIntoView({
                behavior: "smooth",
                block: "start",
                inline: "center",
              });
            }
          }}>
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
  const GovernanceContent = (
    <div className="h-auto w-full flex justify-center flex-col items-center px-10 mt-10 mb-10">
      <span>Governed by the community</span>
      <span>
        DAOCAT is a fully decentralized, community governed protocol with
        156,720 token holders.
      </span>
      <button className="ds-btn ds-btn-outline my-4">Governance Forum</button>
      <div className="flex flex-col p-4 bg-white rounded-xl object-none shadow-xl">
        <div className="flex flex-row">
          <div>
            <Image
              src={VoteCat1}
              alt="VoteCat1"
              width={200}
              height={200}
              style={{ borderTopLeftRadius: "0.75rem" }}
            />
          </div>
          <div>
            <Image
              src={VoteCat2}
              alt="VoteCat1"
              width={200}
              height={200}
              style={{ borderTopRightRadius: "0.75rem" }}
            />
          </div>
        </div>
        <div className="flex flex-row">
          <div>
            <Image
              src={VoteCat3}
              alt="VoteCat1"
              width={200}
              height={200}
              style={{ borderBottomLeftRadius: "0.75rem" }}
            />
          </div>
          <div>
            <Image
              src={VoteCat4}
              alt="VoteCat1"
              width={200}
              height={200}
              style={{ borderBottomRightRadius: "0.75rem" }}
            />
          </div>
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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Caveat&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className="w-screen lg:min-h-screen h-full overflow-y-auto  bg-white flex flex-col pb-[80px] lg:pb-0 justify-center items-center">
        <NavBar />
        {Banner}
        <div className="lg:px-[200px] grow pt-5 lg:pt-10 px-4 w-full">
          {ProgressBar}
        </div>
        {GovernanceContent}

        <div className="w-full flex flex-col my-10 drop-shadow-lg shadow-black  px-10">
          <div className="w-full flex flex-col justify-center items-center mb-10 ">
            <h1 className="text-2xl font-bold drop-shadow-lg shadow-black ">
              RoadMap
            </h1>
          </div>

          <ul className="ds-steps ds-steps-vertical lg:ds-steps-horizontal w-full text-gray-600">
            <li className="ds-step ds-step-neutral">
              <span className=" absolute place-self-center lg:relative">
                2023Q2
                <br />
                WhitePapper Release
              </span>
            </li>
            <li className="ds-step ">
              <span className=" absolute place-self-center lg:relative">
                2023Q2
                <br />
                First Round IDO
              </span>
            </li>
            <li className="ds-step ">
              <span className=" absolute place-self-center lg:relative">
                2023Q2
                <br />
                First Round IDO
              </span>
            </li>
            <li className="ds-step ">
              <span className=" absolute place-self-center lg:relative">
                2023Q2
                <br />
                WhitePapper Release
              </span>
            </li>
          </ul>
        </div>

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

      <BottomNavBar />
    </>
  );
}
