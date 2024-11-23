
import { Routes, Route } from "react-router-dom"
import LandingPage from "./pages/LandingPage";
import Login from "./pages/volunteer/Login"
import Register from "./pages/volunteer/Register"
import Profile from "./pages/Profile"
import Event from "./pages/Event"
import History from "./pages/volunteer/History"
import Navbar from "./components/Navbar"
import AdminLogin from "./pages/admin/AdminLogin"
import ServerTest from "./pages/ServerTest";
import AdminDashboard from "./pages/admin/AdminDashboard"
import EventHistory from "./pages/admin/EventHistory";
import ManageEvent from "./pages/admin/ManageEvent";
import VolunteerData from "./pages/admin/VolunteerData";

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
        <Route path="/admin/login" element={<AdminLogin />}/>
        <Route path="/admin/AdminDashboard" element={<AdminDashboard />}/>
        <Route path="/admin/event-history" element={<EventHistory />} />
        <Route path="/admin/manage-event" element={<ManageEvent />} />
        <Route path="/admin/volunteer-data" element={<VolunteerData />} />

        <Route path="/test" element={<ServerTest />}/>
      </Routes>
    </>
  )
}

export default App;
