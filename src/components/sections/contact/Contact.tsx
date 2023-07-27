'use client'
import React, { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";


export default function Contact() {
  const [msg, setMsg] = useState(false);
  const [btnDisabled, setBtnDisabled] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm("1111", "2222", form.current, "luLzakk9OdMNDVD6U");
    form.current.reset();
    setMsg(true);
    setBtnDisabled(true);
  };

  useEffect(() => {
    setTimeout(() => {
      setMsg(false);
    }, 1000);
  }, [msg]);

  return (
    <>
      <section className="     bg-me-one-left bg-cover bg-fixed  ">
        <div
          id="contactMe"
          className="bg-gray-300   bg-opacity-50 py-5  dark:bg-black dark:bg-opacity-40 dark:bg-gradient-to-b "
        >
          <h3 className="py-1 text-center font-three text-7xl  [text-shadow:_9px_-0px_0px_rgb(0_0_0_/_30%)] dark:text-yellow-100 ">
            CONTACT ME
          </h3>
          <hr className=" mx-auto w-72 border-spacing-y-60 border-slate-900 opacity-30 md:w-96 " />

          <div className=" relative   flex items-center   py-10  ">
            {msg && (
              <div className="absolute left-0  right-0 z-10 m-auto flex h-28 w-52 flex-col justify-center rounded-xl bg-zinc-300 bg-opacity-95 text-center dark:bg-slate-500">
                <span className=" text-6xl">🙏🏾</span>
                <h1>Thanks!</h1>
              </div>
            )}
            <form
              className=" mx-auto flex flex-col  gap-10 md:w-96"
              ref={form}
              onSubmit={sendEmail}
            >
              <input
                placeholder="Full Name"
                type="text"
                name="user_name"
                required
                className="rounded-lg border-2 border-solid border-black p-1 opacity-90 focus:border-lime-700 focus:outline-none"
              />
              <input
                className="  rounded-lg border-2 border-solid border-black p-1 opacity-90 focus:border-lime-700 focus:outline-none"
                placeholder="Email"
                type="email"
                name="user_email"
                required
              />
              <textarea
                placeholder="Your Message..."
                name="message"
                required
                cols="30"
                rows="6"
                className="rounded-lg  border-2 border-solid border-black p-1 opacity-90 focus:border-lime-700 focus:outline-none"
              />
              <button
                className=" rounded-xl border-2 border-solid border-slate-500 bg-slate-300 py-2  font-two  text-lg font-semibold hover:bg-black hover:text-white disabled:bg-transparent dark:hover:bg-yellow-200 dark:hover:text-black"
                type="submit"
                disabled={btnDisabled && "true"}
              >
                LET'S TALK
              </button>
            </form>
            <img
              className=" mr-10 max-w-2xl opacity-80  sm:hidden md:block  "
              src="others/fsd.gif"
              alt="me-1"
            />
          </div>
        </div>

      </section>
    </>
  );
}
