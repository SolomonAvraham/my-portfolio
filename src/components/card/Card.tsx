import { AiOutlineLink, AiFillGithub } from "react-icons/ai";

type Card = {
  name: string;
  img: string;
  github: string;
  projectLink: string;
  description: string;
  technology: string[];
};

const Card = ({
  name,
  img,
  github,
  projectLink,
  description,
  technology,
}: Card) => {
  const links = [
    {
      url: `${projectLink}`,
      icon: <AiOutlineLink className="text-blue-700 hover:text-blue-900 " />,
    },
    {
      url: `${github}`,
      icon: <AiFillGithub className="  hover:text-black " />,
    },
  ];

  return (
    <div className=" flex justify-center items-center mt-5   h-fit  ">
      <div className=" w-[80%] grid-rows-3 grid-flow-col sm:hidden md:grid place-items-center gap-2 justify-items-end ">
        <div className=" row-span-2   cursor-default     text-center  h-fit  rounded-xl bg-white shadow-2xl ">
          <div className=" p-1  overflow-hidden ">
            <h2 className=" font-three text-lg font-bold">{name}</h2>
            <p className="font-two p-2  text-gray-700">{description} </p>
            <h3 className=" mt-1 font-three text-lg font-bold">Technology</h3>
            <div className=" flex items-center  justify-center gap-5 p-3">
              {technology?.map((tech) => (
                <img className="w-8 " key={tech} src={tech} />
              ))}
            </div>
          </div>
        </div>

        <div className="row-span-1 w-1/2  mx-auto  rounded-2xl bg-white shadow-2xl">
          <div className="flex items-center justify-center gap-5 p-1 text-4xl">
            {links?.map((item, index) => (
              <a
                className=" hover:scale-125  "
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

        <div className="row-span-3 w-[32rem]   hover:scale-125  cursor-pointer rounded-3xl    shadow-2xl ">
          <a href={projectLink} target="_blank">
            <img className=" rounded-3xl  " src={img} alt={name} />
          </a>
        </div>
      </div>

      <div className=" text-center gap-3  flex flex-col items-center justify-center h-fit py-16  md:hidden">
        <div className="   mt-2   rounded-xl border-2 border-black  border-opacity-30 shadow-2xl ">
          <img className=" rounded-xl " src={img} alt={name} />
        </div>

        <div className=" h-fit rounded-lg bg-white shadow-2xl  ">
          <div className="  p-2">
            <h2 className="  font-three text-xl font-bold">{name}</h2>
            <p className="font-two  text-gray-700">{description}</p>
            <h3 className=" mt-2 font-three text-lg font-bold">Technology</h3>
            <div className=" flex items-center  justify-center gap-5 p-3">
              {technology?.map((tech) => (
                <img className="w-8 " key={tech} src={tech} />
              ))}
            </div>
          </div>
        </div>

        <div className="mx-auto   w-60  rounded-2xl bg-white p-3 shadow-2xl">
          <div className="flex items-center justify-center gap-5 p-1 text-4xl">
            {links?.map((item, index) => (
              <a
                className=" hover:scale-125  "
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
      </div>
    </div>
  );
};

export default Card;
