import { Button } from "@chakra-ui/react"
import { Route, Routes } from "react-router-dom";



function App() {
  return (
    <box minH={"100vh"}>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </box>
  )
}

export default App;
