"use client";
// utils
import React from "react";
// hooks
import { useContext } from "react";
import { BreakPointRecoder } from "../components/navigation/main";
// components
import Channel from "../components/Channel";
// styles
import classnames from "classnames";

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
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
  ];
  const shardProjectArray = [
    {
      title: "No sinal",
    },
    {},
    {},
    {},
    {},
    {},
    {},
    {},
  ];

  return (
    <div
      className={classnames(
        "h-full w-full",
        "flex flex-col justify-center items-center",
      )}
    >
      {/* {isBreak ? <div>mobile navigation</div> : "breakTaker"} */}
      <p className="w-full text-2xl tracking-widest px-16">社課筆記</p>
      <Channel
        channels={noteArray}
        classNameChannel={classnames(
          "min-h-[200px] min-w-[300px] bg-opacity-50",
        )}
      />
      <p className="w-full text-2xl tracking-widest px-16">專案共享</p>
      <Channel
        channels={shardProjectArray}
        classNameChannel={classnames(
          "min-h-[200px] min-w-[300px] bg-opacity-50",
        )}
      />
    </div>
  );
};

export default Home;
