 



 
  
export default function Projects() {
  const projects = [
    {
      name: "YumYum",
      img: "others/2.png",
      technology: " MongoDB, Express.js, React.js, Node.js",
      description:
        "Yum Yum web app is a community-driven platform where food enthusiasts and home cooks can discover and share delicious recipes. With a user-friendly interface, and a collaborative community, our app makes it easy for users to find and share recipes they love. Our moderation system ensures that all recipes are high-quality and accurate, providing users with a trusted resource for all their culinary needs.",
      github: "https://github.com/SolomonAvraham/YumYum",
      projectLink: "https://yumyum-recipes.netlify.app/",
    },
    // {
    //   name: "Property Pro",
    //   img: "others/1.png",
    //   technology:
    //     " MongoDB, Express.js, React.js, Node.js, Typescript & Refine.",
    //   description:
    //     "The application provides information about rental and sale houses near your area, user can easily be real estate agents by registering for the application and posting their will. I used a new framework that goes by the name Refine. which comes with built-in templates.very helpful tool.",
    //   github: "https://github.com/SolomonAvraham/refine_dashboard",
    //   projectLink: "https://property-pro.netlify.app/",
    // },
  ];

  return (
 
      <section className=" min-h-screen md:h-[45rem] relative bg-me-one md:bg-cover bg-fixed sm:bg-center bg-no-repeat   sm:bg-[length:520px_500px] ">
        <h1 className=" font-three  text-7xl [text-shadow:_-9px_-0px_0px_rgb(0_0_0_/_30%)]    ">
          PROJECTS
        </h1>
        <hr className=" mx-auto w-72 border-spacing-y-60 border-slate-900 opacity-30 md:w-96 " />

        <div className="  flex  flex-col items-center justify-center gap-52 p-10    ">
  
        </div>
      </section>
 
  );
}
