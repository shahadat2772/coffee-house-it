import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Coffee from "./components/Coffee/Coffee";
import Cart from "./components/Cart/Cart";

function App() {
  return (
    <div className="App max-w-7xl mx-auto">
      <Navbar />
      <Routes>
        <Route path="/" element={<Coffee />} />
        <Route path="/coffee" element={<Coffee />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
