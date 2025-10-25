import { LOGO_URL } from "../utils/common_url";
//* Header
const Header = () => {
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
        </ul>
      </div>
    </div>
  );
};

export default Header;