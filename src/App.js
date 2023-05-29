import Home from "./Pages/Home";
import { Route, Routes } from "react-router-dom";
import PricePage from "./Pages/PricePage";
import GalleryPage1 from "./Pages/Gallery/GalleryPage1";
import GalleryPage2 from "./Pages/Gallery/GalleryPage2";
import Navbar from "./components/NavBar/Navbar";
import Gallery from "./Pages/Gallery/Gallery";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"pricing"} element={<PricePage />} />

        <Route path="gallery" element={<Gallery />}>
          <Route path="page-1" element={<GalleryPage1 />} />
          <Route path="page-2" element={<GalleryPage2 />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
