import { useState } from "react";
import { LOGO_URL } from "../utils/common_url";
import { Link } from "react-router";
//* Header
const Header = () => {
  const [loginBtn, setLoginBtn] = useState('Login');
  return (
    <div className="header">
      <div id="logo">
        <img
          src={LOGO_URL}
          alt="logo"
        />
      </div>
      <div>
        <ul id="headerList">
          <Link to={'/'}>Home</Link>
          <Link to={'/about'}>About</Link>
          <Link to={'/contact'}>Contact</Link>
          <button className="login-btn"  onClick={() => loginBtn === 'Login' ? setLoginBtn('Logout'): setLoginBtn('Login')}>{loginBtn}</button>
        </ul>
      </div>
    </div>
  );
};

export default Header;