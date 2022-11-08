import { PURCHASES } from "../../constants";
import * as S from "./style";

function Buyer(params) {
  return (
    <S.Buyers>
        <S.Form>
      <h3 className="cart__form_header">Оформление заказа</h3>
      <S.FormInput
        placeholder="Имя Фамилия"
        type="text"
      />
      <S.FormInput
        placeholder="+ 7 904 000 80 80"
        type="text"
      />
      <div>
        <S.FormInput
          placeholder="Адрес доставки"
          type="text"
        />
        <button>🌍</button>
      </div>
      <div className="cart__form_text-box">
        <p className="cart__form_text">Итого: </p>
        <p className="name_product">{PURCHASES.length} нименований </p>
      </div>
      <button className="cart__form_butt">Оформить заказ</button>
    </S.Form>
    </S.Buyers>
  );
}
export default Buyer;
