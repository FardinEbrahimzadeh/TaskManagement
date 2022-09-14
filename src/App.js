import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { LoginPage } from "./components/LoginPage";
import { UserAccount } from "./components/UserAccount";
import { Routes, Route,BrowserRouter } from "react-router-dom";
import { Tasks } from "./components/Tasks";



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/User" element={<UserAccount />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
