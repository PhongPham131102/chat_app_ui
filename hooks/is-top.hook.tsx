import { useEffect, useState } from "react";

export default function useIsTop(offset: number = 0) {
  const [isTop, setIsTop] = useState(true);

  useEffect(() => {
    const sentinel = document.createElement("div");
    document.body.prepend(sentinel);

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsTop(entry.isIntersecting);
      },
      { threshold: 1 },
    );

    observer.observe(sentinel);

    return () => {
      observer.disconnect();
      sentinel.remove();
    };
  }, []);

  return isTop;
}
