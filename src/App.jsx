import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Game from "./Pages/Game";
import Home from "./Pages/Home";

function App() {
  return (
    
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="game" element={<Game />} />
        </Routes>
      </Router>
    
  );
}
export default App;
