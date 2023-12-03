// Hooks
// Components
// Styles
import React, { ChangeEventHandler } from "react";
import classnames from "classnames";
// Utils

// Props type defination
interface Props {
  children: React.ReactNode;
  checked: boolean;
  onChange: ChangeEventHandler<HTMLInputElement>;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  color?: string;
  defaultColor?: string;
  circleColor?: string;
  labelClassName?: string;
  disabledColor?: string;
  togglePosition?: "left" | "right";
  disabled?: boolean;
}

/**
 * Toggle component
 */
const Toggle = ({
  children = "",
  checked = false,
  onChange = () => {},
  size = "md",
  color = "base-content",
  defaultColor = "base-200",
  circleColor = "base-100",
  disabledColor = "info",
  labelClassName = "",
  togglePosition = "right",
  disabled = false,
}: Props): JSX.Element => {
  const childContainer = () => {
    return (
      children && (
        <span
          className={classnames(
            "daisy-label-text grow",
            togglePosition === "right" ? "pr-2" : "pl-2",
            {
              "text-sm": size === "xs",
              "text-md": size === "sm",
              "text-lg": size === "md",
              "text-xl": size === "lg",
              "text-2xl": size === "xl",
            },
          )}
        >
          {children}
        </span>
      )
    );
  };

  return (
    <label
      className={classnames(
        "relative flex items-center justify-center",
        disabled ? "cursor-not-allowed" : "cursor-pointer",
        labelClassName,
      )}
    >
      {togglePosition === "right" && childContainer()}
      <input
        type="checkbox"
        className="peer sr-only"
        checked={checked}
        onChange={onChange}
        disabled={disabled}
      />
      <div
        className={classnames(
          "peer relative rounded-full",
          disabled ? "toggle-disabled" : "toggle",
          checked ? `bg-${color}` : `bg-${defaultColor}`,
          {
            "h-5 w-9 min-w-[2.25rem]": size === "xs",
            "h-6 w-11 min-w-[2.75rem]": size === "sm",
            "h-7 w-[3.25rem] min-w-[3.25rem]": size === "md",
            "h-8 w-[3.75rem] min-w-[3.75rem]": size === "lg",
            "h-9 w-[4.25rem] min-w-[4.25rem]": size === "xl",
          },
          "transition-colors",
        )}
      >
        <div
          className={classnames(
            "absolute rounded-full transition-all",
            { "translate-x-full": checked },
            checked
              ? disabled
                ? `bg-${disabledColor} border border-${circleColor}`
                : `bg-${circleColor}`
              : disabled
                ? `bg-${disabledColor} border border-${circleColor}`
                : `bg-${circleColor}`,
            {
              "left-0.5 top-0.5 h-4 w-4": size === "xs",
              "left-0.5 top-0.5 h-5 w-5": size === "sm",
              "left-0.5 top-0.5 h-6 w-6": size === "md",
              "left-0.5 top-0.5 h-7 w-7": size === "lg",
              "left-0.5 top-0.5 h-8 w-8": size === "xl",
            },
          )}
        ></div>
        <div
          className={classnames(
            "relative h-full w-full rounded-full transition-opacity",
            disabled ? `opacity-50 bg-${disabledColor}` : `opacity-0`,
          )}
        ></div>
      </div>
      {togglePosition === "left" && childContainer()}
    </label>
  );
};

export default Toggle;
