

 function Buyer(params) {
    return(
        <div className="cart__form">
            <h3 className="cart__form_header">Оформление заказа</h3>
            <input placeholder="Имя Фамилия" className="cart__form_input" type="text"/>
            <input placeholder="+ 7 904 000 80 80" className="cart__form_input" type="text"/>
            <input placeholder="Адрес доставки" className="cart__form_input" type="text"/>
            <div className="cart__form_text-box">
                <p className="cart__form_text">Итого: </p>
                <p className="name_product">128 000 руб.</p>
            </div>
            <button className="cart__form_butt">Оформить заказ</button>
        </div>
    )
}
export default Buyer