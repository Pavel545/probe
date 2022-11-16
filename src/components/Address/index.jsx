import { PURCHASES } from "../../constants";
import * as S from "./style";

function Address(params) {
 
  return (
    <S.Buyers>
      <S.Form onSubmit={params.go} >
        <h3 className="cart__form_header">Укажите адреса</h3>
        
        <S.FormInput
          required
          placeholder="г. Москва..."
          type="number"
          minLength={11}
        />
        <S.Buttons  className="cart__form_butt">
          Готово
        </S.Buttons>
      </S.Form>
    </S.Buyers>
  );
}
export default Address;
