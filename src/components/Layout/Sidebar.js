import React from "react";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import PersonIcon from "@mui/icons-material/Person";
import { Box } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import SettingsIcon from "@mui/icons-material/Settings";

const Sidebar = () => {
  return (
    <Box sx={{ p: 1, bgcolor: "#F5F7FB" }}>
      <ul>
        <li>
          <LocalMallIcon sx={{ color: "#999999", my: 1, cursor: "pointer" }} />
        </li>
        <li>
          <StarOutlineIcon
            sx={{ color: "#999999", my: 1, cursor: "pointer" }}
          />
        </li>
        <li>
          <PersonIcon sx={{ color: "#999999", my: 1, cursor: "pointer" }} />
        </li>
        <li>
          <LocationOnIcon sx={{ color: "#999999", my: 1, cursor: "pointer" }} />
        </li>
        <li>
          <SettingsIcon sx={{ color: "#999999", my: 1, cursor: "pointer" }} />
        </li>
      </ul>
    </Box>
  );
};

export default Sidebar;
