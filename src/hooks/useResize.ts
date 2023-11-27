"use client";
import React, { useEffect, useState } from "react";

export const resizeOption = {
  mobileBreak: 800,
} as { [key: string]: number };

export const useResize = (elementRef: React.RefObject<HTMLElement>) => {
  const [width, setWidth] = useState<number>(0);
  const [height, setHeight] = useState<number>(0);

  const handleChange = () => {
    if (elementRef) {
      setWidth(
        elementRef.current?.clientWidth ? elementRef.current?.clientWidth : 0,
      );
      setHeight(
        elementRef.current?.clientHeight ? elementRef.current?.clientHeight : 0,
      );
    } else {
      setWidth(0);
      setHeight(0);
    }
  };

  useEffect(() => {
    handleChange();
    window.addEventListener("resize", handleChange);
    return () => {
      window.removeEventListener("resize", handleChange);
    };
  });

  const breakDecider = (_width: number) => {
    return width < _width;
  };

  return { width, height, breakDecider };
};

export function useUnitedResize(
  widthOption: string,
  elementRef: React.RefObject<HTMLElement>,
) {
  const { breakDecider, width, height } = useResize(elementRef);
  return {
    isBreak: breakDecider(resizeOption[widthOption]),
    width: width,
    height: height,
  };
}

export default useResize;
