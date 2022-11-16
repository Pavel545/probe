import { useState } from "react";
import Address from "../../components/Address";
import Buyer from "../../components/Buyer";
import Credit from "../../components/CreditСard";
import { Final } from "../../components/Finall/input";

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
        {tack === 1 ? <Buyer go={go} /> : none}
        {tack === 2 ? <Credit go={go} /> : none}
        {tack === 3 ? <Address go={go}/>: none}
        {tack === 4 ? <Final/>: none}
        {tack === 5 ? window.location.href = '/': none}


      </div>
      <S.ButtonBox>
        {tack ===2||tack ===3 ? <S.Button onClick={back}>Назад</S.Button> : none}

        {tack === 3 ? <S.Button onClick={go}>Далее</S.Button> : none}
      </S.ButtonBox>
    </S.Box>
  );
}
export default Order;
