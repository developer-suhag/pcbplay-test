import { Box, Grid } from "@mui/material";
import React from "react";
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
  return (
    <>
      <Box sx={{ display: "flex", gap: 4, height: "100vh" }}>
        <Box sx={{ bgcolor: "#F5F7FB" }}>
          <Sidebar />
        </Box>
        <Box>{children}</Box>
      </Box>
    </>
  );
};

export default Layout;
