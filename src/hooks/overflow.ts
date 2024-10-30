import React from "react";

export function useOverflown(ref: React.RefObject<HTMLDivElement>) {
  const [isOverflown, setIsOverflown] = React.useState(false);

  const inputListener = React.useCallback((e: Event) => {
    const target = e.target as HTMLInputElement;
    if (target.scrollWidth > target.clientWidth) {
      setIsOverflown(true);
    } else {
      setIsOverflown(false);
    }
  }, []);

  React.useEffect(() => {
    if (ref.current === null) return;
    ref.current.addEventListener('input', inputListener);
    return () => {
      ref.current?.removeEventListener('input', inputListener);
    };
  }, [ref]);
  return isOverflown;
}