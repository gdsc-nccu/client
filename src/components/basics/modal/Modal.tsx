// Hooks
import { useRef } from "react";
// Components
import { AnimatePresence, motion, useDragControls } from "framer-motion";
import { ReactNode } from "react";
import { useUnitedResize } from "../../../hooks";
import Backdrop from "../backdrop/Backdrop";
// Styles
import "./Modal.css";
import classnames from "classnames";
// Utils

// Props type defination
interface ModalProps {
  open: boolean;
  className: string;
  anchorRef: React.MutableRefObject<HTMLDivElement | null>;
  handleClose: () => void;
  disableBackdropClose: boolean;
  loading?: boolean;
  upward?: boolean;
  children: {
    header: () => ReactNode;
    body: () => ReactNode;
    footer: () => ReactNode;
  };
}

const dropIn = {
  hidden: {
    y: "-100vh",
  },
  visible: {
    y: "0",
    transition: {
      duration: 0.1,
      type: "spring",
      damping: 50,
      stiffness: 1000,
    },
  },
  exit: {
    y: "-100vh",
  },
};

const dropInUpward = {
  hidden: {
    y: "100vh",
  },
  visible: {
    y: "0",
    transition: {
      duration: 0.1,
      type: "spring",
      damping: 50,
      stiffness: 1000,
    },
  },
  exit: {
    y: "100vh",
  },
};
const Modal = ({
  open = false,
  className = "",
  handleClose = () => {},
  anchorRef = { current: null },
  disableBackdropClose = false,
  loading = false,
  upward = false,
  children = {
    header: () => null,
    body: () => null,
    footer: () => null,
  },
}: ModalProps) => {
  const dragControls = useDragControls();
  const { isBreak } = useUnitedResize("mobileBreak", anchorRef);
  const ref = useRef<HTMLDivElement>(null);
  const { header, body, footer } = children;

  const _handleClose = () => {
    if (!disableBackdropClose) handleClose();
  };

  const Thumb = () => (
    <div
      className="mt-2 w-full shrink-0 touch-none select-none"
      onPointerDown={(e) => dragControls.start(e)}
    >
      <div className="flex cursor-grab justify-center py-3">
        <div className="h-2 w-1/3 rounded-full bg-base-300"></div>
      </div>
    </div>
  );

  return (
    <AnimatePresence>
      {open ? (
        <Backdrop
          onClick={_handleClose}
          className={classnames(
            "flex flex-col",
            isBreak ? (upward ? "justify-end" : "justify-start") : undefined,
          )}
        >
          <motion.div
            drag="y"
            dragConstraints={{ top: 0, bottom: 0 }}
            dragElastic={0.8}
            dragListener={false}
            dragControls={dragControls}
            ref={ref}
            onDragEnd={(event, info) => {
              if (!ref.current) return;
              const shouldClose = upward
                ? info.velocity.y > 20 ||
                  (info.velocity.y >= 0 && info.point.y > 45)
                : info.velocity.y < -20 ||
                  (info.velocity.y <= 0 &&
                    info.point.y < window.innerHeight - 45);
              if (shouldClose) _handleClose();
            }}
          >
            <motion.div
              onClick={(e) => e.stopPropagation()}
              className={classnames(
                `modal-base ${
                  isBreak
                    ? upward
                      ? "modal-mobile-upward drag-padding-upward"
                      : "modal-mobile drag-padding"
                    : "modal"
                } ${className}`,
                "transition-[height] duration-200 ease-in-out",
              )}
              variants={upward ? dropInUpward : dropIn}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              {isBreak && upward ? <Thumb /> : ""}
              {loading ? (
                <div className="flex h-full justify-center">
                  <div className="flex flex-col justify-center">
                    <span className="loader"></span>
                  </div>
                </div>
              ) : (
                <>
                  <div className="modal-header">{header()}</div>
                  <div className="modal-body">
                    <div className="h-full min-w-full overflow-auto">
                      {body()}
                    </div>
                  </div>
                  <div className="modal-footer">{footer()}</div>
                </>
              )}
              {isBreak && !upward ? <Thumb /> : ""}
            </motion.div>
          </motion.div>
        </Backdrop>
      ) : (
        ""
      )}
    </AnimatePresence>
  );
};

export default Modal;
