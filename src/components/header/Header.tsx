 


export default function Header() {
  return (
    <nav className=" z-50 rounded-b-3xl  sticky bg-slate-700 bg-opacity-10   top-0   flex items-center justify-between py-4 px-10">
      <div className="one">
        {/* <h1 className=" animate-bounce font-two text-xl   hover:text-yellow-600 ">
          <a href="#contactMe">Let's Talk</a>Let's Talk
        </h1> */}
      </div>

      <div className="two">
        <a
          className=" ml-8 rounded-md  bg-gradient-to-t  from-slate-500  to-slate-400 px-4 py-2 font-three tracking-widest  text-white hover:text-yellow-300  "
          href="https://docs.google.com/document/d/18IfiDmwwaezSycOf2fjbge82iVKx0fH4X3Ox8nUTtFQ/edit?usp=sharing"
          target="_blank"
          rel="noreferrer"
          download
        >
          Resume
        </a>
      </div>
    </nav>
  );
}
