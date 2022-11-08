import { useState } from "react";
import Buyer from "../../components/Buyer";
import Credit from "../../components/CreditСard";

import * as S from "./style";
function Order() {
  const [tack, setTack] = useState(1);
  const none = () => {};
  function back() {
    return setTack(tack - 1);
  }
  function go() {
    return setTack(tack + 1);
  }
  return (
    <S.Box>
      <div>
        {tack === 1 ? <Buyer  /> : none}
        {tack === 2 ? <Credit /> : none}
      </div>
      <div>
        {tack !== 1 ? <S.Button onClick={back}>Назад</S.Button> : none}

        {tack !== 2 ? <S.Button onClick={go}>Далее</S.Button> : none}
      </div>
    </S.Box>
  );
}
export default Order;
