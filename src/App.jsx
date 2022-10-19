import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Game from "./Pages/Game";
import Login from "./Pages/Login";

function App() {
  return (
    
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="game" element={<Game />} />
        </Routes>
      </Router>
    
  );
}
export default App;
