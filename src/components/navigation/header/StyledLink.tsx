// styles
import classnames from "classnames";
// utils
import Link from "next/link";
// components

const StyledLink = ({
  href,
  children,
  variant,
  className,
}: {
  href: string;
  children: any;
  variant?: "selected" | "unselected" | "icon";
  className?: string;
}) => {
  return (
    <Link
      href={href}
      className={classnames(
        "m-2 p-2 px-4 rounded-badge justify-center items-center flex text-xl",
        "tracking-widest",
        // {
        //   "bg-base-100 text-base-content":
        //     variant !== "selected" && variant !== "icon",
        // },
        { "bg-primary text-primary-content": variant === "selected" },
        { "": variant === "icon" },
        className,
      )}
    >
      {children}
    </Link>
  );
};

export default StyledLink;
