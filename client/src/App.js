import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Game from "./Game";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Game />} />
      </Routes>
    </Router>
  );
};

export default App;
