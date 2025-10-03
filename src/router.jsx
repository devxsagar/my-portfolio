import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home"
import Projects from "./pages/Projects"
import AboutMe from "./pages/AboutMe"

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {path: "/", element: <Home />},
            {path: "/projects", element: <Projects />},
            {path: "/about-me", element: <AboutMe />}
        ]
    }
])

export default router;