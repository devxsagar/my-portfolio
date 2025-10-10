import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Outlet, useLocation } from "react-router-dom";
import ReactLenis from "lenis/react";

const App = () => {
  const location = useLocation();

  // Add routes where you DON'T want Navbar
  const hideNavbarRoutes = ["/about-me"];

  const shouldHideNavbar = hideNavbarRoutes.includes(location.pathname);

  return (
    <ReactLenis
      root
      options={{
        lerp: 0.08,
      }}
    >
      <div className="relative min-h-screen max-w-screen bg-bg-primary  font-suisse-regular">
        {!shouldHideNavbar && <Navbar />}
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </ReactLenis>
  );
};

export default App;
