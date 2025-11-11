import { useState, useContext } from "react";
import { LOGO_URL } from "../utils/common_url";
import { Link } from "react-router";
import UserContext from "../utils/UserContext";

//* Header
const Header = () => {
  const [loginBtn, setLoginBtn] = useState('Login');

  //* Array destructuring the context object to access value easily
  const {userName} = useContext(UserContext);

  // console.log(userName, 'user');

  //* In case we don't want to use array-destructuring
  // const userObj = useContext(UserContext);
  // console.log(userObj.userName, 'userName');

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
          <h3>{userName}</h3>
          <button className="login-btn"  onClick={() => loginBtn === 'Login' ? setLoginBtn('Logout'): setLoginBtn('Login')}>{loginBtn}</button>
        </ul>
      </div>
    </div>
  );
};

export default Header;