import * as S from "./style";
import { useDispatch } from "react-redux";
import { createCart } from "../../store/actions/thunk/todo";

function Product(props) {
  const dispatch = useDispatch();
  function addCart() {
    const el =()=>{
      return{
        id:props.id,
        image_url: props.img,
        name:props.name,
        tagline:props.text,
        abv:props.text_strength,
      }
    }
    if (props.textButton === "Удалить из корзины") {
      console.log(props.id);
    }
    if (props.textButton === "Добавить в корзину") {
      dispatch(createCart(el()))

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
