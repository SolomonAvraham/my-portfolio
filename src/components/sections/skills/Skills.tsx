"use client";

import Image from "next/image";
import {
  ParallaxProvider,
  ParallaxBanner,
  Parallax,
} from "react-scroll-parallax";

const Skills = () => {
  const stackArray = [
    { name: "HTML", img: "/icons/html-5.png" },
    { name: "CSS", img: "/icons/css-3.png" },
    { name: "JavaScript", img: "/icons/js.png" },
    { name: "TypeScript", img: "/icons/typescript.png" },
    { name: "REACT", img: "/icons/science.png" },
    { name: "Nextjs", img: "/icons/nextjs.png" },
    { name: "Tailwind", img: "/icons/tailwind.png" },
    { name: "Redux", img: "/icons/redux.svg" },
    { name: "Node.js", img: "/icons/node-js.png" },
    { name: "Express.js", img: "/icons/Express-js.png" },
    { name: "MongoDB", img: "/icons/MongoDB.png" },
    { name: "Git", img: "/icons/Git.svg" },
    { name: "GitHub", img: "/icons/github.png" },
  ];
  return (
    <ParallaxProvider>
      <div className=" h-[50rem]   md:h-[40rem]  relative  bg-me-two md:bg-cover bg-fixed sm:bg-center bg-no-repeat    sm:bg-[length:520px_500px] ">
        <div className="z-0 relative h-full  flex flex-col overflow-hidden items-center justify-center">
          <ParallaxBanner className=" text-center   ">
            <h1 className="  font-three md:py-2 tracking-widest md:mt-5  text-2xl   [text-shadow:_-4px_-0px_0px_rgb(0_0_0_/_30%)]   md:text-9xl">
              SKILLS
            </h1>
          </ParallaxBanner>

          <Parallax
            translateX={["-110px", "12px"]}
            scale={[3, 1]}
            //   rotate={[1, 1110]}
            easing="easeOutQuart"
            speed={-10}
            className=" absolute top-0 -z-20 md:-z-10 opacity-10 md:opacity-20"
          >
            <div className=" flex flex-col md:flex-row items-start justify-start gap-10">
              {stackArray.map((item, index) => (
                <div className="        " key={index}>
                  <Image
                    className="w-44  md:w-96  drop-shadow-xl hover:drop-shadow-2xl  "
                    src={item.img}
                    alt={item.name}
                    key={item.img}
                    width={200}
                    height={200}
                  />
                </div>
              ))}
            </div>
          </Parallax>

          <Parallax
            translateX={["-110px", "12px"]}
            scale={[4, 0]}
            easing="easeOutQuart"
            speed={-10}
          >
            <div className="  flex flex-col  md:flex-row items-start justify-start gap-10">
              {stackArray.map((item, index) => (
                <div className="        " key={index}>
                  <Image
                    className="w-44 md:w-52  drop-shadow-xl hover:drop-shadow-2xl  "
                    src={item.img}
                    alt={item.name}
                    key={item.img}
                    width={200}
                    height={200}
                  />
                </div>
              ))}
            </div>
          </Parallax>

          <Parallax
            translateX={["-110px", "12px"]}
            scale={[3, 1]}
            //   rotate={[1, 1110]}
            easing="easeOutQuart"
            speed={-10}
            className=" absolute  bottom-24 -z-10 md:-z-10 opacity-25 md:opacity-20"
          >
            <div className="flex flex-col  md:flex-row items-start justify-start gap-10">
              {stackArray.map((item, index) => (
                <div className=" " key={index}>
                  <Image
                    className=" w-28 md:w-96  drop-shadow-xl hover:drop-shadow-2xl  "
                    src={item.img}
                    alt={item.name}
                    key={item.img}
                    width={200}
                    height={200}
                  />
                </div>
              ))}
            </div>
          </Parallax>
        </div>
      </div>
    </ParallaxProvider>
  );
};

export default Skills;
