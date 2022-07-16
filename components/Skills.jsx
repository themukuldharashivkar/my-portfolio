import React from "react";

import html from "../public/assets/experience/html.png";
import java from "../public/assets/experience/java.png";
import javascript from "../public/assets/experience/javascript.png";
import reactImage from "../public/assets/experience/react.png";
import nextjs from "../public/assets/experience/nextjs.png";
import tailwind from "../public/assets/experience/html.png";
import python from "../public/assets/experience/python.png";
import sql from "../public/assets/experience/sql.png";
import c from "../public/assets/experience/c.png";
import cpp from "../public/assets/experience/cpp.png";
import Image from "next/image";

const Skills = () => {
  const skills = [
    {
      id: 1,
      title: "Python",
      src: python,
    },
    {
      id: 2,
      title: "HTML and CSS",
      src: html,
    },
    {
      id: 3,
      title: "Java",
      src: java,
    },
    {
      id: 4,
      title: "JavaScript",
      src: javascript,
    },
    {
      id: 5,
      title: "C (Programming Language)",
      src: c,
    },
    {
      id: 6,
      title: "C++ (Programming Language)",
      src: cpp,
    },
    {
      id: 7,
      title: "Next JS",
      src: nextjs,
    },
    {
      id: 8,
      title: "MySQl",
      src: sql,
    },
  ];

  return (
    <div id="skills" className="w-full bg-zinc-800">
      <div className="max-w-screen-xl mx-auto px-8 py-16 text-center md:text-left ">
        <h2 className="text-5xl md:text-4xl tracking-wider uppercase text-amber-500 font-bold">
          My Skills!
        </h2>
        <p className="py-4 max-w-lg text-white">
          While only that hauntedtell many purple no lent cushions more heart.
          Soul cushions the still if i, hath lamplight mortals the rapping have
          me and.
        </p>

        <div className="grid lg:grid-cols-4 gap-8 ">
          {skills.map(({ id, title, src }) => (
            <div
              key={id}
              className="flex flex-col lg:flex-row gap-10 lg:gap-0 items-center justify-between p-6 shadow-lg rounded-xl hover:scale-105 ease-in duration-300
              odd:shadow-amber-500 even:shadow-amber-100 bg-zinc-900 hover:bg-amber-500 "
            >
              <Image src={src} width="64px" height="64px" alt={title} />
              <h3 className="font-light text-white ">{title}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
