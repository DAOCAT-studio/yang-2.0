import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
const BottomNavBar = () => {
  const router = useRouter();
  const [nftGameMenuVisible, setNftGameMenuVisible] = useState(false);
  return (
    <div className="ds-btm-nav visible lg:invisible z-20 bg-paper text-jungle">
      {/* <ul
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
      </ul> */}
      <button className="ds ds-btm-nav-labell">
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
        <span
          className="ds-btm-nav-label"
          onClick={() => {
            router.push("/");
          }}>
          Home
        </span>
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
        <span
          className="ds-btm-nav-label"
          onClick={() => {
            router.push("/governance");
          }}>
          Governance
        </span>
      </button>

      <div className="ds-dropdown  ds-dropdown-top ds-dropdown-end">
        <button
          tabIndex={0}
          className="w-full h-full flex justify-center flex-col items-center">
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
          <span className="ds-btm-nav-label">NFT/GAME</span>
        </button>

        <ul
          tabIndex={0}
          className="ds-dropdown-content ds-menu p-2 shadow bg-base-100 rounded-box w-52">
          <li>
            <a>GAME</a>
          </li>
          <li>
            <a>NFT</a>
          </li>
        </ul>
      </div>

      <div className="ds-dropdown ds-dropdown-top ds-dropdown-end">
        <button
          tabIndex={1}
          className="w-full h-full flex justify-center flex-col items-center">
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

        <ul
          tabIndex={1}
          className="ds-dropdown-content ds-menu p-2 shadow bg-base-100 rounded-box w-52">
          <li>
            <a>White Papper</a>
          </li>
          <li>
            <a>About Us</a>
          </li>
          <li>
            <a>Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default BottomNavBar;
