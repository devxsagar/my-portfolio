import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home"
import Projects from "./pages/Projects"
import AboutMe from "./pages/AboutMe"
import Blogs from "./pages/Blogs";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {path: "/", element: <Home />},
            {path: "/projects", element: <Projects />},
            {path: "/about-me", element: <AboutMe />},
            {path: "/blogs", element: <Blogs />}
        ]
    }
])

export default router;