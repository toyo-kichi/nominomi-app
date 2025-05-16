import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import DrawPage from "./Pages/DrawPage";
import LoginPage from "./Pages/LoginPage";
import { CreateGroupPage } from "./Pages/CreateGroupPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/draw" element={<DrawPage />} />
        <Route path="/create-group" element={<CreateGroupPage />} />
      </Routes>
    </Router>
  );
}

export default App;
