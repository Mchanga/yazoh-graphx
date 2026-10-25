import Header from "./components/Header.jsx";
import Home from "./components/Home.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import ServicesPage from "./pages/ServicesPage.jsx";
import ProjectsPage from "./pages/ProjectsPage.jsx";
import GraphicsPage from "./pages/GraphicsPage.jsx";
import MotionPage from "./pages/MotionPage.jsx";
import BrandingPage from "./pages/BrandingPage.jsx";
import VideoPage from "./pages/VideoPage.jsx";
import MediaPage from "./pages/MediaPage.jsx";
import BehindScenesPage from "./pages/BehindScenesPage.jsx";
import TutorialsPage from "./pages/TutorialsPage.jsx";
import ShopPage from "./pages/ShopPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import SpeakingPage from "./pages/SpeakingPage.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";
import "./App.css";

const pages = {
  "/": Home,
  "/about": AboutPage,
  "/services": ServicesPage,
  "/projects": ProjectsPage,
  "/projects/graphics": GraphicsPage,
  "/projects/motion": MotionPage,
  "/projects/branding": BrandingPage,
  "/projects/video": VideoPage,
  "/media": MediaPage,
  "/media/behind-the-scenes": BehindScenesPage,
  "/media/tutorials": TutorialsPage,
  "/shop": ShopPage,
  "/contact": ContactPage,
  "/speaking": SpeakingPage,
};

function App() {
  const pathname = window.location.pathname.replace(/\/+$/, "") || "/";
  const CurrentPage = pages[pathname] || NotFoundPage;

  return (
    <>
      <Header />
      <CurrentPage />
    </>
  );
}

export default App;
