import React from "react";
import heroImage from "../public/assets/heroImage.jpg";
import { MdExpandMore } from "react-icons/md";
import Image from "next/image";
import Link from "next/link";


const HomePage = () => {
  
  return (
    
    
    <div id="home" className="h-screen w-full text-center" style={{ backgroundImage: "url(/assets/background.jpg)" }}>
      <div className="py-4 max-w-screen-xl mx-auto w-full h-full pt-24 p-4 flex flex-col justify-around items-center">
      <div className="w-64.5 h-64.5 rounded-xl border-8 border-amber-500 shadow-xl">
        <div className="w-44 h-44 mx-auto overflow-hidden rounded-xl">
          <Image src={heroImage} alt="me" />
        </div>
        </div>

        <h1 className="py-4 uppercase font-bold text-black text-4xl">
          Developer | Coder | Software Geek
        </h1>

        <p className="text-black text-xl max-w-sm mx-auto">
          Hello ! I am Mukul Dharashivkar, a Software Developer and Gamer.
        </p>
        <p className="text-black text-xl max-w-sm mx-auto">
          Click ABOUT ME to know more.
        </p>

        <Link href="/#about">
          <div className="group flex items-center justify-center my-8 bg-black text-white border-2 border-white px-6 py-3 font-bold uppercase rounded-md tracking-wider cursor-pointer hover:text-amber-500">
            about me
            <span className="-rotate-90 duration-100 ease-in group-hover:rotate-0">
              <MdExpandMore size={25} />
            </span>
          </div>
        </Link>
      </div>
    </div>
    
  );
};

export default HomePage;