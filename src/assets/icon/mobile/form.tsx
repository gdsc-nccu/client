// utils
import React from "react";
import { SVGProps } from "react";
import classnames from "classnames";

export default function FormIcon(props: SVGProps<SVGSVGElement>) {
  const { className, ...otherProps } = props;
  return (
    <svg
      width="55"
      height="56"
      viewBox="0 0 55 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={classnames(className)}
      {...otherProps}
    >
      <path
        d="M48.1111 1H6.88889C3.63655 1 1 3.68629 1 7V49C1 52.3137 3.63655 55 6.88889 55H48.1111C51.3635 55 54 52.3137 54 49V7C54 3.68629 51.3635 1 48.1111 1Z"
        stroke="white"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M21.666 18.25H38.9993"
        stroke="white"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M21.666 27.5H38.9993"
        stroke="white"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M21.666 36.75H38.9993"
        stroke="white"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M15 18.25H15.0126"
        stroke="white"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M15 27.5H15.0126"
        stroke="white"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M15 36.75H15.0126"
        stroke="white"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}
