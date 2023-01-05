import "./_login.scss";

const Login = () => {
  return (
    <div className="login">
      <div className="login__wrapper">
        <div className="login__left">
          <h3 className="login__logo">MySocial:)</h3>
          <span className="login__desc">
            Connect with friends and the world around you on MySocial:).
          </span>
        </div>
        <div className="login__right">
          <div className="login__box">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
              className="login__input"
            />
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Enter password"
              className="login__input"
            />
            <button className="login__button">Log in</button>
            <span className="login__forgot">Forgot Password?</span>
            <button className="login__register__button">
              Create a new account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
