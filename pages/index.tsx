import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import "@fontsource/montserrat/400.css";
import "@fontsource/montserrat/500.css";
import "@fontsource/montserrat/600.css";
import "@fontsource/montserrat/700.css";
import "@fontsource/mulish/400.css";
import "@fontsource/mulish/500.css";
import "@fontsource/mulish/600.css";
import "@fontsource/mulish/700.css";

import { ProjectSection } from "../components/ProjectSection";
import { projectList } from "../models/ProjectList";
import { HeaderCreative } from "../components/HeaderCreative";
import { navlinks } from "../models/NavLinks";
import { Sidebar } from "../components/Sidebar";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Heer</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/fav_heer.png" />
      </Head>
      <header className="px-2 lg:px-20 py-2 flex items-center justify-between bg-white fixed top-0 left-0 right-0 z-50">
        <Image src="/logo.jpeg" alt="Logo" width={160} height={90} />
        <div className="hidden lg:flex items-center gap-8 text-sm">
          {navlinks.map((link) => {
            return (
              <Link href={link.link} key={link.id}>
                <div className="flex items-center gap-1 uppercase font-montserrat font-medium">
                  <span className="text-perfume-700">{link.id}.</span>
                  <span>{link.name}</span>
                </div>
              </Link>
            );
          })}
          <Link
            href="/resume_simranjeekaur.pdf"
            download="simranjeetkaur"
            target="_blank"
          >
            <button className="block text-perfume-700 border border-perfume-700 bg-perfume-100 px-3 py-2 rounded-md text-sm font-medium font-montserrat tracking-wider uppercase">
              Resume
            </button>
          </Link>
        </div>
        <Sidebar />
      </header>
      <div className="min-h-screen flex items-center relative" id="home">
        <main className="px-2 lg:px-60">
          <div className="flex flex-col-reverse gap-6 lg:gap-2 lg:flex-row">
            <div className="flex flex-col lg:flex-[3] justify-center xl:items-start md:items-start gap-3 lg:gap-6">
              <div className="flex flex-col gap-2 lg:gap-3">
                <h1 className="text-lg text-perfume-500 font-medium tracking-wider">
                  Hi, my name is
                </h1>
                <div className="space-y-1">
                  <h1 className="text-4xl lg:text-6xl tracking-tight font-montserrat font-bold  text-slate-900">
                    Simranjeet Kaur.
                  </h1>
                  <h2 className="text-4xl tracking-tight lg:text-6xl font-montserrat font-bold text-slate-400">
                    I build things for the web.
                  </h2>
                </div>
              </div>
              <div className="space-y-6">
                <p className="text-md lg:text-md tracking-tight text-slate-500">
                  I am a developer who specializes in creating memorable,
                  user-friendly digital experiences and human-centered products.
                </p>
                <Link href="/#projects">
                  <button className="block text-perfume-700 border border-perfume-700 bg-perfume-100 p-3 rounded-md text-sm font-medium font-montserrat tracking-wider uppercase">
                    Explore projects!
                  </button>
                </Link>
              </div>
            </div>
            <div className="bg-perfume-100 lg:bg-transparent p-3 lg:p-0 flex items-center justify-center rounded-md lg:flex-[2]">
              <HeaderCreative />
            </div>
          </div>
        </main>
      </div>
      <div
        className="min-h-screen px-2 lg:px-72 space-y-6 py-10 bg-perfume-100"
        id="about"
      >
        <h1 className="text-2xl uppercase font-bold font-montserrat tracking-wider text-perfume-900">
          About Me
        </h1>
        <div className="flex flex-col-reverse lg:flex-row gap-4">
          <div className="flex flex-col gap-3 flex-1">
            <p className="text-slate-600">
              Hello! My name is Simranjeet and I am focused on creating
              interactive digital experiences on the web. I work at the
              intersection of curiosity, reasoning and imagination, which guide
              me to uncover insights, solve problems and craft meaningful,
              future-oriented solutions. I am passionate about providing
              solutions to users by building accessible products.
            </p>
            <p className="text-slate-600">
              I’ve had the privilege of working for both
              <span className="text-perfume-700 font-medium cursor-pointer">
                {" "}
                a start-up and a huge corporation.{" "}
              </span>
              My main focus these days is building accessible, inclusive
              products and digital experiences. Also, I am completing my Google
              certification for UI/UX to get better at user experience and gain
              more knowldege to deliver it in my websites.
            </p>
            <p className="text-slate-600">
              I am also enrolled in Professional, Applied and Continuing
              Education
              <span className="text-perfume-700 font-medium cursor-pointer">
                {" "}
                Web Development
              </span>{" "}
              program offered by the University of Winnipeg.
            </p>
            <p className="text-slate-600">
              Here are a few technologies I’ve been working with:
            </p>
            <div className="grid grid-cols-2">
              <ul className="ml-4 list-disc text-slate-600">
                <li>React</li>
                <li>JavaScript (ES6+)</li>
                <li>HTML 5</li>
                <li>CSS</li>
                <li>Git</li>
              </ul>
              <ul className="ml-4 list-disc text-slate-600">
                <li>PHP</li>
                <li>MySQL</li>
                <li>Laravel</li>
                <li>WordPress</li>
                <li>Agile development</li>
              </ul>
            </div>
          </div>
          <div className="w-full flex justify-start lg:justify-center items-center flex-1">
            <div className="w-full h-auto lg:w-80 lg:h-80 rounded-md overflow-hidden lg:shadow-2xl lg:shadow-perfume-500 ">
              <Image
                alt="profile"
                src="/profile_picture.jpeg"
                width={200}
                height={200}
                className="w-full h-full object-contain rounded-full"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="min-h-screen px-2 lg:px-60 space-y-6 py-10" id="projects">
        <h1 className="text-2xl uppercase font-bold font-montserrat tracking-wider text-gray-700">
          Some Things I’ve Built
        </h1>
        <div className="flex flex-col gap-24">
          {projectList.map((p, index) => (
            <ProjectSection
              key={p.id}
              position={p.position}
              title={p.title}
              subtitle={p.subtitle}
              image={p.image}
              chips={p.chips}
              buttons={p.buttons}
              index={index + 1}
            />
          ))}
        </div>
      </div>

      <div
        className="min-h-screen flex flex-col justify-center items-center px-2 lg:px-60 space-y-3 py-10 bg-perfume-900"
        id="contact"
      >
        <h1 className="text-perfume-300 font-semibold tracking-wider">
          What’s Next?
        </h1>
        <div className="space-y-6 flex flex-col items-center">
          <div className="flex flex-col items-center text-center space-y-3">
            <h1 className="text-5xl lg:text-6xl tracking-tight font-montserrat font-bold  text-perfume-50">
              Get In Touch
            </h1>
            <p className="lg:w-1/2 text-lg text-perfume-300">
              I’m currently looking for new opportunities.
            </p>
          </div>
          <Link href="mailto:heersimran002@gmail.com">
            <button className="block text-perfume-100 border border-perfume-300 bg-perfume-700 p-3 rounded-md text-sm font-medium font-montserrat tracking-wider uppercase">
              Hire me{" "}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
