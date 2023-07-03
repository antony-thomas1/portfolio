import Head from 'next/head'
import Image from 'next/image'

import {
  BsTwitter,
  BsLinkedin,
  BsGithub,
} from "react-icons/bs";

import React, { useRef, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import {FaReact, FaEthereum} from 'react-icons/fa'
import swiftpay from 'public/Swift_logo.png'
import upload from 'public/upload.png'
import curare from 'public/curare.png'
import cubic from 'public/cubic_logo.png'
import neon from 'public/Neon_logo.png'
import logo from 'public/A.png'
import mirage from 'public/Mirage_logo.png'
import profile from 'public/profile2.jpg'
import sign from 'public/sign.png'
import truffle from 'public/truffle.png'
import thirdweb from 'public/thirdweb.png'
import hardhat from 'public/hardhat.png'
import solidity from 'public/solidity.png'
import nextjs from 'public/nextjs.png'
import Typewriter from 'typewriter-effect';

export default function Home() {

  const form = useRef();
  const works = useRef();
  const contact = useRef();

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
     });
    };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(process.env.NEXT_PUBLIC_SERVICE_ID, process.env.NEXT_PUBLIC_TEMPLATE_ID, form.current, process.env.NEXT_PUBLIC_PUBLIC_ID)
      .then((result) => {
          console.log(result.text);
          alert("Message sent successful !")
      }, (error) => {
          console.log(error.text);
          alert("Something went wrong...!")
      });
  };


  return (
    <div className='bg-[#FEFCF3] h-screen'>
      <Head>
        {/* Favicon & Tab Title */}
        <title>Portfolio</title>
        <meta name="description" content="Portfolio created by Antony" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/fav_logo.png" />
      </Head>
      <nav className='sm:px-5 px-[2px] sm:justify-between justify-evenly items-center flex p-4'>
        
        {/* Left nav elements */}
        <div className=' justify-center items-center sm:flex px-10 '>
          
            <div onClick={() => scrollToSection(works)} className='transition duration-150 ease-in-out hover:-translate-y-1 hover:scale-110 px-2 py-2 cursor-pointer text-xl text-gray-800 font-serif hover:bg-[#e7eedd] rounded-lg'>
              Works
            </div>
          
          <a href='https://gateway.ipfscdn.io/ipfs/QmUWtCK8ckibEb8kYbbaUFq9FwF6usYMH8Yf2sS53NVFfU'>
            <div className='transition duration-150 ease-in-out hover:-translate-y-1 hover:scale-110 cursor-pointer text-xl text-gray-800 font-serif px-2 py-2 hover:bg-[#e7eedd] rounded-lg'>
              Resume
            </div>
          </a>
          
            <div onClick={() => scrollToSection(contact)} className='transition duration-150 ease-in-out hover:-translate-y-1 hover:scale-110 cursor-pointer text-xl text-gray-800 font-serif px-2 py-2 hover:bg-[#e7eedd] rounded-lg'>
              Contact
            </div>
          
        </div>

        {/* Logo Image  */}
        <div className='transition duration-150 ease-in-out hover:-translate-y-1 hover:scale-110 py-2 cursor-pointer justify-center items-center flex-col px-3'>
          <Image src={logo} alt='logo' width={70} height={70}/>

        </div>
          

      {/* Right nav elements */}
        
        {/* Social Media Icons */}
        <div className=" cursor-pointer sm:text-[40px] text-[42px] sm:flex   justify-center gap-10  text-gray-700 px-10">
              <a href='https://twitter.com/_kallistus_'><BsTwitter className='transition duration-150 ease-in-out hover:-translate-y-1 hover:scale-110 px-2 py-2'/></a>
              <a href='https://www.linkedin.com/in/antony-thomas-8a6273212/'><BsLinkedin className='transition duration-150 ease-in-out hover:-translate-y-1 hover:scale-110 px-2 py-2' /></a>
              <a href='https://github.com/antony-thomas1'><BsGithub className='transition duration-150 ease-in-out hover:-translate-y-1 hover:scale-110 px-2 py-2'/></a>
        </div>
        
      </nav>
      <main className='bg-[#FEFCF3] '>

        {/* First Section */}
        <section className=' min-h-screen sm:transition-all'>

          {/* Center Heading */}
          <div className='text-center py-12 text-6xl text-gray-800 font-serif leading-normal'>
            <h1>Antony Thomas</h1>
            {/* <h1>Blockchain Developer</h1> */}
            <Typewriter
              options={{
                strings: ['Blockchain Developer', 'UI/UX Designer', 'Full-Stack Developer'],
                autoStart: true,
                loop: true,
              }}
            />

          </div>
          <div className='justify-evenly items-center flex sm:flex-row flex-col'>

            {/* Left Divison Contents */}
            <div className=' justify-center items-center p-5 m-5 rounded-md'>
              <h2 className=' text-slate-600 font-normal text-xl'>
                BIOGRAPHY
              </h2>
              <h4 className=' text-black leading-2 font-serif py-8 text-2xl'>
                Passionate Developer <br/>
                Always looks to approach in <br/> a different way! I'm Antony, <br/>
                Blockchain/Web3 developer<br/> based in India.
              </h4>
              <h2 className='  text-slate-600 font-normal text-xl pt-7'>
                SERVICES
              </h2>
              <h4 className=' text-black leading-2 font-serif py-8 text-2xl'>
                Solidity Smart Contract<br/>
                UI/UX design <br/> 
                Full-Stack Dapp
              </h4>
              <h2 className=' text-slate-600 font-normal text-xl pt-7'>
                CONTACT
              </h2>
              <h4 className=' text-black leading-2 font-serif py-8 text-2xl'>
                antonythomas@tutanota.com<br/>
                +91 94966 15892<br/> 
              </h4>
            </div>
            <div className='border-[1px] border-gray-400 rounded-full p-8'>
              
              {/* Profile Image */}
              <div className='mx-auto relative overflow-hidden rounded-full bg-[#515d5f] '>
                <Image src={profile}/>
              </div>
            </div>
          </div>

          {/* Horizontal Line */}
          <div className=' justify-center items-center px-20 py-10'>
            <div className="h-[1px] w-auto bg-gray-800 "/>
          </div>
        </section>

        {/* Skills Section */}
        <section className=''>
          <div className=' text-center font-serif text-4xl p-4 text-gray-800'>
            <h2 className='px-10'>
              Skills
            </h2>
          </div>

          {/* Skills Containers */}

          <div className=' justify-center gap-10 items-center flex sm:flex-row flex-col p-10'>

            <div className='flex-col '>
              <div className='transition duration-150 ease-in-out hover:-translate-y-1 hover:scale-110 shadow-lg cursor-pointer py-12 items-center h-40 w-40 rounded-3xl bg-[#e7eedd]  text-blue-500 justify-center text-7xl'>
                <FaReact className='mx-auto'/>
              </div>
              <div className=' pt-7 text-center text-black text-lg font-mono'>
                ReactJs
              </div>
            </div>

            <div className='flex-col'>
              <div className='transition duration-150 ease-in-out hover:-translate-y-1 hover:scale-110 cursor-pointer shadow-lg h-40 w-40 p-9 justify-center rounded-3xl bg-[#e7eedd]'>
                <Image  src={nextjs}/>
              </div>
              <div className=' pt-7 text-center text-black text-lg font-mono'>
                NextJs
              </div>
            </div>

            <div className='flex-col'>
              <div className='transition duration-150 ease-in-out hover:-translate-y-1 hover:scale-110 cursor-pointer shadow-lg py-12 text-7xl h-40 w-40 justify-center items-center rounded-3xl bg-[#e7eedd]'>
                <FaEthereum className='mx-auto'/>
              </div>
              <div className=' pt-7 text-center text-black text-lg font-mono'>
                Ethereum
              </div>
            </div>

            <div className='flex-col'>
              <div className='transition duration-150 ease-in-out hover:-translate-y-1 hover:scale-110 cursor-pointer shadow-lg h-40 w-40 p-10 justify-center rounded-3xl bg-[#e7eedd]'>
                <Image className='h-20 w-14 mx-auto' src={solidity}/>
              </div>
              <div className=' pt-7 text-center text-black text-lg font-mono'>
                Solidity
              </div>
            </div>

            <div className='flex-col'>
              <div className='transition duration-150 ease-in-out hover:-translate-y-1 hover:scale-110 cursor-pointer shadow-lg h-40 w-40 px-7 py-9 items-center justify-center rounded-3xl bg-[#e7eedd]'>
                <Image src={thirdweb}/>
              </div>
              <div className=' pt-7 text-center text-black text-lg font-mono'>
                Thirdweb
              </div>
            </div>

            <div className='flex-col'>
              <div className='transition duration-150 ease-in-out hover:-translate-y-1 hover:scale-110 cursor-pointer p-9 shadow-lg h-40 w-40 justify-center rounded-3xl bg-[#e7eedd]'>
                <Image  src={truffle}/>
              </div>
              <div className=' pt-7 text-center text-black text-lg font-mono'>
                Truffle
              </div>
            </div>

            <div className='flex-col'>
              <div className='transition duration-150 ease-in-out hover:-translate-y-1 hover:scale-110 cursor-pointer shadow-lg h-40 w-40 px-7 py-9 items-center justify-center rounded-3xl bg-[#e7eedd]'>
                <Image src={hardhat}/>
              </div>
              <div className=' pt-7 text-center text-black text-lg font-mono'>
                Hardhat
              </div>
            </div>

          </div>

          {/* Horizontal Line */}
          <div className=' justify-center items-center px-20 py-10'>
            <div className="h-[1px] w-auto bg-gray-800 "/>
          </div>  
        </section>

        {/* Education */}
        <section>
          <div className=' text-center font-serif text-4xl p-4 text-gray-800'>
            <h2 className='px-10'>
              Education
            </h2>
          </div>

          {/* Education tab */}
          <div className='p-5 justify-center sm:gap-40 gap-10 items-center flex sm:flex-row flex-col'>
            
            <div >
              <h2 className=' text-slate-600 font-normal text-xl pt-8'>
                2017 - 2019
              </h2>
              <h4 className=' text-black leading-2 font-serif pt-5 text-2xl'>
                High School
              </h4>
              <h4 className=' text-gray-600 font-serif text-lg py-4'>
                St.Epherem's HSS,<br/>
                Manannam
              </h4>
            </div>

            <div >
              <h2 className=' text-slate-600 font-normal text-xl pt-8'>
                2019 - 2023
              </h2>
              <h4 className=' text-black leading-2 font-serif pt-5 text-2xl'>
                Bachelor of Technology in <br/>
                Computer Science and Engineering
              </h4>
              <h4 className=' text-gray-600 font-serif text-lg py-4'>
                Amal Jyothi College Of Engineering,<br/>
                Kanjirapally 
              </h4>
            </div>

          </div>

          {/* Horizontal Line */}
          <div className=' justify-center items-center px-20 py-10'>
            <div className="h-[1px] w-auto bg-gray-800 "/>
          </div> 
        
        </section>

        {/* Academic Projects */}
        <section ref={works}>
          {/* Title */}
          <div  className=' text-center font-serif text-4xl p-4 text-gray-800'>
            <h2 className='px-10'>
              Academic Projects
            </h2>
          </div>

          {/* Projects tile */}
          <div className=' justify-center gap-20 items-center flex sm:flex-row flex-col p-10'>

            {/* Curare */}
            <div className='flex-col'>
              <div className='transition duration-150 ease-in-out hover:-translate-y-1 hover:scale-110 cursor-pointer shadow-lg w-[300px] h-[620px] sm:w-[350px] sm:h-[530px] rounded-3xl bg-[#e7eedd]'>
                  <div className='w-full h-[200px]  bg-[#1e2c54] rounded-t-[15px]'>
                    <Image className='ml-[12px] py-11 object-cover ' src={curare}/>
                  </div>
                <div className='flex flex-col p-4'>
                  <p className='p-[10px] font-serif text-black font-[12px] text-left leading-[24px] '>
                      Curare is a hospital management application, done as a mini project consisting a four team members. The Objective of the project was to give a list of available doctors in a hospital and book an appointment.
                  </p>
                  <div className='mt-[47px] flex justify-center items-center gap-5 py-4'>
                    <a href='https://github.com/antony-thomas1/curare'><BsGithub className=' text-4xl hover:text-blue-800'/></a>
                  </div>
                </div>
              </div>

              <div className=' pt-7 text-center text-black text-lg font-mono'>
                Curare
              </div>
            </div>

            {/* Mirage */}
          <div className='flex-col'>
              <div className='transition duration-150 ease-in-out hover:-translate-y-1 hover:scale-110 cursor-pointer shadow-lg w-[300px] h-[620px] sm:w-[350px] sm:h-[530px] rounded-3xl bg-[#e7eedd]'>
                  <div className='w-full h-[200px]  bg-[#1e2c54] rounded-t-[15px]'>
                    <Image className=' py-11 object-cover ' src={mirage}/>
                  </div>
                <div className='flex flex-col p-4'>
                  <p className='p-[10px] font-serif text-black font-[12px] text-left leading-[26px] '>
                      Mirage is a supplychain management application using blockchain. It is developed by a team of four, we developed a dapp where a user can create a shipment which monitors the status of the shipment, view its approvals and send/receive NFT documents.
                  </p>
                  <div className='mt-[2px] flex justify-center items-center gap-5 py-4'>
                    <a href='https://github.com/Mirage-Works/Mirage'><BsGithub className=' text-4xl hover:text-blue-800'/></a>
                    <a href='https://bit.ly/mirage-project'>
                      <div className='px-3 py-1 bg-slate-700 font-serif text-white text-xl rounded-md hover:bg-black'>
                        View
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              <div className=' pt-7 text-center text-black text-lg font-mono'>
                Mirage
              </div>
            </div>
          </div>

          {/* Horizontal Line */}
          <div className=' justify-center items-center px-20 py-10'>
            <div className="h-[1px] w-auto bg-gray-800 "/>
          </div> 

        </section>

        {/* Personal Projects */}
        <section className=''>

          {/* Title */}
          <div className=' text-center font-serif text-4xl p-4 text-gray-800'>
            <h2 className='px-10'>
              Personal Projects
            </h2>
          </div>

          {/* Project Tiles */}
          <div className='justify-center gap-[30px] items-center flex sm:flex-row flex-col p-10'>
            {/* SwiftPay */}
            <div className='flex-col'>
                <div className='transition duration-150 ease-in-out hover:-translate-y-1 hover:scale-110 cursor-pointer shadow-lg w-[300px] h-[620px] sm:w-[350px] sm:h-[530px] rounded-3xl bg-[#e7eedd]'>
                  <div className='w-full h-[200px]  bg-[#1e2c54] rounded-t-[15px]'>
                    <Image className='ml-[30px] py-11 object-cover ' src={swiftpay}/>
                  </div>
                  
                  <div className='flex flex-col p-4'>
                    <p className='p-[10px] font-serif text-black font-[12px] text-left leading-[23px] '>
                        SwiftPay is a crypto exchange application. Users can connet their metamask wallet, then provide the receiver's wallet address, amount to be given,a message and a keyword. The GIPHY api will be fetching a gif based on the keyword given. 
                        <br/><br/>Requirements:<br/>
                        * Metamask wallet<br/>
                        * Goerli test tokens
                    </p>
                    <div className=' flex justify-center items-center gap-5 py-3'>
                      <a href='https://github.com/antony-thomas1/SwiftPay'><BsGithub className=' text-4xl hover:text-blue-800'/></a>
                      <a href='https://antony-swiftpay.netlify.app/'>
                        <div className='px-3 py-1 bg-slate-700 font-serif text-white text-xl rounded-md hover:bg-black'>
                          View
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
                <div className=' pt-7 text-center text-black text-lg font-mono'>
                  SwiftPay
                </div>
            </div>

            {/* Cubic Crowdfunding */}
            <div className='flex-col'>
                
                <div className='transition duration-150 ease-in-out hover:-translate-y-1 hover:scale-110 cursor-pointer shadow-lg w-[300px] h-[620px] sm:w-[350px] sm:h-[530px] rounded-3xl bg-[#e7eedd]'>
                  <div className='w-full h-[200px]  bg-[#1e2c54] rounded-t-[15px]'>
                    <Image className=' py-11 object-cover ' src={cubic}/>
                  </div>
                  <div className='flex flex-col p-4'>
                    <p className='p-[10px] font-serif text-black font-[12px] text-left leading-[20px] '>
                        Cubic is a crowdfunding website where users can connect and contribute to existing campaigns and create their own campaigns, thus raise an amount from donations given by other users. Campaign details can be viewed by clicking the campaign itself.
                        <br/><br/>Requirements:<br/>
                        * Metamask wallet<br/>
                        * Goerli test tokens
                    </p>
                    <div className='mt-[2px] flex justify-center items-center gap-5 py-4'>
                      <a href='https://github.com/antony-thomas1/Cubic'><BsGithub className=' text-4xl hover:text-blue-800'/></a>
                      <a href='https://antony-cubic.netlify.app/'>
                        <div className='px-3 py-1 bg-slate-700 font-serif text-white text-xl rounded-md hover:bg-black'>
                          View
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className=' pt-7 text-center text-black text-lg font-mono'>
                  Cubic Crowdfunding
                </div>
                
            </div>

            {/* Neon Mint */}
            <div className='flex-col'>
                
                <div className='transition duration-150 ease-in-out hover:-translate-y-1 hover:scale-110 cursor-pointer shadow-lg w-[300px] h-[620px] sm:w-[350px] sm:h-[530px] rounded-3xl bg-[#e7eedd]'>
                  <div className='w-full h-[200px]  bg-[#1e2c54] rounded-t-[15px]'>
                    <Image className='ml-[10px] py-11 object-cover ' src={neon}/>
                  </div>
                  <div className='flex flex-col p-4'>
                    <p className='p-[10px] font-serif text-black font-[12px] text-left leading-[20px] '>
                      Neon Mint is a NFT token minting website. A NFT is deployed, users can mint the NON token till the minting is allowed by the owner. Token and realted details can be viewed by clicking the "Token Contract" button.
                      <br/><br/><br/>Requirements:<br/>
                        * Metamask wallet<br/>
                        * Goerli test tokens
                    </p>
                    <div className='mt-[2px] flex justify-center items-center gap-5 py-4'>
                      <a href='https://github.com/antony-thomas1/Neon_Mint'><BsGithub className=' text-4xl hover:text-blue-800'/></a>
                      <a href='https://antony-neon.vercel.app/'>
                        <div className='px-3 py-1 bg-slate-700 font-serif text-white text-xl rounded-md hover:bg-black'>
                          View
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className=' pt-7 text-center text-black text-lg font-mono'>
                  Neon Mint
                </div>
                
            </div>

            {/* Upload */}
            <div className='flex-col'>
                
                <div className='transition duration-150 ease-in-out hover:-translate-y-1 hover:scale-110 cursor-pointer shadow-lg w-[300px] h-[620px] sm:w-[350px] sm:h-[530px] rounded-3xl bg-[#e7eedd]'>
                  <div className='w-full h-[200px]  bg-[#1e2c54] rounded-t-[15px]'>
                    <Image className='py-11 object-cover ' src={upload}/>
                  </div>
                  <div className='flex flex-col p-4'>
                    <p className='p-[10px] font-serif text-black font-[12px] text-left leading-[20px] '>
                    Upload is a Google Drive alternative, which stores the files to IPFS. Connect the Metamask wallet and have some Fantom test tokens to store your files. Upload unlimited amounts of files, just pay the gas fee which is less than a cent.
                      <br/><br/><br/>Requirements:<br/>
                        * Metamask wallet<br/>
                        * Fantom test tokens
                    </p>
                    <div className='mt-[2px] flex justify-center items-center gap-5 py-4'>
                      <a href='https://github.com/antony-thomas1/Upload'><BsGithub className=' text-4xl hover:text-blue-800'/></a>
                      <a href='https://antony-upload.vercel.app/'>
                        <div className='px-3 py-1 bg-slate-700 font-serif text-white text-xl rounded-md hover:bg-black'>
                          View
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className=' pt-7 text-center text-black text-lg font-mono'>
                  Upload
                </div>
                
            </div>
            

          </div>

          {/* Horizontal Line */}
          <div className=' justify-center items-center px-20 py-10'>
            <div className="h-[1px] w-auto bg-gray-800 "/>
          </div> 

        </section>

        {/* Contact */}
        <section ref={contact}>

          {/* Title */}
          <div  className=' text-center font-serif text-4xl p-4 text-gray-800'>
            <h2 className='px-10'>
              Contact
            </h2>
          </div>

          {/* Contact Form */}
          
          <div className='py-10 sm:px-[430px] justify-center items-center content-center'>
            <div className=' bg-[#e7eedd] py-10 px-3  rounded-[20px] gap-4 shadow-xl'>
            
              <div className=" justify-center items-center ">
                
                <form ref={form} className='p-[20px] text-[18px]' onSubmit={sendEmail}>
                  <p>
                    <label htmlFor="name" className='block mx-[10px] mb-[5px] font-serif'>Name *</label>
                    <input placeholder='Name' id="name" type="text" name="name"  className='rounded-[10px] p-[12px] w-full font-epilogue text-[16px]'/>
                  </p>
                  <p>
                    <label htmlFor="email" className='block mx-[10px] mb-[5px] mt-[20px] font-serif' >Email *</label>
                    <input placeholder='Enter email address' id="email" type="text" name="email" className='rounded-[10px] p-[12px] w-full font-epilogue text-[16px]' />
                  </p>
                  <p>
                    <label htmlFor="message" className='block mx-[10px] mb-[5px] mt-[20px] font-serif'>Message *</label>
                    <textarea placeholder='Type your message ...' id="message" name="message" className='rounded-[10px] p-[12px] w-full font-epilogue text-[16px]' />
                  </p>
                  <p>
                    <button className='text-white font-semibold rounded-[10px] py-[12px] px-[16px] bg-[#30302f] hover:bg-black text-[18px] mt-[20px]'>
                      Submit
                    </button>
                  </p>
                </form>
              </div>
            
            </div>
          </div>


        </section>

        {/* Footer */}
        <div className='w-full h-[200px] bg-gray-800 flex sm:flex-row flex-col justify-evenly items-center px-10 mt-5'>
          <div className='flex justify-center items-center '>
            <Image src={sign} alt='sign' className=' object-contain' width={200} height={190} />
          </div>

          <div className='flex flex-col justify-center items-center text-center'>
            <h4 className='font-serif font-normal text-white text-[20px]'>Contact:</h4>
            <h4 className='font-serif font-normal text-white text-[20px] '>antonythomas1@proton.me</h4>
          </div>

          <div className='flex flex-col justify-center items-center text-center'>
            <h4 className='font-serif font-normal text-white text-[20px]'>All Rights Reserved</h4>
          </div>
        </div>

      </main>
    </div>
  )
}
