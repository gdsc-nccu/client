// hooks
import { useState } from "react";
// styles
// utils
// components
import { Icon } from "@iconify/react";
import { Burger, Toggle } from "../../basics";
import StyledLink from "./StyledLink";

interface Props {}

export default function HeaderBurger({}: Props) {
  const [burgerOpen, setBurgerOpen] = useState(false);

  const [toggle01, setToggle01] = useState<boolean>(false);

  return (
    <Burger
      open={burgerOpen}
      burgerButton={(open) => <Icon icon="fe:bar" className="text-3xl" />}
      setOpen={setBurgerOpen}
      burgerButtonClassName="w-12 flex justify-center items-center"
      // className={classnames(
      //   { "bg-base-content text-base-100": pathname !== "profile" },
      //   { "bg-base-100 text-base-content": pathname === "profile" },
      // )}
      disableBackdropClose={false}
    >
      <Toggle checked={toggle01} onChange={() => setToggle01((prev) => !prev)}>
        eee
      </Toggle>
    </Burger>
  );
}
