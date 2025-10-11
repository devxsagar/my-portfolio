import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";
import ReactLenis from "lenis/react";

const App = () => {
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.08,
      }}
    >
      <div className="relative min-h-screen max-w-screen bg-bg-primary  font-suisse-regular">
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
