import { Container } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import * as React from "react";
import logo from "../../images/logo.png";
import user from "../../images/user.png";

const Navigation = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{
          bgcolor: "transparent",
          color: "#222",
          borderBottom: "3px solid #800080",
          boxShadow: 0,
        }}
      >
        <Toolbar>
          <Container>
            <Box
              sx={{
                flexGrow: 1,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Box>
                <img src={logo} alt="" />
              </Box>
              <Box>
                <img src={user} alt="" />
              </Box>
            </Box>
          </Container>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navigation;
