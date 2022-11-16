import * as S from "./style";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <S.Headers>
      <NavLink to="/"><S.Logo/></NavLink>
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
