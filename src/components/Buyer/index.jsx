import * as S from "./style";

function Buyer(params) {
 
  return (
    <S.Buyers>
      <S.Form onSubmit={params.go} >
        <h3 className="cart__form_header">Оформление заказа</h3>
        <S.FormInput
          required
          placeholder="Имя"
          type="text"
        />
        <S.FormInput
          required
          placeholder="Фамилия"
          type="text"
        />
        <S.FormInput
          required
          placeholder="+ 7 904 000 80 80"
          type="number"
          minLength={11}
        />
        
        <div className="cart__form_text-box">
          <p className="cart__form_text">Итого: </p>
          <p className="name_product">{} нименований </p>
        </div>
        <S.Buttons  className="cart__form_butt">
          Данные карты..
        </S.Buttons>
      </S.Form>
    </S.Buyers>
  );
}
export default Buyer;
