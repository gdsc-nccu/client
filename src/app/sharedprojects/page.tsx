"use client";
// hooks
import { useContext } from "react";
import { BreakPointRecoder } from "../../components/navigation/main";
// components
import { ChannelTitle } from "../../components/Channel";
import { GroupInfo } from "../../components/ProjectIntro";
// utils
import React from "react";
import tmpData from "../../assets/tmpData/groupData.json";
// styles
import classnames from "classnames";

const SharedProjects = () => {
  const { isBreak } = useContext(BreakPointRecoder);

  return (
    <div
      className={classnames(
        "h-full w-full",
        "desktop-home",
        isBreak
          ? "flex flex-col justify-start items-center"
          : "grid grid-col grid-cols-2 justify-center items-center",
      )}
    >
      {!isBreak && (
        <ChannelTitle roundedTopRight roundedBottomRight className="h-1/2">
          <p>專案</p>
          <p>共享</p>
        </ChannelTitle>
      )}
      <div
        className={classnames(
          isBreak ? "h-full" : "h-[calc(100%_-_10rem)]",
          "w-auto overflow-auto",
        )}
      >
        {tmpData.map((member, index) => (
          <GroupInfo groupData={member} isBreak={isBreak} key={index} />
        ))}
      </div>
    </div>
  );
};

export default SharedProjects;
