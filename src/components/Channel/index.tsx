// components
import GDSCBracketWhite from "@/icon/gdsc-bracket-white";
// styles
import classnames from "classnames";
import "./index.css";
// utils
import Link from "next/link";

interface ChannelProps {
  channels: Channel[];
  classNameContainer?: string;
  classNameChannel?: string;
}

const Channel = ({
  channels,
  classNameContainer,
  classNameChannel,
}: ChannelProps) => {
  return (
    <div
      className={classnames(
        "w-full flex flex-row overflow-auto space-x-[2vw] px-16 p-8",
        classNameContainer,
      )}
    >
      {channels.map((channel, index) => (
        <div
          className={classnames("rounded-3xl bg-info", classNameChannel)}
          key={index}
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
            <Link className="h-full w-full" href={channel.link}>
              {channel.title}
            </Link>
          )}
        </div>
      ))}
    </div>
  );
};

export default Channel;
