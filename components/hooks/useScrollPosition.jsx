import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function useScrollPosition() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const router = useRouter();

  useEffect(() => {
    const savedScrollPosition = scrollPosition;
    if (scrollPosition > 0) {
      window.scrollTo({
        top: savedScrollPosition,
        behavior: "instant",
      });
    }
    setScrollPosition(0);
  }, [router.asPath]);
  return setScrollPosition;
}
