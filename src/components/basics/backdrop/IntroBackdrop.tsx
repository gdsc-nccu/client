// Hooks
// Components
import { motion, AnimatePresence } from "framer-motion";
// Styles
import classnames from "classnames";
// utils
import React from "react";

// Props type defination
interface BackdropProps {
  open: boolean;
  onClick?: React.MouseEventHandler<HTMLInputElement>;
  children?: {
    instruction?: JSX.Element;
    target: JSX.Element;
  };
  className?: string;
  backdropClassName?: string;
  containerClassName?: string;
  backdropHide?: boolean;
}

// Default props

/**
 * An animated Backdrop
 *
 * @param onClick - Event when click
 * @param children - children
 * @param className - classes
 *
 */
const IntroBackdrop = ({
  open = false,
  onClick,
  children,
  className,
  backdropClassName,
  containerClassName,
  backdropHide,
}: BackdropProps) => {
  return (
    <div className={classnames(className, "relative h-full w-full")}>
      <div
        className={classnames(containerClassName, "absolute z-0")}
        key="container"
      >
        {children?.target}
      </div>
      <AnimatePresence>
        {backdropHide && open && children?.instruction}
        {open && !backdropHide && (
          <motion.div
            className={classnames(
              "absolute z-10 h-full w-full bg-[#00000088]",
              backdropClassName,
            )}
            onClick={onClick}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.2 } }}
            exit={{ opacity: 0 }}
            key={"backdrop"}
          >
            {children?.instruction}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default IntroBackdrop;
