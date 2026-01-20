import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'

import Home from './pages/Home'
import Navbar from "./component/layout/Navbar";
import Projects from "./pages/Projects";
import Communities from "./pages/Communities";
import Blogs from "./pages/Blogs";
import Developers from "./pages/Developers";
import Explore from "./pages/Explore";
import Enquire from "./pages/Enquire";
import Footer from "./component/layout/Footer";

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/communities" element={<Communities />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/developers" element={<Developers />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/enquire" element={<Enquire />} />
        </Routes>

        <Footer/>
      </BrowserRouter>

    </>
  );
}

export default App
