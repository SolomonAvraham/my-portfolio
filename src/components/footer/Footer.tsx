import {
  AiOutlineMail,
  AiFillLinkedin,
  AiFillGithub,
  AiOutlineWhatsApp,
} from "react-icons/ai";

export default function Footer() {
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
    <footer className="  bg-slate-300 bg-opacity-5  py-2     px-2 dark:bg-opacity-50">
      <div className="flex  flex-col    items-center justify-around  ">
          <p className=" font-one underline underline-offset-4">Contact Me</p>
        <div className="flex ">
          {socialMedia.map((item, index) => (
            <a
              className=" m-2 text-3xl  text-black hover:scale-125  "
              href={item.url}
              key={index}
              target="_blank"
              rel="noreferrer"
            >
              {item.icon}
            </a>
          ))}
        </div>
        <h1 className="font-one text-sm md:text-lg  text-black ">
          ©2023 Solomon.Portfolio
        </h1>
      </div>
    </footer>
  );
}
