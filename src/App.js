import Navbar from "./components/Nav/Navbar";
import Home from "./Pages/Home";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path={"/"} element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
