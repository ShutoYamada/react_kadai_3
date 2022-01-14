import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "firebase/auth";
import { AuthContext } from "./AuthProvider";
import { Box, Button, styled, TextField } from "@material-ui/core";

const SignUpButton = styled(Button)({
  background: "#f16272",
  fontSize: "1.0rem",
  border: 0,
  borderRadius: 3,
  color: "white",
  padding: "10px 40px",
  marginTop: "30px",
  "&:hover": {
    backgroundColor: "#ee3e52",
  },
});

const SignUp = ({ history }) => {
  const { signup } = useContext(AuthContext);
  //AuthContextからsignup関数を受け取る

  const handleSubmit = (event) => {
    event.preventDefault();
    const { name, email, password } = event.target.elements;
    signup(name.value, email.value, password.value, history);
  };

  return (
    <div className="wrapper">
      <div className="auth-container">
        <div style={{ textAlign: "center" }}>
          <h1>新規登録</h1>
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
                  id="user name"
                  label="User Name"
                  name="user name"
                  autoComplete="user name"
                  autoFocus
                  variant="outlined"
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
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  autoFocus
                  variant="outlined"
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
                />
              </Box>
            </div>
            <SignUpButton className="signUp-btn" type="submit">
              新規登録する
            </SignUpButton>
          </form>
          <Link to="/login" className="auth-bottom">
            アカウントをお持ちの方はこちら
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
