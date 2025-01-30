import { useState } from 'react'
import React from 'react'
import Header from './components/Header'
import './App.css'

function App() {
  return (
    <>
      <Header />

      <footer className='w-100vw py-[40px] flex flex-col justify-center items-center bg-black text-white gap-8'>
        <h3 className="flex flex-col gap-1 justify-center items-center font-bold text-base">
          <img className='w-4 h-4' src="./icons/topIcon.svg" alt="top icon" />
          BACK TO TOP</h3>
        <div className="flex gap-7">
          <a className="icons-size" href='#'><img src="./icons/githubIcon.svg" alt="GitHub icon"/></a>
          <a className="icons-size" href='#'><img src="./icons/emailIcon.svg" alt="Email icon"/></a>
          <a className="icons-size" href='#'><img src="./icons/instagramIcon.svg" alt="Instagram icon"/></a>
          <a className="icons-size" href='#'><img src="./icons/linkedinIcon.svg" alt="LinkedIn icon"/></a>
        </div>
        <h3 className='font-light text-base'><span className="font-bold">@2025 Lucas de Lacerda</span> All Rights Reserved</h3>
      </footer>
    </>
  )
}

export default App
