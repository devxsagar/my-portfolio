import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    // this runs BEFORE the browser paints the new route
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
