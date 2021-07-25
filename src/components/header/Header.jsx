import { Link } from "react-router-dom";
import { useState } from "react";
import { withRouter, useHistory } from "react-router-dom";

import { BiSearch } from "react-icons/bi";
import { IoMdNotifications, IoMdArrowDropdown } from "react-icons/io";

import logo from "../../images/logo.png";

import "./header.scss";
import { auth } from "../../auth/Firebase";
import { selectUser } from "../../redux/userSlice";
import { useSelector } from "react-redux";

const Header = () => {
  const user = useSelector(selectUser);
  const history = useHistory();
  const [isScrolled, setIsScrolled] = useState(false);

  const logoutHandler = async () => {
    try {
      await auth.signOut();
      localStorage.removeItem("user");

      console.log("Signout successful");

      history.push("/login");
    } catch (error) {
      throw error;
    }
  };

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };

  return (
    <div className={isScrolled ? "header scroll" : "header"}>
      <div className="container">
        <div className="h_left">
          <Link to="/">
            <img src={logo} alt="logo" className="logo" />
          </Link>

          <ul className="p_menu">
            <li className="p_menu_items">
              <Link className="link" to="/">
                Home
              </Link>
            </li>
            <li className="p_menu_items">
              <Link className="link" to="/movies">
                Movies
              </Link>
            </li>
            <li className="p_menu_items">
              <Link className="link" to="/series">
                Tv shows
              </Link>
            </li>
            {/*<li className="p_menu_items">
              <Link className="link" to="popular">
                New & Popular
              </Link>
              </li>*/}
          </ul>
        </div>
        <div className="h_right">
          {/*<BiSearch className="icon searchIcon" />*/}
          <span style={{ textTransform: "capitalize" }}>
            Welcome <span style={{ textTransform: "capitalize" }}></span>
          </span>
          {/*<IoMdNotifications className=" icon notificationIcon" />*/}

          <div className="dropDown">
            <IoMdArrowDropdown className="icon arrowIcon" />
            <div className="options">
              <Link to="/profile">Profile</Link>
              <span onClick={logoutHandler}>Logout</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(Header);
