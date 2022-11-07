import * as S from "./style";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <S.Headers>
      <NavLink to="/"><p>🍺</p></NavLink>
      <div>
        <div>
          <NavLink to="/order">Оплата</NavLink>{" "}
        </div>
        <div>
          <NavLink to="/cart">Корзина</NavLink>
        </div>
      </div>
    </S.Headers>
  );
}
export default Header
