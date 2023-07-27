import Image from "next/image";

export default function Loading() {
  return (
    <div className=" ">
      <div className="  bg-gray-200 bg-me-one  bg-cover bg-fixed    flex items-center justify-center h-screen">
        <Image
          className="  relative  animate-spin opacity-50  rounded-full border-solid border-zinc-400 border-2 "
          src="/logo/logo.png"
          alt="logo"
          width={300}
          height={300}
        />{" "}
        <Image
          className=" absolute top-1/5  border-solid border-zinc-800 border-2 rounded-full"
          src="/logo/logo.png"
          alt="logo"
          width={200}
          height={200}
        />
      </div>
    </div>
  );
}
