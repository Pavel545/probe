import Buyer from "../../components/Buyer";
import Credit from "../../components/CreditСard";
import * as S from "./style";
let tack = 2;
function Order() {
  
  const none = () => {};
  function goTack() {
    tack++
    console.log("go");
  }
  return (
    <div>
      <div>
        {tack === 1 ? <Buyer /> :  none }
        {tack === 2 ? <Credit /> :  none }
      </div>
      <div>
        <button onClick={goTack}>Далее</button>
      </div>
    </div>
  );
}
export default Order;
