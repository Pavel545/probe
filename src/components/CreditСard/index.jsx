import { useState } from "react";
import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";
import * as S from "./style";

function Credit(params) {
  const [cvc, setCvc] = useState("");
  const [expiry, setExpiry] = useState("");
  const [focus, setFocus] = useState("");
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  return (
    <div>
      <Cards
        number={number}
        name={name}
        expiry={expiry}
        cvc={cvc}
        focused={focus}
      />
      <S.Form onSubmit={params.go}>
        <input
          required
          type="tel"
          name="number"
          placeholder="Card Number"
          value={number}
          minLength={16}
          maxLength={16}
          onChange={(e) => setNumber(e.target.value)}
          onFocus={(e) => setFocus(e.target.setName)}
        />
        <input
          required
          type="text"
          name="name"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          onFocus={(e) => setFocus(e.target.setName)}
        />
        <input
          required
          type="text"
          name="expire"
          placeholder="MM/YY Expire"
          value={expiry}
          onChange={(e) => setExpiry(e.target.value)}
          onFocus={(e) => setFocus(e.target.setName)}
        />
        <input
          required
          type="tel"
          name="cvc"
          placeholder="CVC"
          minLength={3}
          maxLength={3}
          value={cvc}
          onChange={(e) => setCvc(e.target.value)}
          onFocus={(e) => setFocus(e.target.setName)}
        />
        <button> Оформить заказ</button>
      </S.Form>
    </div>
  );
}

export default Credit;
