import Home from "./components/sections/home";
import Navbar from "./components/sections/navbar";
import Wanderease from "./components/sections/wanderease";
import { ThemeProvider } from "./components/theme-provider";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToHashElement from "@cascadia-code/scroll-to-hash-element";

function App() {
  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <BrowserRouter>
          <ScrollToHashElement />
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="wanderease" element={<Wanderease />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
