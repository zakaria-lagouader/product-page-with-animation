import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import CartPage from "./pages/CartPage";
import ProductPage from "./pages/ProductPage";

function App() {
  return (
    <div className="min-h-screen bg-white">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/product-page-with-animation">
            <Route index element={<ProductPage />} />
            <Route path="cart" element={<CartPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
