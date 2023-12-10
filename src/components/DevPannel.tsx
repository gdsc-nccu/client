// component
import { Modal } from "./basics";
import { Icon } from "@iconify/react";
import React from "react";
// hooks
import { useState } from "react";
import Accordion from "./basics/accordion/Accordion";

interface Props {
  mainGeometryShow?: {
    width: number;
    height: number;
  };
  anchorRef: React.MutableRefObject<HTMLDivElement | null>;
}

const DevUtils = ({ anchorRef = { current: null } }: Props) => {
  const [open, setOpen] = useState(false);

  const [fontAccordion, setFontAccordion] = useState(true);

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
          header: () => <div className="p-2 text-2xl">Dev Pannel</div>,
          body: () => (
            <div className="h-[60vh]">
              <Accordion
                open={fontAccordion}
                setOpen={setFontAccordion}
                customArrow={(isOpen) => {
                  return (
                    <Icon
                      style={{
                        transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                        transition: "transform 0.15s ease-in-out",
                      }}
                      icon="mdi:chevron-up"
                      className="texl-4xl m-1 h-6 w-6"
                    />
                  );
                }}
                className="border-2 border-base-content rounded-lg p-2"
              >
                {{
                  header: () => <div className="text-xl">Font</div>,
                  body: () => (
                    <div className="p-2 grid grid-cols-2">
                      <p className="">Normal (Noto Sans TC)</p>
                      <p className="font-bold">ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
                      <p>Product Sans</p>
                      <p className="use-product-sans">
                        ABCDEFGHIJKLMNOPQRSTUVWXYZ
                      </p>
                    </div>
                  ),
                }}
              </Accordion>
            </div>
          ),
          footer: () => <div>footer</div>,
        }}
      </Modal>
    </>
  );
};

export default DevUtils;
