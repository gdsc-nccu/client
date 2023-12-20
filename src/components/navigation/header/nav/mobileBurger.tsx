// hooks
import React from "react";
import { useState } from "react";
// styles
import classnames from "classnames";
// utils
import Link from "next/link";
import IconLinkArray from "../../../../assets/icon-link.json";
// components
import { Icon } from "@iconify/react";
import { Burger } from "../../../basics";

interface Props {}

export default function HeaderBurger({}: Props) {
  const [burgerOpen, setBurgerOpen] = useState(false);

  const handleClose = () => setBurgerOpen(false);

  return (
    <Burger
      open={burgerOpen}
      burgerButton={(open) => <Icon icon="fe:bar" className="text-3xl" />}
      setOpen={setBurgerOpen}
      burgerButtonClassName="w-16 flex justify-center items-center"
      className={classnames(
        "max-w-[320px] flex",
        "bg-secondary text-secondary-content",
      )}
      disableBackdropClose={false}
    >
      <div className="w-full h-16">
        <button
          className="h-full w-16 flex justify-center items-center"
          onClick={handleClose}
        >
          <Icon icon="fe:close" className="text-3xl" />
        </button>
      </div>
      <div className="w-full grow pt-8">
        {[
          ["首頁", "/"],
          ["專案共享平台", "/myprojects"],
        ].map((item, index) => (
          <Link href={item[1]} key={index} onClick={handleClose}>
            <div
              className={classnames(
                "w-full h-14 flex justify-start items-center",
                "tracking-widest text-xl px-4 shadow-burger-item",
                "transition-colors duration-200 ease-in-out",
                "hover:bg-secondary-content hover:text-secondary",
              )}
            >
              {item[0]}
            </div>
          </Link>
        ))}
      </div>
      <div className="w-full h-36 px-4">
        <p className="tracking-widest text-lg">聯絡我們</p>
        <div className="flex flex-row justify-start items-center h-16 space-x-3">
          {IconLinkArray.map((item, index) => (
            <a href={item.href} key={index}>
              <Icon icon={item.icon} className="text-3xl cursor-pointer" />
            </a>
          ))}
        </div>
      </div>
    </Burger>
  );
}
