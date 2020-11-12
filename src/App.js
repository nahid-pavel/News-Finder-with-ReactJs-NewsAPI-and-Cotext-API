import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Homepage from "./pages/Homepage/Homepage";
import Header from "./components/Header/Header";
import { Container } from "react-bootstrap";
import NewsState from "./context/newsState";

function App() {
  return (
    <NewsState>
      <Header />
      <Container>
        <Homepage />
      </Container>
    </NewsState>
  );
}

export default App;
