import { useEffect } from "react";
import { useState } from "react";
import { beer } from "../../components/Bd/beer";
import Product from "../../components/product";
import * as S from "./style";

import { useSelector } from "react-redux";
import {todosSelector} from "../../store/selectors/todo"
import { NEXT_ID } from "../../constants";



function Cart() {
  const cartProduct = useSelector(todosSelector)
  
  const not = () => {};
  const [quantity, setQuantity] = useState('');
  useEffect(() => {
    if (quantity||quantity===0) {
      
      setQuantity()
      
    }
  });
  
  
  return (
    <S.Gallery>
      {cartProduct.length === 0 ? <S.Text>Тут ещё нечего нет...</S.Text>:
      beer.map((beers, key) =>
        cartProduct.map((element, index) =>
          beers.id === element.content ? (
            <Product
              id={NEXT_ID[index]+1}
              key={key}
              img={beers.image_url}
              name={beers.name}
              text={beers.tagline}
              text_strength={beers.abv}
              textButton={"Удалить из корзины"}
            />
          ) : (
            not
          )
        )
      )}
      
    </S.Gallery>
  );
}
export default Cart;
