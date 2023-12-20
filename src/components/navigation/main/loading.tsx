"use client";
// components
import Image from "next/image";
import WelcomeImage from "../../../assets/home-page-welcome.png";
import WelcomeFlowers from "../../../assets/home-page-flowers.png";
// styles
import classnames from "classnames";
import "./loading.css";

export default function MainLoading({}) {
  return (
    <div className="w-full h-full flex flex-col overflow-hidden">
      <div
        className={classnames(
          "h-[8vh] w-full px-[10%] py-4",
          "text-base-content main-loading",
          "bg-transparent",
        )}
        style={{
          letterSpacing: "0.5rem",
        }}
      >
        歡迎來到GDSC.
      </div>
      <div className="h-full py-10">
        <div className="relative h-fit">
          <Image
            src={WelcomeImage}
            alt="welcome to gdsc"
            width={2000}
            height={2000}
            className="object-contain w-full welcome-image-people"
          />
          <Image
            src={WelcomeFlowers}
            alt="welcome to gdsc"
            width={2000}
            height={2000}
            className="absolute object-contain w-full welcome-image-flower bottom-0"
          />
        </div>
      </div>
    </div>
  );
}
