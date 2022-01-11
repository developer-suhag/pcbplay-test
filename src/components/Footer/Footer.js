import { Box, Container } from "@mui/material";
import React from "react";
import logo from "../../images/logo-2.png";
import "./Footer.css";
import Typography from "@mui/material/Typography";

const Footer = () => {
  return (
    <>
      <Box sx={{ bgcolor: "#006241", py: 6 }}>
        <Container>
          <Box sx={{ textAlign: "center" }}>
            <img src={logo} alt="" />
          </Box>
          <nav className="footer-nav">
            <a href="#">About</a>
            <a href="#">Products</a>
            <a href="#">Carrers</a>
            <a href="#">Help</a>
            <a href="#">Privacy Policy</a>
          </nav>
        </Container>
      </Box>
      <Box
        sx={{ bgcolor: "#06583C", color: "#fff", textAlign: "center", py: 1 }}
      >
        <Typography variant="p">&copy; 2022 | All right reserved</Typography>
      </Box>
    </>
  );
};

export default Footer;
