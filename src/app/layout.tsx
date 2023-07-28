import Header from "@/components/header/Header";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "@/components/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Solomon Portfolio",
  description:
    "Welcome to my portfolio! My name is Solomon Avraham, a freelance and junior Full Stack Developer with expertise in the MERN stack, particularly Next.js and React. I specialize in crafting captivating web applications with a focus on seamless user experiences. Check out my projects, and let's collaborate to build something extraordinary together! Thank you for visiting",
  keywords: `Junior Frontend Developer
Junior Full Stack Developer
Entry-Level Web Developer
Aspiring Web Developer
Junior Web Designer
Frontend Development Intern
Full Stack Development Intern
Web Development Trainee
Web Development Portfolio
Junior Software Engineer
Junior React Developer
Junior Next.js Developer

Freelancer
Freelance Developer
Freelance Web Developer
Remote Freelancer
Freelance Frontend Developer
Freelance Full Stack Developer
Independent Contractor
Remote Work
Freelance Projects
Freelance Portfolio
Web Development Services
Web Design Services

מפתח אתרים
מפתח
ג׳וניור 
מפתח ג׳וניור
פול סטאק
חיפוש משרה
מעצב אתרים
בונה אתרים
קידום אתרים
פרוייקטים
סולומון אברהם
עצמאי

`,
}; 

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="logo/logo.png" type="image/png" sizes="50*50" />
      </head>
      <body
        suppressHydrationWarning={true}
        className={`${inter.className} bg-slate-700 bg-opacity-10 p-1`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
