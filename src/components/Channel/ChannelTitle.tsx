// utils
import React from "react";
// components
// styles
import classnames from "classnames";
import "./index.css";
// utils

interface ChannelTitleProps {
  children?: React.ReactNode;
  roundedTopRight?: boolean;
  roundedBottomRight?: boolean;
  className?: string;
}

const ChannelTitle = ({
  children,
  roundedTopRight,
  roundedBottomRight,
  className,
}: ChannelTitleProps) => {
  return (
    <div
      className={classnames(
        "w-full text-3xl flex flex-col justify-center items-center",
        "desktop-home-title relative",
        className,
      )}
    >
      <div className="space-y-1 ml-4 absolute z-10">
        {children}
        <div className="space-y-3 py-2.5">
          <p className="w-9 h-0.5 bg-base-content"></p>
          <p className="w-5 h-0.5 bg-base-content"></p>
        </div>
      </div>
      <div
        className={classnames(
          "h-full w-full text-3xl bg-desktop-home-title absolute z-0",
          { "rounded-br-3xl": roundedBottomRight },
          { "rounded-tr-3xl": roundedTopRight },
        )}
      ></div>
    </div>
  );
};

export default ChannelTitle;
