import { useEffect } from "react";
import { useState } from "react";
import { beer } from "../../components/Bd/beer";
import Product from "../../components/product";
import { PURCHASES } from "../../constants";
import * as S from "./style";

function Cart() {
  const not = () => {};
  const [quantity, setQuantity] = useState();
  useEffect(() => {
    if (quantity || quantity===0) {
      PURCHASES.splice(quantity,1);
      console.log(quantity);
      console.log(PURCHASES);

      setQuantity(undefined)
    }
  });
  return (
    <S.Gallery>
      {PURCHASES.length === 0 ? <S.Text>Тут ещё нечего нет...</S.Text>:beer.map((beers, key) =>
        PURCHASES.map((element, index) =>
          beers.id === element.id ? (
            <Product
              id={index}
              key={key}
              img={beers.image_url}
              name={beers.name}
              text={beers.tagline}
              text_strength={beers.abv}
              cart={setQuantity}
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
