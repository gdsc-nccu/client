"use client";
// styles
import classnames from "classnames";
import "./loading.css";

export default function MainLoading({}) {
  return (
    <div className="w-full">
      <div
        className={classnames(
          "h-4 w-full text-5xl px-[10%] py-[8vh]",
          "text-base-content main-loading",
          "bg-transparent",
        )}
        style={{
          letterSpacing: "0.5rem",
        }}
      >
        歡迎來到GDSC.
      </div>
    </div>
  );
}
