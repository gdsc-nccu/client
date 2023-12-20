"use client";
// utils
import React from "react";
// hooks
import { useContext } from "react";
import { BreakPointRecoder } from "../components/navigation/main";
// components
import Channel, { ChannelTitle } from "../components/Channel";
import { Icon } from "@iconify/react";
// styles
import classnames from "classnames";
import "./home.css";

const Home = () => {
  const { isBreak } = useContext(BreakPointRecoder);

  const noteArray: Channel[] = [
    {
      title: "No signal",
    },
    {},
    {},
    {},
    {},
    {},
  ];
  const shardProjectArray = [
    {
      title: "No signal",
      link: "./sharedprojects/nosignal",
      description: "test project",
    },
    {},
    {},
    {},
    {},
    {},
    {},
    {},
  ];

  return isBreak ? (
    <div
      className={classnames(
        "h-full w-full",
        "grid grid-col grid-cols-1 justify-center items-center",
        "mobile-home",
      )}
    >
      <div></div>
      <Channel
        channels={noteArray}
        classNameContainer="h-full px-[calc(15%_-_1rem)] px-10 !gap-8"
        classNameChannel={classnames(
          "w-[35vw] h-[35vw] aspect-square bg-opacity-20 bg-base-content",
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
