// component
import { Modal } from "./basics";
import { Icon } from "@iconify/react";
// hooks
import { useState } from "react";

interface Props {
  mainGeometryShow?: {
    width: number;
    height: number;
  };
  anchorRef: React.MutableRefObject<HTMLDivElement | null>;
}

const DevUtils = ({ anchorRef = { current: null } }: Props) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      {process.env.NODE_ENV === "development" && (
        <button className="w-12" onClick={() => setOpen(true)}>
          <Icon icon="fe:wrench" className="text-3xl" />
        </button>
      )}
      <Modal
        open={open}
        anchorRef={anchorRef}
        handleClose={() => setOpen(false)}
        disableBackdropClose={false}
        className="w-[80vw] h-[80vh] bg-base-100 text-base-content"
        upward={false}
        loading={false}
      >
        {{
          header: () => <div className="h2">Dev Pannel</div>,
          body: () => <div>body</div>,
          footer: () => <div>footer</div>,
        }}
      </Modal>
    </>
  );
};

export default DevUtils;
