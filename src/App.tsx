import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import DrawPage from "./Pages/DrawPage";
import LoginPage from "./Pages/LoginPage";
import { CreateGroupPage } from "./Pages/CreateGroupPage";
import LandingPage from "./Pages/LandingPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/draw" element={<DrawPage />} />
        <Route path="/create-group" element={<CreateGroupPage />} />
      </Routes>
    </Router>
  );
}

export default App;
