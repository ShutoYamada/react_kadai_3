import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
//import { Link } from "react-router-dom";
import { AuthContext } from "./AuthProvider";
import { Box, Button, styled, TextField } from "@material-ui/core";

const SignInButton = styled(Button)({
  background: "#6fc4f9",
  fontSize: "1.0rem",
  border: 0,
  borderRadius: 3,
  color: "white",
  padding: "10px 40px",
  marginTop: "30px",
  "&:hover": {
    backgroundColor: "#57baf8",
  },
});

const Login = ({ history }) => {
  const { login } = useContext(AuthContext);
  //AuthContextからlogin関数を受け取る
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    login(email, password, navigate);
  };

  return (
    <div className="wrapper">
      <div className="auth-container">
        <div style={{ textAlign: "center" }}>
          <h1>LogIn</h1>

          <form className="auth-form" onSubmit={handleSubmit}>
            <div className="auth-form-item">
              <Box
                component="form"
                sx={{
                  "& > :not(style)": { m: 1, width: "25ch" },
                }}
                noValidate
                autoComplete="off"
              >
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  autoFocus
                  variant="outlined"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.currentTarget.value);
                  }}
                />
              </Box>
            </div>
            <div className="auth-form-item">
              <Box
                component="form"
                sx={{
                  "& > :not(style)": { m: 1, width: "25ch" },
                }}
                noValidate
                autoComplete="off"
              >
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  variant="outlined"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.currentTarget.value);
                  }}
                />
              </Box>
            </div>
            <SignInButton type="submit">LOGINする</SignInButton>
          </form>
          <Link to="/signup" className="auth-bottom">
            アカウントをお持ちでない方はこちら
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
