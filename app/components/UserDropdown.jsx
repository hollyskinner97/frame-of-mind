"use client";
import { signOut } from "firebase/auth";
import { auth } from "@/lib/firebase";
import Avatar from "./Avatar";
import { Box, Button } from "@mui/material";
export default function UserDropdown({ user }) {
  return (
    <Box component={"details"} sx={{ ml: "auto" }}>
      <Box component={"summary"} sx={{ listStyle: "none" }}>
        <Avatar />
      </Box>
      <Box
        sx={{
          position: "absolute",
          width: 200,
          right: 0,
          textAlign: "center",
          bgcolor: "primary.light",
          borderRadius: 3,
          py: 2,
        }}
      >
        <p>{`You are logged in as ${user.displayName}`}</p>
        <Button
          onClick={() => {
            signOut(auth);
          }}
        >
          Sign out
        </Button>
      </Box>
    </Box>
  );
}
