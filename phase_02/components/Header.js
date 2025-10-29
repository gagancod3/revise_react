import { useState } from "react";
import { LOGO_URL } from "../utils/common_url";
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
          <li>Home</li>
          <li>About</li>
          <li>Cart</li>
          <button className="login-btn"  onClick={() => loginBtn === 'Login' ? setLoginBtn('Logout'): setLoginBtn('Login')}>{loginBtn}</button>
        </ul>
      </div>
    </div>
  );
};

export default Header;