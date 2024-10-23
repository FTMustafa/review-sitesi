import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/Home";
import Main from "./components/pages/Main";
import Profile from "./components/pages/Profile";
import Message from "./components/pages/Message";
import Settings from "./components/pages/Settings";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Navigate to="/" replace />} />
          <Route path="/" element={<Home />}>
            <Route index element={<Main />} />
            <Route path="profile" element={<Profile />} />
            <Route path="messages" element={<Message />} />
            <Route path="settings" element={<Settings />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
