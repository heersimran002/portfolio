import Link from "next/link";
import React, { useState } from "react";
import { SlClose, SlMenu } from "react-icons/sl";
import { navlinks } from "../models/NavLinks";

export const Sidebar = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <div
        className="block lg:hidden text-2xl text-perfume-700"
        onClick={() => setShow(true)}>
        <SlMenu />
      </div>
      {show && (
        <>
          <div
            onClick={() => setShow(false)}
            className="fixed top-0 left-0 right-0 bottom-0 bg-perfume-700 opacity-50"></div>
          <div
            onClick={() => setShow(false)}
            className="fixed top-0 left-0 right-0 bottom-0 backdrop-blur-sm"></div>
          <aside
            className="w-64 block lg:hidden fixed top-0 right-0 bottom-0 bg-perfume-200 z-50 shadow-lg"
            aria-label="Sidebar">
            <div
              className="absolute top-4 right-4 text-3xl text-perfume-700"
              onClick={() => setShow(false)}>
              <SlClose />
            </div>
            <div className="flex flex-col justify-center h-full items-center gap-8 text-sm">
              {navlinks.map(link => {
                return (
                  <Link href={link.link} key={link.id}>
                    <div className="flex flex-col items-center gap-1 uppercase font-montserrat font-medium">
                      <span className="text-perfume-700">{link.id}.</span>
                      <span>{link.name}</span>
                    </div>
                  </Link>
                );
              })}
              <button className="block text-perfume-700 border border-perfume-700 bg-perfume-100 px-3 py-2 rounded-md text-sm font-medium font-montserrat tracking-wider uppercase">
                Resume
              </button>
            </div>
          </aside>
        </>
      )}
    </>
  );
};
