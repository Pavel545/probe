import * as S from "./style";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchCart } from "../../store/actions/thunk/todo";

function Header() {
  const dispatch=useDispatch()

  function cart() {
    dispatch(fetchCart())
    
  }
  return (
    <S.Headers>
      <NavLink to="/"><S.Logo/></NavLink>
      <S.BoxLink>
        <div>
          <NavLink   to="/order"><S.Link>Оплата</S.Link> </NavLink>
        </div>
        <div>
          <NavLink to="/cart" onClick={cart}><S.Link>Корзина</S.Link> </NavLink>
        </div>
      </S.BoxLink>
    </S.Headers>
  );
}
export default Header
