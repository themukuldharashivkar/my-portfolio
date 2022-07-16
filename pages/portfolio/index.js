import React from "react";
// import tictactoe from "../public/assets/portfolio/tictactoe.jpg";
import installNode from "../../public/assets/portfolio/installNode.jpg";
import reactParallax from "../../public/assets/portfolio/reactParallax.jpg";
import usestate from "../../public/assets/portfolio/usestate.jpg";
import reactWeather from "../../public/assets/portfolio/reactWeather.jpg";
// import calculaator from "../../public/assets/portfolio/calculaator.jpg";

import { MdExpandMore } from "react-icons/md";
import Link from "next/link";
import Image from "next/image";

export const getStaticProps = async () => {
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

  return {
    props: { portfolios },
  };
};

const PortfoliosRoute = ({ portfolios }) => {
  return (
    <div id="portfolio" className="w-full bg-zinc-800">
      <div className="max-w-screen-xl mx-auto pt-24 p-4 text-center md:text-left">
        <h2 className="text-5xl md:text-4xl tracking-wider uppercase text-amber-500 font-bold pb-16">
          portfolio
        </h2>

        <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-8">
          {portfolios.map(({ id, title, imageSrc, url }) => (
            <Link key={id} href={`/portfolio/${url}`}>
              <div className="cursor-pointer group shadow-md text-white shadow-gray-600 overflow-hidden rounded-md bg-zinc-900 hover:bg-amber-500 hover:text-black">
                <Image
                  src={imageSrc}
                  alt={title}
                  className="rounded-md duration-200 
              hover:scale-110"
                />
                <h2 className="text-center text-base capitalize my-4 font-light duration-200 group-hover:underline underline-offset-4">
                  {title}
                </h2>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PortfoliosRoute;
