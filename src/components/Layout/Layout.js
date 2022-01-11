import { Box, Grid } from "@mui/material";
import React from "react";
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
  return (
    <>
      <Box sx={{ display: "flex", gap: 4 }}>
        <Box>
          <Sidebar />
        </Box>
        <Box>{children}</Box>
      </Box>
    </>
  );
};

export default Layout;
