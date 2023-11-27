// component
import { Modal } from "./basics";
import { Icon } from "@iconify/react";
// hooks
import { useState } from "react";

interface Props {
  anchorRef: React.MutableRefObject<HTMLDivElement | null>;
}

// Default props
const defaultProps: Props = {
  anchorRef: { current: null },
};

const DevUtils = ({ anchorRef }: Props) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      {process.env.NODE_ENV === "development" && (
        <button onClick={() => setOpen(true)}>
          <Icon icon="mdi:wrench" className="text-2xl text-base-300" />
        </button>
      )}
      <Modal
        open={open}
        anchorRef={anchorRef}
        handleClose={() => setOpen(false)}
        disableBackdropClose={false}
        className="w-[80vw] h-[80vh] bg-gray-800"
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
