"use client";

import { AppBar, Toolbar, Typography } from "@mui/material";
import Logo from "./Logo";
import UserDropdown from "./UserDropdown";
import { auth } from "@/lib/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

export default function TopBar() {
  const [authUser] = useAuthState(auth);
  return (
    <AppBar position="static" color="light" variant="outlined">
      <Toolbar component={"nav"}>
        <Logo />{" "}
        <Typography variant="h5" color="primary">
          Frame of Mind
        </Typography>{" "}
        {authUser && <UserDropdown user={authUser} />}
      </Toolbar>
    </AppBar>
  );
}
