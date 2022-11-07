import Product from "../../components/product";
import * as S from "./style";

import { beer } from "../../components/Bd/beer";

function Main(props) {
  
  return (
    <S.Main>
      <S.Gallery>
        {beer.map((element, index) => (
          <Product
            id={element.id}
            key={index}
            img={element.image_url}
            name={element.name}
            text={element.tagline}
            text_strength={element.abv}
            cart={props.setCart}
            textButton={'Добавить в корзину'}
          />
        ))}
      </S.Gallery>
    </S.Main>
  );
}
export default Main;
