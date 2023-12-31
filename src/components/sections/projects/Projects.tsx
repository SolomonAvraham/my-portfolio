"use client";
import Card from "@/components/card/Card";
import {
  ParallaxProvider,
  ParallaxBanner,
  Parallax,
} from "react-scroll-parallax";

export default function Projects() {
  const stackArray = {
    ts: "/icons/typescript.png",
    react: "/icons/science.png",
   reactQuery: "/icons/react-query.png"  ,
    nextjs: "/icons/nextjs.png",
    tailwind: "/icons/tailwind.png",
    redux: "/icons/redux.svg",
    zustand: "/icons/zustand-.png",
    nodejs: "/icons/node-js.png",
    express: "/icons/express-js-.png",
    mongoDB: "/icons/MongoDB.svg",
  };

  const projects = [
    {
      name: "Eazy-Buy",
      img: "/others/eazybuy.png",
      technology: [
        stackArray.ts,
        stackArray.react,
        stackArray.reactQuery,
        stackArray.nodejs,
        stackArray.express,
        stackArray.mongoDB,
      ],
      description: `
Eazy-Buy is a collaborative Electric Ecommerce Website project developed using MERN stack, TypeScript, and React Query. It offers a seamless shopping experience for electric products with a wide product catalog, quick search, user authentication, shopping cart, order management, payment integration, and user reviews.`,
      github: "https://github.com/SolomonAvraham/Eazy-Buy",
      projectLink: "https://eazy-buy-now.netlify.app/",
    },
    {
      name: "YumYum",
      img: "/others/yumyum.png",
      technology: [
        stackArray.react,
        stackArray.nodejs,
        stackArray.express,
        stackArray.mongoDB,
      ],
      description: `Yum Yum is a community-driven recipe platform for food enthusiasts and home cooks. Discover and share delicious recipes with a friendly, collaborative community. Trust our high-quality and accurate recipes for all your culinary needs.`,
      github: "https://github.com/SolomonAvraham/YumYum",
      projectLink: "https://yumyum-recipes.netlify.app/",
    },
    {
      name: "Property Pro",
      img: "/others/dashboard.png",
      technology: [
        stackArray.ts,
        stackArray.react,
        stackArray.nodejs,
        stackArray.express,
        stackArray.mongoDB,
      ],
      description: `The app provides real estate information for rental and sale houses in your area. Users can become real estate agents by registering and posting listings. The app is built using the Refine framework, which offers helpful built-in templates.`,
      github: "https://github.com/SolomonAvraham/refine_dashboard",
      projectLink: "https://property-pro.netlify.app/",
    },
  ];

  return (
    <ParallaxProvider>
      <section className="   md:py-24  h-fit md:h-fit relative  bg-gray-100 ">
        <div className="z-0 relative h-full  flex flex-col overflow-hidden items-center justify-center">
          <ParallaxBanner className=" text-center   ">
            <h1 className=" py-11 mt-5 font-three md:py-5 tracking-widest md:mt-16  text-6xl   [text-shadow:_-4px_-0px_0px_rgb(0_0_0_/_30%)]   md:text-9xl">
              PROJECTS
            </h1>
          </ParallaxBanner>

          <Parallax
            translateY={["-120px", "122px"]}
            scale={[1, 1]}
            easing="easeOutQuart"
            speed={10}
            className="sm:hidden md:block absolute top-0 -z-20 md:-z-10 opacity-5 md:opacity-20"
          >
            <div className=" grid grid-cols-2 w-screen  ">
              {projects.map((item) => (
                <Card
                  key={item.name}
                  name={item.name}
                  technology={item.technology}
                  img={item.img}
                  description={item.description}
                  github={item.github}
                  projectLink={item.projectLink}
                />
              ))}
            </div>
          </Parallax>

          <div className=" flex flex-col  p-3 md:p-0 md:gap-24 md:mt-10 ">
            {projects.map((item) => (
              <Card
                key={item.name}
                name={item.name}
                technology={item.technology}
                img={item.img}
                description={item.description}
                github={item.github}
                projectLink={item.projectLink}
              />
            ))}
          </div>

          <Parallax
            translateY={["-33px", "1230px"]}
            scale={[1, 1]}
            easing="easeInQuart"
            speed={-10}
            className="sm:hidden md:block   absolute -bottom-0 -z-10 md:-z-30 opacity-20 md:opacity-20"
          >
            <div className=" grid grid-cols-1 w-screen  ">
              {projects.map((item) => (
                <Card
                  key={item.name}
                  name={item.name}
                  technology={item.technology}
                  img={item.img}
                  description={item.description}
                  github={item.github}
                  projectLink={item.projectLink}
                />
              ))}
            </div>
          </Parallax>
        </div>
      </section>
    </ParallaxProvider>
  );
}
