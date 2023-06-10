import { Box } from "@chakra-ui/react";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {
  return (
    <Box style={{ maxWidth: "1440px", margin: "auto" }}>
      <Header />
      <Main />
      <Footer />
    </Box>
  );
}

export default App;
