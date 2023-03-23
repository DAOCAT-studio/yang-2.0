import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import React, { useState, useEffect, useRef } from "react";
import DAOCAT_LOGO_DARK from "../assets/DAOCAT_LOGO_DARK.png";
const NavBar = () => {
  return (
    <div className="ds-navbar bg-base-100 w-fulls px-10 ">
      <div className="ds-navbar-start">
        <Image
          src={DAOCAT_LOGO_DARK}
          alt="DaoCat Logo"
          width={100}
          height={100}
        />
        {/* <div className="ds-dropdown invisible lg:visible">
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
      </div> */}

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
};

export default NavBar;
