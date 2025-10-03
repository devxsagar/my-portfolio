import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <div className="min-h-screen max-w-screen bg-bg-primary  font-suisse-regular">
      <Navbar />
      <main>
        <Outlet />
      </main>
      {/* <Footer /> */}
    </div>
  );
};

export default App;
