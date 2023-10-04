import { Link } from "react-router-dom";
import { signOutUser } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import logo from "../assets/img/logo.svg";
import checkoutIcon from "../assets/img/shopping-bag.svg";
import Search from "./Search";

const Header = ({ authUser, setAuthUser, cartCount }) => {
  const navigate = useNavigate();

  const signOut = () => {
    setAuthUser(null);
    signOutUser();
  };

  const routeChange = () => {
    let path = "/sign-in";
    navigate(path);
  };

  return (
    <div className="header">
      <div className="container">
        <Link to="/">
          <div className="header__logo">
            <img width="38" src={logo} alt="logo" />
            <div>
              <h1>SMART CANTEEN</h1>
              <p>recommended by our community</p>
            </div>
          </div>
        </Link>
        <Search />
        <div className="header__cart">
          <>
            {authUser ? (
              <p onClick={() => signOut()}>SIGN OUT</p>
            ) : (
              <p onClick={() => routeChange()}>SIGN IN</p>
            )}
          </>
          <Link to="/cart" className="checkout">
            <img
              width="23"
              src={checkoutIcon}
              alt="logo"
              className="checkout_img"
            />
            {cartCount}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
