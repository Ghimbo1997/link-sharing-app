import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Heading, Button } from "./common";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Heading size="md">Hello world</Heading>
    <Button variant="fill">Click Me!</Button>
  </StrictMode>
);
