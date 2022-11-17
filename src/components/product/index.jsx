import * as S from "./style";
import { useDispatch } from "react-redux";
import { removalProduct } from "../../store/actions/creators/todo";

function Product(props) {
  const dispatch = useDispatch();
  function addCart() {
    if (props.textButton === "Удалить из корзины") {
      dispatch(removalProduct(props.id));
      console.log(props.id);
    }
    if (props.textButton === "Добавить в корзину") {
      props.cart(props.id);
    }
  }
  return (
    <S.Cell>
      <S.Photo src={props.img}></S.Photo>
      <S.Name>{props.name}</S.Name>
      <S.Cell_op className="cell_op">
        <S.Text>{props.text}</S.Text>
        <S.Text_strength>{props.text_strength}</S.Text_strength>
      </S.Cell_op>
      <S.Button onClick={addCart}>{props.textButton}</S.Button>
    </S.Cell>
  );
}
export default Product;
