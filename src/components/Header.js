import React from "react";
import {
  AppBar,
  Box,
  Button,
  Toolbar,
  Typography,
  IconButton,
} from "@material-ui/core";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/login");
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inheriDefa"
            aria-label="menu"
            sx={{ mr: 2 }}
          ></IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            React課題③
          </Typography>
          <div style={{ flexGrow: 1 }}></div>
          <Button variant="text" color="inherit" onClick={handleClick}>
            SignOut
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
export default Header;
