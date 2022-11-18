import { useEffect } from "react";
import { useState } from "react";
import Product from "../../components/product";
import * as S from "./style";
import { useDispatch, useSelector } from "react-redux";
import {todosSelector} from "../../store/selectors/todo"
import { fetchCart } from "../../store/actions/thunk/todo";



function Cart() {
  const cartProduct = useSelector(todosSelector)
  const dispatch= useDispatch()
  const [changes, vacChanges]= useState(true)
  
  
  useEffect(() => {
    if (changes === true) {
      dispatch(fetchCart())
      vacChanges(false)
    }
  });
  console.log(cartProduct);
  
  return (
    <S.Gallery>
      {cartProduct[0] === undefined ? <S.Text>Тут ещё нечего нет...</S.Text>:
      cartProduct.map((element, index) =>
      
        <Product
          id={element.id}
          key={index}
          img={element.title.image_url}
          name={element.title.name}
          text={element.title.tagline}
          text_strength={element.title.abv}
          vacChanges={vacChanges}
          textButton={"Удалить из корзины"}
        />
    )}
      
    </S.Gallery>
  );
}
export default Cart;
