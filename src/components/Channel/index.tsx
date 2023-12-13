// utils
import React from "react";
// components
import GDSCBracketWhite from "../../assets/icon/gdsc-bracket-white";
import ChannelTitle from "./ChannelTitle";
import Link from "next/link";
import Image from "next/image";
// styles
import classnames from "classnames";
import "./index.css";
// utils

interface ChannelProps {
  channels: Channel[];
  showTitle?: boolean;
  classNameContainer?: string;
  classNameChannel?: string;
}

const Channel = ({
  channels,
  showTitle,
  classNameContainer,
  classNameChannel,
}: ChannelProps) => {
  return (
    <div
      className={classnames(
        "w-full flex flex-row overflow-auto space-x-[2rem] px-16 p-8",
        classNameContainer,
      )}
    >
      {channels.map((channel, index) => (
        <div key={index} className="flex flex-col">
          <div
            className={classnames(
              "rounded-3xl bg-info border-2 border-base-content",
              classNameChannel,
            )}
          >
            {channel.link === undefined ? (
              <div
                className={classnames(
                  "h-full w-full relative",
                  "flex flex-col spaxe-y-1 justify-center items-center opacity-60",
                )}
              >
                {/* <p className="absolute top-2 left-3">{index}</p> */}
                <GDSCBracketWhite className="text-4xl" />
                <p className="text-2xl use-product-sans font-bold tracking-wider">
                  No Sinal
                </p>
              </div>
            ) : (
              <>
                <Link className="h-full w-full relative" href={channel.link}>
                  {channel.preview ? (
                    <Image
                      src={channel.preview}
                      alt={
                        (channel.title ? channel.title : "No Title") +
                        " preview"
                      }
                      width={2000}
                      height={2000}
                      className="rounded-3xl w-full h-full"
                    />
                  ) : (
                    <div
                      className={classnames(
                        "h-full w-full relative",
                        "flex flex-col spaxe-y-1 justify-center items-center opacity-60",
                      )}
                    >
                      {/* <p className="absolute top-2 left-3">{index}</p> */}
                      <GDSCBracketWhite className="text-4xl" />
                      <p className="text-2xl use-product-sans font-bold tracking-wider">
                        No Sinal
                      </p>
                    </div>
                  )}
                </Link>
              </>
            )}
          </div>
          {showTitle && (
            <p className="text-2xl use-product-sans font-bold tracking-wider flex justify-center m-2">
              {channel.title}
            </p>
          )}
        </div>
      ))}
    </div>
  );
};

export default Channel;
export { ChannelTitle };
