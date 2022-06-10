import { useState, useEffect } from "react";

const useScrollPosition = () => {
  const [scrollTop, setScrollTop] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      setScrollTop(window.scrollY);
    };
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll, true);
    };
  }, [scrollTop]);

  return scrollTop;
};

export default useScrollPosition;
