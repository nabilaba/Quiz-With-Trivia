import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";

const colors = {
  accent: {
    50: "#EF476F",
    100: "#ED345F",
  },
};

const theme = extendTheme({
  colors,
  fonts: {
    body: "monospace, sans-serif",
    heading: "monospace, serif",
    mono: "Menlo, monospace",
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <ChakraProvider theme={theme}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ChakraProvider>
);
