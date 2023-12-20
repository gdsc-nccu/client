"use client";
// hooks
import { useContext } from "react";
import { BreakPointRecoder } from "../../../components/navigation/main";
// components
import ProjectIntro from "../../../components/ProjectIntro";
// utils
import React from "react";
// styles
import classnames from "classnames";
import "../../home.css";
import "../index.css";

const SharedProjects = ({ params }: { params: { slug: string } }) => {
  const { isBreak } = useContext(BreakPointRecoder);

  return <ProjectIntro params={params} isBreak={isBreak} />;
};

export default SharedProjects;
