import { useEffect } from "react";
import { useState } from "react";
import { beer } from "../../components/Bd/beer";
import Product from "../../components/product";
import * as S from "./style";
import { useSelector } from "react-redux";
import {todosSelector} from "../../store/selectors/todo"



function Cart() {
  const cartProduct = useSelector(todosSelector)
  
  
  
  useEffect(() => {
  });
  console.log(cartProduct);
  
  return (
    <S.Gallery>
      {cartProduct[0] === undefined ? <S.Text>Тут ещё нечего нет...</S.Text>:
      cartProduct.map((element, index) =>
      
        <Product
          id={element.title.id}
          key={index}
          img={element.title.image_url}
          name={element.title.name}
          text={element.title.tagline}
          text_strength={element.title.abv}
          textButton={"Удалить из корзины"}
        />
    )}
      
    </S.Gallery>
  );
}
export default Cart;
