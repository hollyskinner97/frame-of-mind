"use client";
import { signOut } from "firebase/auth";
import { auth } from "@/lib/firebase";
import Avatar from "./Avatar";
import { Box, Button, CircularProgress } from "@mui/material";
import { useRouter } from "next/navigation";

export default function UserDropdown({ user }) {
  const router = useRouter();
  
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
          onClick={async () => {
            await signOut(auth);
            router.push("/");
          }}
        >
          Sign out
        </Button>
      </Box>
    </Box>
  );
}
