import Link from "next/link";
import React from "react";

import { MdExpandMore } from "react-icons/md";

const About = () => {
  return (
    <div id="about" className="w-full bg-zinc-800">
      <div className="bg-dark" id="about">
        <div className="container flex flex-col items-center py-16 md:py-20 lg:flex-row">
          <div className="w-full text-center sm:w-3/4 lg:w-3/5 lg:text-left">
            <h2 className="mx-20 font-header text-4xl font-semibold uppercase text-amber-500 sm:text-5xl lg:text-4xl">
              Who am I?
            </h2>
            <h4 className="py-4 max-w-2xl mx-20 font-header text-xl font-medium text-white sm:text-2xl lg:text-3xl">
              I am Mukul Dharashivkar, a Software Developer & Gamer
            </h4>
            <p className="py-4 max-w-2xl mx-20 text-white font-body leading-relaxed">
              I am a fresher in software development scene, I can write professional
              programs in Python, C and C++, Java, HTML, Javascript and CSS. I have done
              my Bachelors of Engineeing from Progressive Education Society Modern Colleges
              of Engineering, Pune, Maharashtra -IN. I am just fascinated about the automation
              of tasks that coding brings into play. To sum it up, I LOVE CODING.
            </p>
            
          </div>
          <div className="w-full pl-10 pr-10 pt-10 sm:w-3/4 lg:w-2/5 lg:pl-12 lg:pt-0 ">
            <div>
              <div className="flex items-end justify-between ">
                <h4 className="font-body font-semibold uppercase text-white">
                  HTML, Javascript & CSS
                </h4>
                <h3 className="font-body text-3xl font-bold text-white">75%</h3>
              </div>
              <div className="mt-2 h-3 w-full rounded-full bg-lila bg-white ">
                <div className="h-3 rounded-full bg-amber-500" style={{"width": "75%"}}></div>
              </div>
            </div>
            <div className="pt-6">
              <div className="flex items-end justify-between">
                <h4 className="font-body font-semibold uppercase text-white">Python</h4>
                <h3 className="font-body text-3xl font-bold text-white">90%</h3>
              </div>
              <div className="mt-2 h-3 w-full rounded-full bg-lila bg-white">
                <div className="h-3 rounded-full bg-amber-500" style={{ "width": "90%" }}></div>
              </div>
            </div>
            <div className="pt-6">
              <div className="flex items-end justify-between">
                <h4 className="font-body font-semibold uppercase text-white">
                  C & C++ 
                </h4>
                <h3 className="font-body text-3xl font-bold text-white">80%</h3>
              </div>
              <div className="mt-2 h-3 w-full rounded-full bg-lila bg-white">
                <div className="h-3 rounded-full bg-amber-500" style={{"width": "80%"}}></div>
              </div>
            </div>
            <div className="pt-6">
              <div className="flex items-end justify-between">
                <h4 className="font-body font-semibold uppercase text-white">Java</h4>
                <h3 className="font-body text-3xl font-bold text-white">85%</h3>
              </div>
              <div className="mt-2 h-3 w-full rounded-full bg-lila bg-white">
                <div className="h-3 rounded-full bg-amber-500" style={{ "width": "85%" }}></div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center gap-4">
          <Link href="/resume.pdf" download={true}>
            <div className="group flex items-center justify-center my-8 border-2 border-amber-500 bg-black text-white hover:text-amber-500 px-6 py-3 font-bold uppercase rounded-md tracking-wider cursor-pointer">
              resume
              <span className="-rotate-90 duration-100 ease-in group-hover:rotate-180">
                <MdExpandMore size={25} />
              </span>
            </div>
          </Link>

          <Link href="/#portfolio">
            <div className="group flex items-center justify-center my-8 border-2 border-amber-500 bg-black text-white hover:text-amber-500 px-6 py-3 font-bold uppercase rounded-md tracking-wider cursor-pointer">
              portfolio
              <span className="-rotate-90 duration-100 ease-in group-hover:rotate-0">
                <MdExpandMore size={25} />
              </span>
            </div>
          </Link>
        </div>

      </div>
    </div>
  );
};

export default About;
