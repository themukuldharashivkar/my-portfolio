import React from "react";

import { MdExpandMore } from "react-icons/md";

import installNode from "../public/assets/portfolio/installNode.jpg";
import reactParallax from "../public/assets/portfolio/reactParallax.jpg";
import usestate from "../public/assets/portfolio/usestate.jpg";
import reactWeather from "../public/assets/portfolio/reactWeather.jpg";
// import calculaator from "../../public/assets/portfolio/calculaator.jpg";
// import tictactoe from "../public/assets/portfolio/tictactoe.jpg";
import Link from "next/link";
import Image from "next/image";

const Portfolio = () => {
  const portfolios = [
    // {
    //   id: 1,
    //   title: "calculator app",
    //   imageSrc: calculaator,
    //   url: "https://62d2a3e17de22d78bc84d50d--serene-blancmange-3c7c15.netlify.app/",
    // },
    // {
    //   id: 2,
    //   title: "Tic Tac Toe Game",
    //   imageSrc: tictactoe,
    //   url: "https://tic-tac-toe-game-md.netlify.app/",
    // },
    // {
    //   id: 3,
    //   title: "use state explained",
    //   imageSrc: usestate,
    //   url: "use-state-hook",
    // },
    {
      id: 4,
      title: "Project 1",
      imageSrc: reactParallax,
      url: "react-parallax",
    },
  ];

  return (
    <div id="portfolio" className="w-full bg-zinc-800">
      <div className="max-w-screen-xl mx-auto px-8 py-16 text-center md:text-left">
        <h2 className="text-5xl md:text-4xl tracking-wider uppercase text-amber-500 font-bold">
          my recent projects
        </h2>
        <p className="py-4 max-w-lg text-white">
          These are some of my projects
        </p>

        <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-8">
          {portfolios.map(({ id, title, imageSrc, url }) => (
            <Link key={id} href={`/portfolio/${url}`}>
              <div className="cursor-pointer  group shadow-md bg-zinc-900 shadow-amber-500 overflow-hidden rounded-md hover:bg-amber-500 ">
                <Image
                  src={imageSrc}
                  alt={title}
                  className="rounded-md duration-200 
                  hover:scale-110"
                />
                <h2 className="text-center text-base capitalize my-4 font-light duration-200 group-hover:underline underline-offset-4 text-white ">
                  {title}
                </h2>
              </div>
            </Link>
          ))}
        </div>

        <div className="flex items-center justify-center">
          <Link href="/portfolio">
            <div className="group flex items-center justify-center my-8 border-2 border-amber-500 bg-black text-white px-6 py-3 font-bold uppercase rounded-md tracking-wider cursor-pointer hover:text-amber-500">
              all projects
              <span className="-rotate-90 duration-100 ease-in group-hover:translate-x-5">
                <MdExpandMore size={25} />
              </span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
