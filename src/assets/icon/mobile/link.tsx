// utils
import React from "react";
import { SVGProps } from "react";
import classnames from "classnames";

export default function LinkIcon(props: SVGProps<SVGSVGElement>) {
  const { className, ...otherProps } = props;
  return (
    <svg
      width="54"
      height="54"
      viewBox="0 0 54 54"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={classnames(className)}
      {...otherProps}
    >
      <path
        d="M21.7705 29.5885C22.8934 31.0898 24.3261 32.3319 25.9712 33.2307C27.6164 34.1296 29.4357 34.6641 31.3056 34.798C33.1755 34.9319 35.0524 34.6621 36.8089 34.0069C38.5653 33.3517 40.1604 32.3264 41.4857 31.0005L49.33 23.1563C51.7115 20.6905 53.0292 17.3881 52.9995 13.9602C52.9697 10.5323 51.5947 7.2532 49.1707 4.82922C46.7468 2.40524 43.4677 1.03028 40.0398 1.00049C36.6119 0.970707 33.3094 2.28847 30.8437 4.66996L26.3463 9.14118"
        stroke="white"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M32.2294 24.359C31.1065 22.8578 29.6739 21.6157 28.0287 20.7168C26.3835 19.818 24.5643 19.2835 22.6944 19.1496C20.8244 19.0156 18.9476 19.2854 17.1911 19.9407C15.4346 20.5959 13.8396 21.6212 12.5142 22.947L4.66996 30.7913C2.28847 33.257 0.970707 36.5595 1.00049 39.9874C1.03028 43.4153 2.40524 46.6944 4.82922 49.1183C7.2532 51.5423 10.5323 52.9173 13.9602 52.9471C17.3881 52.9769 20.6905 51.6591 23.1563 49.2776L27.6275 44.8064"
        stroke="white"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}