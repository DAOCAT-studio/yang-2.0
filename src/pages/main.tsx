import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import React, { useState, useEffect } from 'react';
const inter = Inter({ subsets: ['latin'] })

export default function Main() {
  const [number, setNumber] = useState(0);
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setNumber(prevNumber => prevNumber + Math.floor(Math.random() * 100) + 1);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (progress < 100) {
        setProgress(progress + 0.1);
      } else {
        // clearInterval(intervalId);
        setProgress(0)
      }
    }, 10);

    return () => clearInterval(intervalId);
  }, [progress]);

  const NavBar = <div className="ds-navbar bg-base-100 ">
    <div className="ds-navbar-start">
      <div className="ds-dropdown invisible lg:visible">
        <label tabIndex={0} className="ds-btn ds-btn-ghost lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        </label>
        <ul tabIndex={0} className="ds-menu ds-menu-compact ds-dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
          <li><a>Item 1</a></li>
          <li tabIndex={0}>
            <a className="justify-between">
              Parent
              <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
            </a>
            <ul className="p-2">
              <li><a>Submenu 1</a></li>
              <li><a>Submenu 2</a></li>
            </ul>
          </li>
          <li><a>Item 3</a></li>
        </ul>
      </div>
      <a className="ds-btn ds-btn-ghost normal-case text-xl">DAOCAT</a>
    </div>
    <div className="ds-navbar-center hidden lg:flex">
      <ul className="ds-menu ds-menu-horizontal px-1">
        <li><a>Governance</a></li>
        <li><a>NFT</a></li>
        <li><a>Game</a></li>
      </ul>
    </div>
    <div className="ds-navbar-end">
      <a className="ds-btn">Get started</a>
    </div>
  </div>
  const progressBarStyle = {
    width: `${progress}%`
  };
  const BottomNav = <div className="ds-btm-nav visible lg:invisible">
    <button>
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
      <span className="ds-btm-nav-label">Home</span>
    </button>
    <button className="ds-active">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
      <span className="ds-btm-nav-label">Warnings</span>
    </button>
    <button>
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
      <span className="ds-btm-nav-label">Statics</span>
    </button>
  </div>
  const Banner = <div className='w-full lg:h-[500px] h-[429px]'>
    <div className="ds-carousel w-full">
      <div id="slide1" className="ds-carousel-item relative w-full">
        <div className="ds-card lg:ds-card-side bg-base-100 shadow-xl w-full h-[429px] lg:h-[500px]  rounded-none">
          <figure className='lg:w-3/4'><img src="https://upload.wikimedia.org/wikipedia/commons/e/e4/Latte_and_dark_coffee.jpg" alt="Album" className='w-full lg:h-[500px] object-cover' /></figure>
          <div className="ds-card-body lg:w-1/4">
            <h2 className="ds-card-title">New album is released!</h2>
            <p>Click the button to listen on Spotiwhy app.</p>
            <div className="ds-card-actions justify-end">
              <button className="ds-btn ds-btn-primary">Listen</button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="btn btn-circle">❮</a>
          <a href="#slide2" className="btn btn-circle">❯</a>
        </div>
      </div>
      <div id="slide2" className="ds-carousel-item relative w-full">
        <img src="https://upload.wikimedia.org/wikipedia/commons/e/e4/Latte_and_dark_coffee.jpg" className="w-full lg:h-[500px] h-[429px] object-cover" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn btn-circle">❮</a>
          <a href="#slide1" className="btn btn-circle">❯</a>
        </div>
      </div>

    </div>
    <div className="relative bottom-12 right-0 flex justify-center w-full py-2 gap-2 invisible lg:visible">
      <a href="#slide1" className="ds-btn ds-btn-xs">1</a>
      <a href="#slide2" className="ds-btn ds-btn-xs">2</a>
    </div>
  </div>
  return (
    <>
      <Head>
        <title>DAOCAT</title>
        <meta name="description" content="DAO Coffe And Tea" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='w-screen h-screen lg:bg-white flex flex-col'>
        {NavBar}

        {BottomNav}

        {Banner}

        <div className='lg:px-[200px] grow bg-amber-100 pt-5 lg:pt-10'>
          <div className='w-full flex flex-col-reverse lg:flex-row lg:h-[300px] '>
            <div className='flex flex-col w-2/3 justify-center'>

              <div className="ds-stat-value">{number}</div>
              <span>
                Total distance advanced by all players
              </span>
            </div>
            <div className='flex flex-col w-full lg:w-1/3 pb-5'>
              <div className="ds-tabs flex flex-row justify-around">
                <a className="ds-tab ds-tab-active">Miaonopoly</a>
                <a className="ds-tab ">Reward</a>
                <a className="ds-tab">Vote</a>
              </div>
              <div className="h-1 w-full rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-green-300 to-amber-700 transition-all"
                  style={progressBarStyle}
                ></div>

              </div>
              <div className='w-full h-[200px] bg-white'>

              </div>

            </div>

          </div>
        </div>


      </div>
    </>
  )
}
