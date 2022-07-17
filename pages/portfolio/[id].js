import React from "react";
// import tictactoe from "../public/assets/portfolio/tictactoe.jpg";
import installNode from "../../public/assets/portfolio/installNode.jpg";
import reactParallax from "../../public/assets/portfolio/reactParallax.jpg";
import usestate from "../../public/assets/portfolio/usestate.jpg";
import reactWeather from "../../public/assets/portfolio/reactWeather.jpg";
// import calculaator from "../../public/assets/portfolio/calculaator.jpg";

import { FaGithub } from "react-icons/fa";
import { AiOutlineCaretRight } from "react-icons/ai";
import { BiChevronLeft } from "react-icons/bi";
import Link from "next/link";
import Image from "next/image";

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

const getPortfolioFrom = (url) => portfolios.filter((p) => p.url === url)[0];

export async function getStaticPaths() {
  const paths = portfolios.map((p) => ({
    params: { id: p.url },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const portfolio = getPortfolioFrom(params.id);

  return {
    props: { portfolio },
  };
}

const OnePortfolio = ({ portfolio: { title, imageSrc } }) => {
  return (
    <div className="h-fit w-full text-center bg-zinc-800">
      <div className="max-w-screen-xl mx-auto w-full h-full pt-24 p-8 flex flex-col">
        <div className="flex">
          <Link href="/portfolio">
            <div className="flex items-center justify-center my-8 text-amber-500 font-bold capitalize cursor-pointer">
              <BiChevronLeft size={25} /> back
            </div>
          </Link>
        </div>

        <h1 className="capitalize text-4xl mt-2 mb-8 text-center md:text-left font-bold text-amber-500 tracking-wider">
          {title}
        </h1>

        <div className="relative w-96 h-56 mx-auto overflow-hidden my-8">
          <Image src={imageSrc} alt="bla" layout="fill" objectFit="cover" />
        </div>

        <h2 className="text-center md:text-left my-4 text-2xl font-bold text-white">
          Description
        </h2>

        <p className="text-white">
          Human thy god sainted is the distinctly shrieked grave bird shrieked,
          yore borrow nevermore but gaunt maiden have nothing darkness, answer
          evermore word there from raven, sorrowsorrow from on and nevermore of
          core. Whom the meant and while i of respiterespite his lamplight. Or
          being weary parting grave lent if. Rare came stillness whether the
          lord. Bust myself whom of soul silken. The that there this my, quaint
          that only lenore stern muttered and nothing or tapping. Here lie
          lining i still. A tis some and chamber flitting. Lamplight radiant
          from no yet what, upon that that one decorum leave.
        </p>

        <div className="flex items-center justify-center gap-10">
          <Link href="/">
            <div className="group flex items-center justify-center my-8 text-white px-6 py-3 font-bold uppercase rounded-md tracking-wider cursor-pointer border-2 border-white bg-amber-500 hover:text-black">
              demo
              <span className="duration-200 ease-in">
                <AiOutlineCaretRight size={18} className="ml-2" />
              </span>
            </div>
          </Link>

          <Link href="https://github.com/theyashmukuldharashivkar">
            <div className="group flex items-center justify-center my-8 text-white px-6 py-3 font-bold uppercase rounded-md tracking-wider cursor-pointer border-2 border-white bg-amber-500 hover:text-black">
              Github
              <span className="duration-200 ease-in">
                <FaGithub size={18} className="ml-2" />
              </span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OnePortfolio;