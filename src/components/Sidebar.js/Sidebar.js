import React, { useState } from "react";
import { SidebarContainer, Button } from "./Sidebar.Style";

import AdminModal from "../AdminModal/AdminModal";
import { NavLink, Outlet } from "react-router-dom";
const Sidebar = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div>
      <SidebarContainer className="sidebar-container">
        <Button onClick={() => setOpenModal(true)}>Admin</Button>

        <NavLink
          to="checker"
          style={({ isActive }) => ({
            color: isActive ? "#EEA40E" : "white",
            background: isActive ? "white" : "#EEA40E",
            textDecoration: "none",
            height: "15vh",
            paddingLeft: "1.5em",
            paddingTop: "1.5em",
            fontSize: "1.4em",
            fontWeight: "bold",
            borderRadius: "8px",
          })}
        >
          Checker
        </NavLink>
        <NavLink
          to="documents"
          style={({ isActive }) => ({
            color: isActive ? "#EEA40E" : "white",
            background: isActive ? "white" : "#EEA40E",
            textDecoration: "none",
            height: "15vh",
            paddingLeft: "1.5em",
            paddingTop: "1.5em",
            fontSize: "1.4em",
            fontWeight: "bold",
            borderRadius: "8px",
          })}
        >
          Documents
        </NavLink>
        <Button>Logout</Button>
      </SidebarContainer>
      <AdminModal open={openModal} onClose={() => setOpenModal(false)} />
      <Outlet />
    </div>
  );
};

export default Sidebar;
