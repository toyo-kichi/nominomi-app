import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import DrawPage from "./Pages/DrawPage";
import LoginPage from "./Pages/LoginPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/draw" element={<DrawPage />} />
      </Routes>
    </Router>
  );
}

export default App;
