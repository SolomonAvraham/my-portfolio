export default function Header() {
  return (
    <nav className=" shadow-sm z-50 rounded-b-3xl  sticky bg-slate-700 bg-opacity-5   top-0   flex items-center justify-between py-4 px-10">
      <div className="one  hover:scale-x-105 ">
        <h1 className=" animate-bounce font-three text-xl   hover:text-sky-800">
          <a title="Contact Me" href="#contactMe">
            Contact Me
          </a>
        </h1>
        <hr className=" w-2/2 h-[3px] shadow-2xl  shadow-white bg-gray-800  bg-opacity-5" />
      </div>

      <div className="two hover:scale-x-105 shadow-2xl">
        <a
          className="  ml-8 rounded-lg  bg-gradient-to-t  from-slate-500  to-slate-400 px-4 py-2 font-three tracking-widest  text-white hover:text-sky-800 "
          href="https://docs.google.com/document/d/18IfiDmwwaezSycOf2fjbge82iVKx0fH4X3Ox8nUTtFQ/edit?usp=sharing"
          target="_blank"
          rel="noreferrer"
          download
          title="My Resume"
        >
          Resume
        </a>
      </div>
    </nav>
  );
}
