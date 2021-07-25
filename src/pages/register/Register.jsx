import { useState } from "react";

import "./register.scss";
import logo from "../../images/logo.png";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link, useHistory } from "react-router-dom";
import { auth } from "../../auth/Firebase";

const Register = () => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [emailDone, setemailDone] = useState(false);

  const emailHandler = () => {
    setemailDone(true);
  };

  /// NEW USER REGISTRATION
  const registrationHandler = async (e) => {
    e.preventDefault();
    console.log(`Email: ${email}, Password: ${password}`);

    await auth
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        let user = userCredential.user;
        history.push("/login");
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
      });
  };

  return (
    <div className="register">
      <div className="register_header">
        <div className="header_left">
          <img src={logo} alt="logo" />
        </div>
        <div className="header_right">
          <Link className="login_link" to="/login">
            Sign-in
          </Link>
        </div>
      </div>
      <div className="register_content_wrapper">
        <div className="register_bg_wrapper">
          <img src="https://cutt.ly/dmBmqAo" alt="bg_image" />
          <div className="bg_gradient"></div>
        </div>
        <div className="register_content">
          <h1>Unlimited movies, TV shows and more.</h1>
          <h2>Watch anywhere. Cancel anytime.</h2>
          <div className="register_form">
            <h3>
              Ready to watch? Enter your email to create or restart your
              membership.
            </h3>

            {!emailDone ? (
              <div className="form_input_wrapper">
                <input
                  type="text"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  // ref={emailRef}
                />
                <button onClick={emailHandler}>
                  Get started{" "}
                  <span>
                    <MdKeyboardArrowRight />
                  </span>
                </button>
              </div>
            ) : (
              <form className="form_input_wrapper">
                <input
                  type="password"
                  placeholder="Create a strong password"
                  // ref={passwordRef}
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
                <button onClick={registrationHandler}>
                  Register now{" "}
                  <span>
                    <MdKeyboardArrowRight />
                  </span>
                </button>
              </form>
            )}

            {error ? <span>{error}</span> : ""}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
