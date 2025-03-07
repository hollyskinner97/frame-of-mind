"use client";
import { useState } from "react";
import Canvas from "../components/canvas";
import TopBar from "@/app/components/TopBar";
import Avatar from "@/app/components/Avatar";
import { Box, Button } from "@mui/material";
import addRawDrawingDataToDatabase from "./utils/addRawDrawingDataToDatabase";

export default function Create() {
  const [rawDrawingData, setRawDrawingData] = useState([]);
  return (
    <>
      <TopBar
        components={
          <>
            <Button
              sx={{ ml: "auto", mr: 2 }}
              variant="contained"
              onClick={() => {
                addRawDrawingDataToDatabase(rawDrawingData);
              }}
            >
              Submit
            </Button>
            <Avatar />
          </>
        }
      />

      <Box
        component={"main"}
        sx={{
          mt: "1.25rem",
          display: "flex",
          flexDirection: "column",
          flexGrow: 1,
          maxHeight: "100%",
        }}
      >
        <Canvas setRawDrawingData={setRawDrawingData} />;
      </Box>
    </>
  );
}
