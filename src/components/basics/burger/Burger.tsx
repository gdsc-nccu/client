// utils
import React from "react";
// component
import { AnimatePresence, motion } from "framer-motion";
import { Icon } from "@iconify/react";
import Backdrop from "../backdrop/Backdrop";
// hooks
import { useState, ReactNode, Dispatch, SetStateAction } from "react";
// styles
import classnames from "classnames";

// Props type defination
interface ModalProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  className?: string;
  burgerButtonClassName?: string;
  disableBackdropClose: boolean;
  burgerButton?: (value: boolean) => ReactNode;
  children?: ReactNode;
}

const Burger = ({
  open = false,
  setOpen = () => {},
  className = "",
  burgerButtonClassName = "",
  disableBackdropClose = false,
  burgerButton = undefined,
  children = <div>Burger is yummy!</div>,
}: ModalProps) => {
  const _handleClose = () => {
    if (!disableBackdropClose) setOpen(false);
  };

  return (
    <>
      <button
        onClick={() => setOpen((prev) => !prev)}
        className={classnames(burgerButtonClassName)}
      >
        {burgerButton ? (
          burgerButton(open)
        ) : (
          <Icon icon="fe:bar" className="text-3xl" />
        )}
      </button>
      <AnimatePresence>
        {open ? (
          <Backdrop
            onClick={_handleClose}
            className={classnames(
              "flex flex-col justify-start items-start absolute",
            )}
          >
            <motion.div
              className={classnames(
                "flex flex-col",
                "w-2/3 h-full",
                "bg-base-100 text-base-content",
                "overflow-hidden",
                "absolute top-0 left-0",
                className,
              )}
              onClick={(e) => e.stopPropagation()}
              initial={{
                x: "-100%",
              }}
              animate={{
                x: "0%",
                transition: {
                  duration: 0.2,
                  ease: "easeInOut",
                },
              }}
              exit={{
                x: "-100%",
              }}
            >
              {children}
            </motion.div>
          </Backdrop>
        ) : (
          ""
        )}
      </AnimatePresence>
    </>
  );
};

export default Burger;
