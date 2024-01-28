"use client";
// utils
import React from "react";
import tmpData from "../assets/tmpData/groupData.json";
// hooks
import { useContext } from "react";
import { BreakPointRecoder } from "../components/navigation/main";
// components
import Channel, { ChannelTitle } from "../components/Channel";
import FolderIcon from "../assets/icon/mobile/folder";
import FormIcon from "../assets/icon/mobile/form";
import LinkIcon from "../assets/icon/mobile/link";
// styles
import classnames from "classnames";
import "./home.css";

const Home = () => {
  const { isBreak } = useContext(BreakPointRecoder);

  const noteArray: Channel[] = [
    {
      title: "No signaeel",
    },
    {},
    {},
    {},
    {},
    {},
  ];
  const shardProjectArray = tmpData.map((member, index) => ({
    title: member.title,
    preview: member.preview,
    link: "./sharedprojects#" + member.name,
  }));

  return isBreak ? (
    <div
      className={classnames(
        "h-full w-full",
        "grid grid-col grid-cols-1 justify-center items-center",
        "mobile-home",
      )}
    >
      <div className="px-16 text-4xl font-semibold tracking-widest space-y-1">
        <p>歡迎來到</p>
        <p>GDSC.</p>
      </div>
      <div className="border">e</div>
      <Channel
        channels={[
          {
            children: (
              <div className="flex flex-col justify-center items-center h-full w-full gap-2">
                <p className="text-info font-normal tracking-widest">
                  我的專案
                </p>
                <FolderIcon />
              </div>
            ),
            link: "/myprojects",
          },
          {
            children: (
              <div className="flex flex-col justify-center items-center h-full w-full gap-2">
                <p className="text-info font-normal tracking-widest">
                  社團表單
                </p>
                <FormIcon />
              </div>
            ),
            link: "/form",
          },
          {
            children: (
              <div className="flex flex-col justify-center items-center h-full w-full gap-2">
                <p className="text-info font-normal tracking-widest">
                  Discord綁定
                </p>
                <LinkIcon />
              </div>
            ),
            title: "Discord綁定",
            // link: "/discord",
          },
        ]}
        classNameContainer="px-[calc(max(15%,_17.5vw)_-_2rem)] !gap-8"
        classNameChannel={classnames(
          "w-[35vw] h-[35vw] max-h-[30vh] max-w-[30vh] aspect-square !bg-base-300 !border-none shadow-mobile-item",
        )}
      />
    </div>
  ) : (
    <div
      className={classnames(
        "h-full w-full",
        "grid grid-col grid-cols-2 justify-center items-center",
        "desktop-home",
      )}
    >
      <ChannelTitle roundedTopRight className="top-[12.5%] h-full">
        <p>社課</p>
        <p>筆記</p>
      </ChannelTitle>
      <Channel
        channels={noteArray}
        classNameContainer=" px-12 mt-[5%]"
        classNameChannel={classnames(
          "h-[250px] w-[375px] max-h-[25vh] max-w-[30vmax] bg-opacity-20 bg-base-content",
        )}
      />
      <ChannelTitle roundedBottomRight className="bottom-[12.5%] h-full">
        <p>專案</p>
        <p>共享</p>
      </ChannelTitle>
      <Channel
        channels={shardProjectArray}
        classNameContainer="px-12 mb-[5%]"
        classNameChannel={classnames(
          "h-[250px] w-[375px] max-h-[25vh] max-w-[30vmax] bg-opacity-20 bg-base-content",
        )}
        showTitle
      />
    </div>
  );
};

export default Home;
