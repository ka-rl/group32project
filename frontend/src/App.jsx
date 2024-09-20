
import { Routes, Route } from "react-router-dom"
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login"
import Register from "./pages/Register"
import Profile from "./pages/Profile"
import Event from "./pages/event";

import Navbar from "./components/Navbar"

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />}/>
        <Route path="/register" element={<Register />}/>
        <Route path="/profile" element={<Profile />}/>
        <Route path="/profile" element={<Event />}/>
      </Routes>
    </>
  )
}

export default App;
