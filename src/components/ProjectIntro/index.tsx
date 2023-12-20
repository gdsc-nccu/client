// components
import { ChannelTitle } from "../../components/Channel";
import Logo from "/public/logo-white.png";
import GroupInfo from "./GroupInfo";
// utils
import React from "react";
// styles
import classnames from "classnames";
import "../../app/home.css";
import "./index.css";

const ProjectIntro = ({
  params,
  isBreak,
}: {
  params: { slug: string };
  isBreak: boolean;
}) => {
  const groupData = {
    name: "nosignal",
    preview: Logo as unknown as string,
    title: "No signal",
    descriptions: ["test project"],
    link: "./sharedprojects/nosignal",
    members: [],
  } as GroupData;

  return (
    <div
      className={classnames(
        "h-full w-full",
        "justify-center items-center",
        isBreak ? "flex flex-col" : "desktop-home grid grid-col grid-cols-2",
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
          isBreak ? "h-full" : "h-[calc(100%_-_10rem)] ",
          "w-auto overflow-auto",
        )}
      >
        <GroupInfo groupData={groupData} isBreak={isBreak} />
      </div>
    </div>
  );
};

export default ProjectIntro;
export { GroupInfo };
