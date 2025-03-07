import signUp from "@/app/auth/signUp";
import { Button, TextField } from "@mui/material";
import { useState } from "react";

export default function SignUpForm({ setCurrentForm, setLoading }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");

  async function handleForm(event) {
    event.preventDefault();
    await signUp(displayName, email, password, setLoading);
    setCurrentForm(null);
  }

  return (
    <form onSubmit={handleForm}>
      <TextField
        label="Email"
        variant="outlined"
        onChange={(e) => setEmail(e.target.value)}
        type="email"
        placeholder="email@website.com"
        value={email}
        required
      />
      <TextField
        label="Username"
        variant="outlined"
        onChange={(e) => setDisplayName(e.target.value)}
        type="text"
        placeholder="Your username"
        value={displayName}
        required
      />
      <TextField
        label="Password"
        variant="outlined"
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        placeholder="Your password"
        value={password}
        required
      />

      <Button type="submit" variant="contained">
        Sign up
      </Button>
    </form>
  );
}
