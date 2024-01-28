// utils
import React from "react";
import { SVGProps } from "react";
import classnames from "classnames";

export default function FolderIcon(props: SVGProps<SVGSVGElement>) {
  const { className, ...otherProps } = props;
  return (
    <svg
      width="62"
      height="56"
      viewBox="0 0 62 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={classnames(className)}
      {...otherProps}
    >
      <path
        d="M61 49C61 50.5913 60.3679 52.1174 59.2426 53.2426C58.1174 54.3679 56.5913 55 55 55H7C5.4087 55 3.88258 54.3679 2.75736 53.2426C1.63214 52.1174 1 50.5913 1 49V7C1 5.4087 1.63214 3.88258 2.75736 2.75736C3.88258 1.63214 5.4087 1 7 1H22L28 10H55C56.5913 10 58.1174 10.6321 59.2426 11.7574C60.3679 12.8826 61 14.4087 61 16V49Z"
        stroke="white"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}
