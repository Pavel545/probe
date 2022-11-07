import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import { purchases } from "./constants";
import Cart from "./pages/Cart";
import Main from "./pages/Main";
import Order from "./pages/Order";

export const AppRoutes = () => {
  const [cart, setCart] = useState();

  function add(car) {
    return {
      id: cart,
      quantity: 1,
    };
  }
  useEffect(() => {
    if (cart) {
      purchases[purchases.length] = add(cart);
      console.log(purchases);
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
