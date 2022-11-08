import Product from "../../components/product";
import * as S from "./style";

import { beer } from "../../components/Bd/beer";
import { useState } from "react";
import { useEffect } from "react";

function Main(props) {
  const [data, setData] = useState([]);
  const [sortType, setSortType] = useState("");
  useEffect(() => {
    const sortArray = (type) => {
      const types = {
        id: "id",
        abv: "abv",
        name: "name",
      };
      const sortProperty = types[type];
      const sorted = beer.sort((a, b) => b[sortProperty] - a[sortProperty]);
      console.log(sorted);
      setData(sorted);
    };

    sortArray(sortType);
  }, [sortType]);

  return (
    <S.Main >
      <S.SelectBox>
        <S.Select onChange={(e) => setSortType(e.target.value)}>
          <option value="id">Порядок: всё</option>
          <option value="abv">Порядок: по крепости</option>
          <option value="name">Порядок: по названию</option>
        </S.Select>
      </S.SelectBox>

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
            textButton={"Добавить в корзину"}
          />
        ))}
      </S.Gallery>
    </S.Main>
  );
}
export default Main;
