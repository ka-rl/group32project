
import { Routes, Route } from "react-router-dom"
import LandingPage from "./pages/LandingPage";
import Login from "./pages/volunteer/Login"
import Register from "./pages/volunteer/Register"
import Profile from "./pages/Profile"
import Event from "./pages/Event"
import History from "./pages/volunteer/History"
import Dash from "./pages/volunteer/Dash"
import Navbar from "./components/Navbar"
import AdminLogin from "./pages/admin/AdminLogin"
import ServerTest from "./pages/ServerTest";

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
        <Route path="/history" element={<History />}/>
        <Route path="/dash" element={<Dash />}/>
        <Route path="/admin/login" element={<AdminLogin />}/>

        <Route path="/test" element={<ServerTest />}/>
      </Routes>
    </>
  )
}

export default App;
