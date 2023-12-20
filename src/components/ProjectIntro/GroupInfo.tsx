// components
import Image from "next/image";
import Link from "next/link";
// utils
import React from "react";
// styles
import classnames from "classnames";
import "./index.css";

const GroupInfo = ({
  groupData,
  isBreak,
}: {
  groupData: GroupData;
  isBreak: boolean;
}) => {
  return (
    <div className={classnames("h-full w-auto project-group-info px-12 grid")}>
      <div className="flex justify-center items-center tracking-widest py-4">
        <p className="text-3xl w-full h-full font-bold border-b">
          {groupData.title}
        </p>
      </div>
      <div
        className={classnames(
          "flex justify-center items-center tracking-widest py-4",
          { "flex-col grow": isBreak },
        )}
      >
        <div className={classnames("overflow-hidden m-2 flex w-full h-full")}>
          {/* <Image
            src={groupData.preview}
            alt={groupData.title + " preview"}
            width={2000}
            height={2000}
            className="object-contain mx-auto rounded-2xl shadow-inner-3xl"
          /> */}
          <svg style={{ visibility: "hidden" }} width="0" height="0">
            <defs>
              <filter id="filter-radius">
                <feGaussianBlur
                  in="SourceGraphic"
                  stdDeviation="4"
                  result="blur"
                />
                <feColorMatrix
                  in="blur"
                  mode="matrix"
                  values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 100 -50"
                  result="mask"
                />
                <feComposite in="SourceGraphic" in2="mask" operator="atop" />
              </filter>
            </defs>
          </svg>
          <div
            className="rounded-2xl w-full h-full"
            style={{
              backgroundImage: `url(${groupData.preview})`,
              backgroundSize: "contain",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundOrigin: "border-box",
              filter: "url('#filter-radius')",
            }}
          ></div>
        </div>

        <div className="gap-2 flex flex-col justify-center items-center p-2 w-full">
          {groupData.descriptions.map((description, index) => (
            <p key={index} className="text-2xl w-full">
              {description}
            </p>
          ))}
        </div>
      </div>

      <div className="flex text-2xl justify-start items-center tracking-widest">
        <p>
          組員：
          {groupData.members.map((member, index) => (
            <span key={index}>
              {member + (index === groupData.members.length - 1 ? "" : "、")}
            </span>
          ))}
        </p>
      </div>
      <div className="flex justify-center items-center tracking-widest w-full">
        <Link
          href={groupData.link}
          className="flex justify-center items-center text-2xl underline w-full"
        >
          <p className="">點此連結前往專案簡報</p>
        </Link>
      </div>
    </div>
  );
};

export default GroupInfo;
