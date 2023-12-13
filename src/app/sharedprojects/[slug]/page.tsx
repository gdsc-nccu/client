// hooks
// components
import { ChannelTitle } from "../../../components/Channel";
// utils
import React from "react";
// styles
import classnames from "classnames";
import "../../home.css";

const SharedProjects = ({ params }: { params: { slug: string } }) => {
  return (
    <div
      className={classnames(
        "h-full w-full",
        "grid grid-col grid-cols-2 justify-center items-center",
        "desktop-home",
      )}
    >
      <ChannelTitle
        roundedTopRight
        roundedBottomRight
        className="mt-[15%] mb-[15%] h-[70%]"
      >
        <p>專案</p>
        <p>共享</p>
      </ChannelTitle>
      <div className="h-full border border-red-500">
        <p>{params.slug}</p>
      </div>
    </div>
  );
};

export default SharedProjects;
