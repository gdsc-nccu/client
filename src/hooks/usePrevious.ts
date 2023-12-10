import { useRef, useEffect } from "react";

function usePrevious(value: any) {
  const previousValueRef = useRef<any>();

  useEffect(() => {
    previousValueRef.current = value;
  }, [value]);

  return previousValueRef.current;
}

export default usePrevious;
