"use client";
// hooks
import { useContext } from "react";
import { BreakPointRecoder } from "../../../components/navigation/main";
// components
import ProjectIntro from "../../../components/ProjectIntro";
import Logo from "/public/logo-white.png";
// utils
import React from "react";
// styles
import classnames from "classnames";
import "../../home.css";
import "../index.css";

const SharedProjects = ({ params }: { params: { slug: string } }) => {
  const groupData = {
    preview: Logo as unknown as string,
    title: "No signal",
    description: "test project",
    link: "./sharedprojects/nosignal",
    members: [],
  } as GroupData;
  const { isBreak } = useContext(BreakPointRecoder);

  return <ProjectIntro params={params} isBreak={isBreak} />;
};

export default SharedProjects;
