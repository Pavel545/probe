

import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Cart from "./pages/Cart";
import Main from "./pages/Main";
import Order from "./pages/Order";

export const AppRoutes = () => {

  
  return (
    <Routes>
      <Route
        path="/"
        element={
          <div>
            <Header />
            <Main  />
            <Footer/>
          </div>
        }
      />
      <Route
        path="/cart"
        element={
          <div>
            <Header />
            <Cart/>
            <Footer/>
          </div>
        }
      />
      <Route
        path="/order"
        element={
          <div>
            <Header />
            <Order />
            <Footer/>
          </div>
        }
      />
    </Routes>
  );
};
