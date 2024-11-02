
import { Routes, Route } from "react-router-dom"
import LandingPage from "./pages/LandingPage";
import Login from "./pages/volunteer/Login"
import Register from "./pages/volunteer/Register"
import Profile from "./pages/Profile"
import Event from "./pages/Event"
import Navbar from "./components/Navbar"
import AdminLogin from "./pages/admin/AdminLogin"

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />}/>
        <Route path="/register" element={<Register />}/>
        <Route path="/profile" element={<Profile />}/>
        <Route path="/event" element={<Event />}/>

        <Route path="/admin/login" element={<AdminLogin />}/>
      </Routes>
    </>
  )
}

export default App;
