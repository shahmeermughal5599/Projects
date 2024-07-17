import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import About from "./Pages/About";
import CustomLayout from "./Component/CustomLayout";
import Login from "./Pages/Login";
import NotFound from "./Pages/NotFound";
import Product from "./Pages/Product";
import ProductDetail from "./Pages/ProductDetail";
import CustomLayout2 from "./Component/CustomLayout2";

function App() {
  const isUserIsLoggedIn = true;
  return (
    <BrowserRouter>
      <Routes>
        {isUserIsLoggedIn ? (
          <>
            <Route element={<CustomLayout />}>
              <Route path="/" element={<Home />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/about" element={<About />} />
              <Route path="/products" element={<Product />} />
            </Route>

            <Route element={<CustomLayout2 />}>
              <Route path="/products/:productId" element={<ProductDetail />} />
            </Route>
          </>
        ) : (
          <Route path="/" element={<Login />} />
        )}

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
