import * as S from "./style";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <S.Headers>
      <NavLink to="/"><img src="https://loon.site/a1d13948-4b83-418a-8d9f-ec658d315e27" /></NavLink>
      <S.BoxLink>
        <div>
          <NavLink   to="/order"><S.Link>Оплата</S.Link> </NavLink>
        </div>
        <div>
          <NavLink to="/cart"><S.Link>Корзина</S.Link> </NavLink>
        </div>
      </S.BoxLink>
    </S.Headers>
  );
}
export default Header
