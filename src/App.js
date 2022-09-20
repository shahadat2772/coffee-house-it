import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Coffee from "./components/Coffee/Coffee";
import Cart from "./components/Cart/Cart";
import { useState } from "react";

function App() {
  const [cart, setCart] = useState([]);

  return (
    <div className="App max-w-7xl mx-auto">
      <Navbar />
      <Routes>
        <Route path="/" element={<Coffee />} />
        <Route
          path="/coffee"
          element={<Coffee cart={cart} setCart={setCart} />}
        />
        <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />
      </Routes>
    </div>
  );
}

export default App;
