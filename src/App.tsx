import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import { theme } from "./theme";
// pages
import { Home } from "./pages/Home";

export default function App() {
  return <MantineProvider theme={theme}>
    <Home />
  </MantineProvider>;
}
