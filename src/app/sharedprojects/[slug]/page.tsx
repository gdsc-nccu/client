"use client";
// hooks
import { useContext } from "react";
import { BreakPointRecoder } from "../../../components/navigation/main";
// components
import { ChannelTitle } from "../../../components/Channel";
import Image from "next/image";
import Link from "next/link";
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

  return (
    <div
      className={classnames(
        "h-full w-full",
        "justify-center items-center",
        "desktop-home",
        isBreak ? "flex flex-col" : "grid grid-col grid-cols-2 my-20",
      )}
    >
      {!isBreak && (
        <ChannelTitle
          roundedTopRight
          roundedBottomRight
          className="mt-[15%] mb-[15%] h-[70%]"
        >
          <p>專案</p>
          <p>共享</p>
        </ChannelTitle>
      )}
      <div
        className={classnames(
          "h-full w-auto basic-content gap-2 p-2",
          isBreak ? "flex flex-col" : "grid grid-cols-2",
        )}
      >
        <div
          className={classnames("flex justify-center items-center", {
            "px-[15%]": isBreak,
          })}
        >
          <Image
            src={groupData.preview}
            alt={groupData.title + " preview"}
            width={2000}
            height={2000}
          />
        </div>
        <div className="gap-2 flex flex-col justify-center items-center ">
          <p className="text-3xl font-bold">{groupData.title} Title</p>
          <p className="text-2xl">{groupData.description}</p>
        </div>
        <div className="col-span-2 text-2xl justify-center items-center tracking-widest px-20">
          <p>
            組員：
            {groupData.members.map((member, index) => (
              <span key={index}>
                {member + (index === groupData.members.length - 1 ? "、" : "")}
              </span>
            ))}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SharedProjects;
