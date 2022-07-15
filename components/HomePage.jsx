import React from "react";
import heroImage from "../public/assets/heroImage.jpg";
import { MdExpandMore } from "react-icons/md";
import Image from "next/image";
import Link from "next/link";


const HomePage = () => {
  
  return (
    
    
    <div id="home" className="h-screen w-full text-center" style={{ backgroundImage: "url(/assets/background.jpg)" }}>
      <div className="max-w-screen-xl mx-auto w-full h-full pt-24 p-4 flex flex-col justify-around items-center">
      <div className="w-64.5 h-64.5 rounded-xl border-8 border-amber-500 shadow-xl">
        <div className="w-64 h-64 mx-auto overflow-hidden rounded-xl">
          <Image src={heroImage} alt="me" />
        </div>
        </div>

        <h1 className="uppercase font-bold text-black text-4xl">
          Developer | Coder | Gamer
        </h1>

        <p className="text-black text-xl max-w-sm mx-auto font-bold">
          I am Mukul Dharashivkar, a Software Developer and Gamer.
          <p> I am a fresher in software development scene, I can write professional programs in Python, C and C++, Java, HTML, Javascript and CSS. To sum it up, I LOVE CODING.
          </p>
        </p>

        <Link href="/#me">
          <div className="group flex items-center justify-center my-8 bg-black text-white border-2 border-white px-6 py-3 font-bold uppercase rounded-md tracking-wider cursor-pointer hover:text-amber-500">
            know more
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
