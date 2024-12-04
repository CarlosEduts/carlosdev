"use client";
import { useTranslations } from "next-intl";
import { useState } from "react";
import Project from "./Project";

const chevronLeftIcon: JSX.Element = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-left"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M15 6l-6 6l6 6" />
  </svg>
);

const chevronRightIcon: JSX.Element = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-right"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M9 6l6 6l-6 6" />
  </svg>
);

export default function Projects() {
  const [position, setPosition] = useState(1);
  const totalProjects = 4;

  const t = useTranslations("Projects");

  // Alternar entre porjetos com facilidade
  const leftProject = () => {
    if (position > 0 && position <= totalProjects) {
      setPosition(position - 1);
    } else {
      setPosition(totalProjects);
    }
  };

  const rightProject = () => {
    if (position > 0 && position < totalProjects) {
      setPosition(position + 1);
    } else {
      setPosition(1);
    }
  };

  return (
    <div>
      <h2
        className="pb-1 font-bold text-lg underline decoration-slate-400"
        style={{ textDecorationStyle: "wavy" }}
      >
        {t("title")}
      </h2>
      <div className="flex w-[100%]  overflow-x-scroll custom-scrollbar scroll-smooth ">
        <div className="flex gap-4 pb-4">
          {/* <Project title={t("project-DevKiit.name")} paragraph={t("project-DevKiit.description")} img="/DevKiit.png" /> */}
          
        </div>
      </div>
      <div className="flex items-center justify-center text-center gap-4">
        <a
          href={`#project${position}`}
          onClick={leftProject}
          className="flex flex-col gap-3 bg-slate-400/5 rounded-full p-2 border-slate-400/20 border"
        >
          {chevronLeftIcon}
        </a>
        <a
          href={`#project${position}`}
          onClick={rightProject}
          className="flex flex-col gap-3 bg-slate-400/5 rounded-full p-2 border-slate-400/20 border"
        >
          {chevronRightIcon}
        </a>
      </div>
    </div>
  );
}
