// Hooks
// Components
import { motion } from "framer-motion";
import { createPortal } from "react-dom";
// Styles
import "./Backdrop.css";
import classnames from "classnames";
// Utils

// Props type defination
interface BackdropProps {
  onClick?: React.MouseEventHandler<HTMLInputElement>;
  children: JSX.Element;
  className?: string;
}

/**
 * An animated Backdrop
 *
 * @param onClick - Event when click
 * @param children - children
 * @param className - classes
 *
 */
const Backdrop = ({ onClick, className, children = <></> }: BackdropProps) => {
  return createPortal(
    <motion.div
      className={classnames("backdrop", className)}
      onClick={onClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.2 } }}
      exit={{ opacity: 0 }}
    >
      {children}
    </motion.div>,
    document.querySelector("body") as HTMLBodyElement,
  );
};

export default Backdrop;
