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
      title: "No sinal",
    },
    {},
    {},
    {},
    {},
    {},
  ];
  const shardProjectArray = [
    {
      title: "No sinal",
      link: "./sharedprojects/nosinal",
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
    <div>
      <p>mobile navigation</p>
    </div>
  ) : (
    <div
      className={classnames(
        "h-full w-full",
        "grid grid-col grid-cols-2 justify-center items-center",
        "desktop-home",
      )}
    >
      <ChannelTitle roundedTopRight className="top-[15%]">
        <p>社課</p>
        <p>筆記</p>
      </ChannelTitle>
      <Channel
        channels={noteArray}
        classNameContainer="px-6"
        classNameChannel={classnames(
          "min-h-[250px] min-w-[375px] max-h-[30vmax] max-w-[30vmax] bg-opacity-20 bg-base-content",
        )}
      />
      <ChannelTitle roundedBottomRight className="bottom-[15%]">
        <p>專案</p>
        <p>共享</p>
      </ChannelTitle>
      <Channel
        channels={shardProjectArray}
        classNameContainer="px-6"
        classNameChannel={classnames(
          "min-h-[250px] min-w-[375px] max-h-[30vmax] max-w-[30vmax] bg-opacity-20 bg-base-content",
        )}
        showTitle
      />
    </div>
  );
};

export default Home;
