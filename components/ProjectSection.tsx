import Image from "next/image";
import Link from "next/link";
import React, { FC, ReactNode } from "react";
import { SlSocialGithub, SlLink } from "react-icons/sl";

interface Props {
  index: number;
  position: "left" | "right";
  image: string;
  title: string;
  subtitle: string | ReactNode;
  chips: { id: string; name: string }[];
  buttons: { id: string; name: string; redirect: string; icon: ReactNode }[];
}

export const ProjectSection: FC<Props> = ({
  index,
  position,
  image,
  title,
  subtitle,
  chips,
  buttons,
}) => {
  return (
    <div
      className={`flex flex-col ${
        position === "left" ? "lg:flex-row" : "lg:flex-row-reverse"
      }  gap-4`}>
      <div className="flex-[3] w-full flex justify-start lg:justify-center items-start">
        <div className="w-full h-auto rounded-md overflow-hidden">
          <Image
            alt="project image"
            src={image}
            width={700}
            height={200}
            className="w-full h-full object-contain rounded-md"
          />
        </div>
      </div>
      <div
        className={`flex-[2] flex flex-col ${
          position === "left"
            ? "lg:items-end lg:text-right"
            : "lg:items-start lg:text-left"
        } gap-6 justify-between`}>
        <div
          className={`flex flex-col ${
            position === "left" ? "lg:items-end" : "lg:items-start"
          } gap-3`}>
          <div className="space-y-1">
            <p className=" text-perfume-500 font-montserrat font-semibold tracking-wider">
              Project {index}
            </p>
            <p className="text-xl uppercase font-bold font-montserrat tracking-wider text-gray-700">
              {title}
            </p>
          </div>

          <p className="text-gray-500 leading-relaxed tracking-tight">
            {subtitle}
          </p>
          <div className="flex flex-wrap gap-4 text-perfume-700 text-sm font-semibold">
            {chips.map(chip => (
              <div
                key={chip.id}
                className="bg-perfume-50 px-3 py-1 rounded-full whitespace-nowrap">
                {chip.name}
              </div>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-4">
          {buttons.map(button => (
            <Link href={button.redirect} key={button.id}>
              <button className="flex items-center gap-3 text-perfume-700 border border-perfume-700 bg-perfume-100 p-2 rounded-md text-sm font-medium font-montserrat tracking-wider uppercase">
                {button.icon}
                <span>{button.name}</span>
              </button>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
