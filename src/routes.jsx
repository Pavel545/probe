import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "./store/actions/creators/todo";

import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Cart from "./pages/Cart";
import Main from "./pages/Main";
import Order from "./pages/Order";

export const AppRoutes = () => {
  const dispatch = useDispatch();

  const [cart, setCart] = useState();

  
  useEffect(() => {
    if (cart) {
      dispatch(addProduct(cart))
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
