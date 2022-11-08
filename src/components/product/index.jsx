import * as S from "./style";

function Product(props) {
  function addCart() {
    props.cart(props.id);
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
