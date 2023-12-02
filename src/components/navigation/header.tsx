// hooks
import { useUnitedResize, useCurrentPath } from "../../hooks";
import { useRef, useState } from "react";
// styles
import classnames from "classnames";
// utils
import Link from "next/link";
// components
import { Icon } from "@iconify/react";
import { Burger, Toggle } from "../basics";
import UserIcon from "../../assets/icon/user";
import DevUtils from "../DevPannel";

const StyledLink = ({
  href,
  children,
  variant,
}: {
  href: string;
  children: any;
  variant?: "selected" | "unselected" | "icon";
}) => {
  return (
    <Link
      href={href}
      className={classnames(
        "m-2 p-2 px-4 rounded-badge justify-center items-center flex text-xl",
        "transition-colors duration-300 ease-in-out",
        "tracking-widest",
        // {
        //   "bg-base-100 text-base-content":
        //     variant !== "selected" && variant !== "icon",
        // },
        { "bg-primary text-primary-content": variant === "selected" },
        { "": variant === "icon" },
      )}
    >
      {children}
    </Link>
  );
};

interface Props {
  mainGeometryShow?: {
    width: number;
    height: number;
  };
  outerRef?: React.MutableRefObject<HTMLDivElement | null>;
}

export default function Header({ mainGeometryShow, outerRef }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  // const isLogin = useAppSelector((state) => state.User.isLogin);
  const { width, height, isBreak } = useUnitedResize("mobileBreak", ref);
  const pathname = useCurrentPath();

  const [showGeometry, setShowGeometry] = useState(false);
  const [burgerOpen, setBurgerOpen] = useState(false);

  const [toggle01, setToggle01] = useState<boolean>(false);

  const DevGroup = () => (
    <>
      <DevUtils anchorRef={outerRef ? outerRef : ref} />
      {process.env.NODE_ENV === "development" && (
        <button onClick={() => setShowGeometry((prev) => !prev)}>
          <Icon icon="mdi:border-all-variant" className="text-3xl" />
        </button>
      )}
    </>
  );

  return (
    <header
      className={classnames(
        "flex flex-col w-full items-center justify-between",
        "border-4 border-green-500",
      )}
      ref={ref}
    >
      {isBreak ? (
        <div className="flex w-full justify-between h-16">
          <Burger
            open={burgerOpen}
            burgerButton={(open) => <Icon icon="fe:bar" className="text-3xl" />}
            setOpen={setBurgerOpen}
            burgerButtonClassName="w-12 flex justify-center items-center"
            className={classnames(
              { "bg-base-content text-base-100": pathname !== "profile" },
              { "bg-base-100 text-base-content": pathname === "profile" },
            )}
            disableBackdropClose={false}
          >
            <Toggle
              checked={toggle01}
              onChange={() => setToggle01((prev) => !prev)}
            />
          </Burger>
          <div className="header-links grow justify-center flex">
            <DevGroup />
          </div>
          <StyledLink href="/profile">
            {/* <Icon icon="mdi:user" className="text-3xl" /> */}
            <UserIcon className="text-4xl" />
          </StyledLink>
          {/* Dev */}
        </div>
      ) : (
        <div className="flex w-full justify-between h-16">
          <StyledLink href="/">GDSC</StyledLink>
          <div className="header-links grow space-x-2 flex justify-center">
            <StyledLink
              variant={pathname == "attend" ? "selected" : "unselected"}
              href="/attend"
            >
              簽到
            </StyledLink>
            <StyledLink
              variant={pathname == "myprojects" ? "selected" : "unselected"}
              href="/myprojects"
            >
              我的專案
            </StyledLink>
            <StyledLink
              variant={pathname == "form" ? "selected" : "unselected"}
              href="/form"
            >
              社團表單
            </StyledLink>
            <StyledLink href="/">
              <Icon className="text-3xl" icon="fe:home" />
            </StyledLink>
            <DevGroup />
          </div>
          <StyledLink href="/profile">
            {/* <Icon icon="mdi:user" className="text-3xl" /> */}
            <UserIcon className="text-4xl" />
          </StyledLink>
        </div>
      )}

      {process.env.NODE_ENV === "development"
        ? showGeometry && (
            <div>
              <p>
                I am navbar. w:{width}/h:{height}/curpath:{pathname}/devicetype:
                {isBreak ? "mobile" : "desktop"}
              </p>
              <p>
                mainGeometry: {mainGeometryShow?.width}x
                {mainGeometryShow?.height}
              </p>
            </div>
          )
        : ""}
    </header>
  );
}
