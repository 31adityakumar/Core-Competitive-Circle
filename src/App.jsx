import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Team from "./Pages/Team/Team";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
function App() {
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} key="route-home-screen" />
          <Route exact path="/team" element={<Team />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
