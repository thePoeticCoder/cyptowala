import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Coins from "./components/Coins";
import Home from "./components/Home";
import Exchange from "./components/Exchange";
import CoinDetails from "./components/CoinDetails";
import Header from "./components/Header";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/coins" element={<Coins />} />
        <Route path="/exchanges" element={<Exchange />} />
        <Route path="/coin/:id" element={<CoinDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
