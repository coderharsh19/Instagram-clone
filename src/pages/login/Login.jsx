import { useState, useEffect } from "react";
import logo from "../../images/logo.png";

import { Link, useHistory } from "react-router-dom";
import { auth } from "../../auth/Firebase";

import "./login.scss";

const Login = () => {
  // const user = useSelector(selectUser);
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  // console.log(user);

  /// Redirect to homepage if user is logged in
  useEffect(() => {
    if (localStorage.getItem("user")) {
      history.push("/browse");
    }
  }, []);

  const loginHandler = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then((req) => {
        const user = req.user;
        localStorage.setItem("user", JSON.stringify(user));
        setEmail("");
        setPassword("");
        setError(null);
        history.push("/browse");
      })
      .catch((error) => {
        setPassword("");
        setError(error.message);
      });
  };

  return (
    <div className="login">
      <div className="login_header">
        <div className="header_left">
          <Link to="/register">
            <img src={logo} alt="logo" className="logo" />
          </Link>
        </div>
      </div>
      <div className="login_content_wrapper">
        <div className="login_bg_wrapper">
          <img src="https://cutt.ly/dmBmqAo" alt="bg_image" />
          <div className="bg_gradient"></div>
        </div>
        <div className="login_form_wrapper">
          <div className="login_form_top">
            <h1>Sign in</h1>
            <form>
              <div className="input_container">
                <input
                  className="email_input"
                  type="email"
                  value={email}
                  placeholder="Enter your email address"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </div>
              <div className="input_container">
                <input
                  className="password_input"
                  type="password"
                  value={password}
                  placeholder="Enter your password"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
                {error ? <span>{error}</span> : ""}
              </div>

              <button type="submit" onClick={loginHandler}>
                Sign in
              </button>
            </form>
          </div>
          <div className="login_form_bottom">
            <div className="signUp_redirect">
              <span>New to Netflix ?</span> <Link to="/">Sign up now</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
