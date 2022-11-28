import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import Header from "./Header";
import Game from "./Game";

const App = () => {
  return (
    <Router>
      <Container>
        <Header />
        <Routes>
          <Route path="/" element={<Game />} />
        </Routes>
      </Container>
    </Router>
  );
};

export default App;

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
