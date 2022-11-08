import { PURCHASES } from "../../constants";
import * as S from "./style";

function Buyer(params) {
 
  return (
    <S.Buyers>
      <S.Form onSubmit={params.go} >
        <h3 className="cart__form_header">Оформление заказа</h3>
        <S.FormInput
          required
          placeholder="Имя Фамилия"
          type="text"
          cols="30"
          rows="10"
          minLength={5}
        />
        <S.FormInput
          required
          placeholder="+ 7 904 000 80 80"
          type="number"
          minLength={11}
        />
        <div>
          <S.FormInput
            required
            placeholder="Адрес доставки"
            type="text"
          />
          <button>🌍</button>
        </div>
        <div className="cart__form_text-box">
          <p className="cart__form_text">Итого: </p>
          <p className="name_product">{PURCHASES.length} нименований </p>
        </div>
        <button  className="cart__form_butt">
          Оформить заказ
        </button>
      </S.Form>
    </S.Buyers>
  );
}
export default Buyer;
