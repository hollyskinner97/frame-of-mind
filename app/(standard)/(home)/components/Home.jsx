import { Button } from "@mui/material";
import { useRouter } from "next/navigation";

export default function HomePage({ user }) {
  const router = useRouter();
  return (
    <>
      <Button
        variant="contained"
        onClick={() => {
          router.push("/new");
        }}
      >
        Create
      </Button>
    </>
  );
}
