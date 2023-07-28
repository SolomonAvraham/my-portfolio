"use client";
import { useState, useEffect } from "react";
import { TypeAnimation } from "react-type-animation";
import {
  AiOutlineMail,
  AiFillLinkedin,
  AiFillGithub,
  AiOutlineWhatsApp,
} from "react-icons/ai";
import Image from "next/image";

const stackArray = [
  { name: "HTML", img: "/icons/html-5.png" },
  { name: "CSS", img: "/icons/css-3.png" },
  { name: "JavaScript", img: "/icons/js.png" },
  { name: "REACT", img: "/icons/science.png" },
  { name: "Nextjs", img: "/icons/nextjs.png" },
  { name: "TypeScript", img: "/icons/typescript.png" },
  { name: "Redux", img: "/icons/redux.svg" },
  { name: "Zustand", img: "/icons/zustand-.png" },
  { name: "MongoDB", img: "/icons/MongoDB.svg" },
  { name: "Node.js", img: "/icons/node-js.png" },
  { name: "Tailwind", img: "/icons/tailwind.png" },
  { name: "Express.js", img: "/icons/express-js-.png" },
  { name: "Git", img: "/icons/Git.svg" },
  { name: "GitHub", img: "/icons/github.png" },
];

type NumOfChildren = {
  numOfChildren: number;
};

const CircleIcons = ({ numOfChildren }: NumOfChildren) => {
  const [radius, setRadius] = useState(120);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setRadius(width >= 450 ? 150 : 120);
    };

    if (typeof window !== "undefined") {
      window.addEventListener("resize", handleResize);

      handleResize();

      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  const childElements = [];

  for (let i = 0; i < numOfChildren; i++) {
    const angle = (i * 360) / numOfChildren;
    const x = radius * Math.cos((angle * Math.PI) / 180);
    const y = radius * Math.sin((angle * Math.PI) / 180);

    childElements.push(
      <div
        key={i}
        className="  absolute    w-6 md:w-7     p-1 "
        style={{
          top: `calc(50% - ${y}px)`,
          left: `calc(50% + ${x}px)`,
        }}
      >
        <Image
          src={stackArray[i].img}
          alt={stackArray[i].name}
          key={stackArray[i].img}
          width={500}
          height={500}
        />
      </div>
    );
  }

  return (
    <div className="  animate-pulse z-40   absolute md:top-[26.5%] top-[17.7%] md:left-[31.6%]   left-[45.5%]   ">
      {childElements}
    </div>
  );
};

export default function Intro() {
  const socialMedia = [
    {
      url: "https://github.com/SolomonAvraham",
      icon: <AiFillGithub className="  hover:text-black " />,
    },
    {
      url: "mailto:solomon.avraham31@gmail.com",
      icon: <AiOutlineMail className=" hover:text-blue-900 " />,
    },
    {
      url: "https://www.linkedin.com/in/solomon-avraham-82b8a2234/",
      icon: <AiFillLinkedin className=" hover:text-blue-900 " />,
    },
    {
      url: "https://wa.me/972549727138",
      icon: <AiOutlineWhatsApp className=" hover:text-green-500 " />,
    },
  ];

  return (
    <section className="min-h-screen md:h-[45rem] relative bg-me-one md:bg-cover bg-fixed sm:bg-center bg-no-repeat   sm:bg-[length:520px_800px]  ">
      <div className=" py-11 flex flex-col   md:py-1/2 md:px-48    md:grid  grid-cols-2   place-items-center  justify-items-center">
        <div className=" static">
          <CircleIcons numOfChildren={stackArray.length} />
          <div className="bgCircle  shadow-2xl   col-span-1   relative   overflow-hidden  z-0 h-52 w-52 rounded-full border-4 border-solid border-gray-400     md:h-60 md:w-60  ">
            <Image
              className="   -mt-10 h-fit w-72 opacity-[92%] drop-shadow-2xl   "
              src="/me/me-2.png"
              alt="me-2"
              width={200}
              height={200}
            />
            <Image
              className="  absolute md:-top-14 left-14 md:w-52  opacity-10 w-44 -top-10   -z-20 "
              src="/me/me-1.png"
              alt="me-1"
              width={500}
              height={500}
            />
            <Image
              className="   absolute md:-top-14 right-14 w-44 -top-10 md:w-80  opacity-10    -z-10  "
              src="/me/me-2.png"
              alt="me-1"
              width={500}
              height={550}
            />
          </div>
        </div>

        <div className=" md:h-full md:px-10 row-span-1   text-center">
          <h1 className="font-three py-2 tracking-wider mt-5  text-3xl  [text-shadow:_-4px_-0px_0px_rgb(0_0_0_/_30%)]   md:text-5xl">
            Solomon Avraham
          </h1>
          <hr className=" mx-auto w-1/2  py-1 border-slate-900 opacity-5 md:w-96 " />
          <h3 className="tracking-wider  md:py-1   font-one text-2xl  md:text-4xl">
            Full Stack Developer
          </h3>
          <hr className=" mx-auto w-1/2  py-1 border-slate-900 opacity-5 md:w-52 " />

          <div className="   h-[19rem] md:h-40 font-three p-3 md:p-0 md:text-lg tracking-widest  text-gray-700  ">
            <TypeAnimation
              sequence={[
                "Hello World : ] ",
                200,
                `Welcome to my portfolio! My name is Solomon Avraham, a freelance and junior Full Stack Developer with expertise in the MERN stack, particularly Next.js and React. I specialize in crafting captivating web applications with a focus on seamless user experiences. Check out my projects, and let's collaborate to build something extraordinary together! Thank you for visiting.`,
                1500,
              ]}
              wrapper="span"
              speed={60}
              style={{ display: "inline-block" }}
              repeat={0}
            />
          </div>
        </div>

        <div className=" w-fit px-5 col-span-1    md:mt-5   flex     justify-center gap-8 md:gap-10 rounded-3xl  bg-gray-600 bg-opacity-75 py-3 text-3xl text-slate-100 drop-shadow-2xl hover:drop-shadow-2xl ">
          {socialMedia.map((item, index) => (
            <a
              className=" hover:scale-150  "
              href={item.url}
              key={index}
              target="_blank"
              rel="noreferrer"
            >
              {item.icon}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
