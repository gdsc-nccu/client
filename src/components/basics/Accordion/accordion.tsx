// Hooks
import { useState } from "react";
// Components
import { AnimatePresence, motion } from "framer-motion";
import { ReactNode } from "react";
import { Icon } from "@iconify/react";
// Styles
import classnames from "classnames";
// Utils

// Props type defination
interface AccordionProps {
  open?: boolean;
  className?: string;
  setOpen?: (prev: boolean) => void;
  children: {
    header: () => ReactNode;
    body: () => ReactNode;
  };
  customArrow: (isOpen: boolean) => ReactNode;
}

const Accordion = ({
  open,
  className,
  setOpen,
  children = {
    header: () => null,
    body: () => null,
  },
  customArrow = (isOpen: boolean) => {
    return (
      <Icon
        style={{
          transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
          transition: "transform 0.15s ease-in-out",
        }}
        icon="mdi:chevron-up"
        className="texl-xl m-1 h-6 w-6"
      />
    );
  },
}: AccordionProps) => {
  const { header, body } = children;

  const [isOpen, setIsOpen] = useState(open === undefined ? false : open);
  const isUsingOutsideOpen = open !== undefined && setOpen !== undefined;

  const _handleClick = () => {
    setOpen?.(!open);
    setIsOpen(!isOpen);
  };

  return (
    <motion.div className={classnames(className)}>
      <AnimatePresence>
        <motion.div
          onClick={_handleClick}
          className="flex cursor-pointer"
          key="accordion-header"
        >
          <div className="flex items-center justify-center">
            {customArrow(isUsingOutsideOpen ? open : isOpen)}
          </div>
          <div className="flex grow items-center justify-start">{header()}</div>
        </motion.div>
        {(isUsingOutsideOpen ? open : isOpen) && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            key={"accordion-body"}
          >
            {body()}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Accordion;
