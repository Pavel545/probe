import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import { PURCHASES } from "./constants";
import Cart from "./pages/Cart";
import Main from "./pages/Main";
import Order from "./pages/Order";

export const AppRoutes = () => {
  const [cart, setCart] = useState();

  function add(cart) {
    return {
      id: cart,
      quantity: 1,
    };
  }
  useEffect(() => {
    if (cart) {
      PURCHASES[PURCHASES.length] = add(cart);
      console.log(PURCHASES);
    }
  });
  return (
    <Routes>
      <Route
        path="/"
        element={
          <div>
            <Header />
            <Main setCart={setCart} />
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
