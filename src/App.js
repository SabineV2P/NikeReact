import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./comp/Navbar";
import Home from "./comp/Home";
import Services from "./comp/Services";
import Products from "./comp/Products";
import Contact from "./comp/Contact";
import Footer from "./comp/Footer";
import SingleProduct from "./comp/SingleProduct";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/product/:id" element={<SingleProduct />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
