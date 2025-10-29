import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";
import ReactLenis from "lenis/react";
import CustomCursor from "./components/CustomCursor";

const App = () => {
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.08,
      }}
    >
      <div className="relative min-h-screen max-w-screen bg-bg-primary  font-suisse-regular">
        {/* <CustomCursor /> */}
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
