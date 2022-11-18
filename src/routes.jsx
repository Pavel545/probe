

import { Routes, Route } from "react-router-dom";
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
          </div>
        }
      />
      <Route
        path="/cart"
        element={
          <div>
            <Header />
            <Cart/>
          </div>
        }
      />
      <Route
        path="/order"
        element={
          <div>
            <Header />
            <Order />
          </div>
        }
      />
    </Routes>
  );
};
