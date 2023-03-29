import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import DAOCAT_LOGO_DARK from "../assets/DAOCAT_LOGO_DARK.png";
import coffeePotFull from "../assets/coffeePotFull.png";
import coffeePotBlank from "../assets/coffeePotBlank.png";

import NavBar from "@/components/NavBar";
import BottomNavBar from "@/components/BottomNavBar";
import VoteCat1 from "../assets/VoteCat1.png";
import VoteCat2 from "../assets/VoteCat2.png";
import VoteCat3 from "../assets/VoteCat3.png";
import VoteCat4 from "../assets/VoteCat4.png";
import JungleCat from "../assets/JungleCat.png";
import Footer from "@/components/Footer";
const inter = Inter({ subsets: ["latin"] });

export default function Main() {
  const [number, setNumber] = useState(0);
  const [progress, setProgress] = useState(0);
  const [progressIndex, setProgressIndex] = useState(0);
  const [hovering, setHovering] = useState(false);
  const [nftGameMenuVisible, setNftGameMenuVisible] = useState(false);
  const progressBarRef = useRef<null | HTMLDivElement>(null);
  const router = useRouter();
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
              <Image
                src={JungleCat}
                alt="Album"
                className="w-full lg:h-[500px] object-cover"
              />
            </figure>
            <div className="ds-card-body lg:w-1/4 bg-[#fadeca] text-[#69997c]">
              <h2 className="ds-card-title">DAO Coffee And Tea</h2>
              <p>Click the button to listen on Spotiwhy app.</p>
              <div className="ds-card-actions justify-end">
                <button
                  className="ds-btn ds-btn-outline text-[#69997c] hover:bg-[#69997c] hover:border-white"
                  onClick={() => {
                    router.push("/blog");
                  }}>
                  More
                </button>
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
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 ">
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
      <div className="w-full lg:w-1/2 min-h-[200px] lg:h-[200px] bg-[#fadeca] text-[#69997c] rounded-lg flex justify-center shadow-xl ">
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
            className="h-full bg-gradient-to-r from-[#569378ad] to-lynx transition-all"
            style={progressBarStyle}></div>
        </div>

        <div className="w-full min-h-[200px] bg-jungle text-sunset rounded-xl p-10 shadow-xl">
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
    <div className="h-auto w-full flex justify-center flex-col items-center px-10 mt-10 mb-10 text-jungle">
      <span>Governed by the community</span>
      <span>
        DAOCAT is a fully decentralized, community governed protocol with
        DCT(DAOCAT TOKEN) holders.
      </span>
      <button
        className="ds-btn ds-btn-outline text-[#69997c] hover:bg-[#69997c] hover:border-white my-10"
        onClick={() => {
          window.open("https://manager.daolens.com/app/dao/DAOCAT/1285");
        }}>
        Governance Forum
      </button>
      <div className="flex flex-col p-4 bg-jungle rounded-xl object-none shadow-xl">
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
      <div className="w-screen lg:min-h-screen h-full overflow-y-auto bg-[#f9fbf1] flex flex-col pb-[80px] lg:pb-0 justify-center items-center ">
        <NavBar />
        {Banner}
        <div className="lg:px-[200px] grow pt-5 lg:pt-10 px-4 w-full">
          {ProgressBar}
        </div>
        {GovernanceContent}

        <div className="w-full flex flex-col my-10 drop-shadow-lg shadow-black  px-10 text-jungle">
          <div className="w-full flex flex-col justify-center items-center mb-10 ">
            <h1 className="text-2xl font-bold drop-shadow-lg shadow-black ">
              RoadMap
            </h1>
          </div>

          <ul className="ds-steps ds-steps-vertical lg:ds-steps-horizontal w-full text-text-jungle">
            <li className="ds-step ds-step-neutral">
              <span className=" absolute place-self-center lg:relative">
                2023Q2
                <br />
                WhitePapper Release
              </span>
            </li>
            <li className="ds-step ds-step-neutral">
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

        <Footer />
      </div>

      <BottomNavBar />
    </>
  );
}
