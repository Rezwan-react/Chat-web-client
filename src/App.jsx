import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import Layout from "./components/layout/Layout";
import ChatPage from "./pages/ChatPage";
import GroupPage from "./pages/GroupPage";
import PeoplePage from "./pages/PeoplePage";
import OtpVerifyPage from "./pages/OtpVerifyPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/otpVerifyPage/:email" element={<OtpVerifyPage />} />
          <Route path="/" element={<Layout />}>
            <Route index element={<ChatPage />} />
            <Route path="/group" element={<GroupPage />} />
            <Route path="/people" element={<PeoplePage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
