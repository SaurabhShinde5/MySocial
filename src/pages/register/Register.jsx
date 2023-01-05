const Register = () => {
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
              type="text"
              name="username"
              placeholder="Enter username"
              className="login__input"
            />
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="login__input"
            />
            <input
              type="password"
              name="password"
              placeholder="Enter password"
              className="login__input"
            />
            <input
              type="password"
              name="password"
              placeholder="Enter password again"
              className="login__input"
            />
            <button className="login__button">Sign up</button>
            <button className="login__register__button">
              Log into your account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
