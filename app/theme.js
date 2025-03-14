"use client";
import { createTheme } from "@mui/material/styles";

import { Shantell_Sans } from "next/font/google";
const font = Shantell_Sans({ subsets: ["latin"] });
// create a temporary theme to get the default options
const defaultTheme = createTheme();

// get the default `shadows` object
const defaultShadows = [...defaultTheme.shadows];
const theme = createTheme({
  typography: {
    fontSize: 17,
    fontFamily: font.style.fontFamily,
    body1: {
      fontWeight: 400,
    },
    body2: {
      fontWeight: 400,
    },
    button: {
      fontWeight: 400,
    },
  },
  shadows: defaultShadows.map(() => "none"),
  palette: {
    primary: {
      main: "#6750A4",
      light: "#EADDFF",
      medium: "#D0BCFF",
      emphasis: "#9C85D1",
      dark: "#4F378B",
      contrastText: "#FFFFFF",
    },
    light: {
      main: "#FEF7FF",
      light: "#FFFFFF",
      dark: "#9C85D1",
      contrastText: "#6750A4",
    },
    green: {
      main: "#acdf6d",
      light: "#DAFFB5",
      dark: "#71A53D",
      contrastText: "#31570b",
    },
  },
});

export default theme;
