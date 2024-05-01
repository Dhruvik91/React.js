import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  useLocation,
  Routes,
  Navigate,
} from "react-router-dom";

function ScrollRestoration() {
  const location = useLocation();
  const [scrollPositions, setScrollPositions] = useState<any>({});

  useEffect(() => {
    const handleScroll = () => {
      setScrollPositions((prevPositions: any) => ({
        ...prevPositions,
        [location.pathname]: window.scrollY,
      }));
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [location.pathname]);

  useEffect(() => {
    const newPathname = location.pathname;
    if (scrollPositions[newPathname] !== undefined) {
      window.scrollTo(0, scrollPositions[newPathname]);
    } else {
      window.scrollTo(0, 0);
    }
  }, [location.pathname, scrollPositions]);

  return null;
}

function Home() {
  return (
    <div style={{ height: "2000px" }}>
      <h1>Home</h1>
    </div>
  );
}

function About() {
  return (
    <div style={{ height: "2000px" }}>
      <h1>About</h1>
    </div>
  );
}

function App() {
  return (
    <Router>
      <ScrollRestoration />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* Add other routes here */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
