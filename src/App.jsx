import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";
import ReactLenis from "lenis/react";
import { useEffect } from "react";
import { clarity } from "react-microsoft-clarity";
import ScrollToTop from "./components/ScrollToTop";

const App = () => {
  useEffect(() => {
    if (process.env.NODE_ENV === "production") {
      clarity.init("txso389rbt");
    }
  }, []);

  return (
    <ReactLenis
      root
      options={{
        lerp: 0.08,
      }}
    >
      <div className="relative min-h-screen max-w-screen bg-bg-primary  font-satoshi">
        <ScrollToTop />
        <Navbar />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </ReactLenis>
  );
};

export default App;
