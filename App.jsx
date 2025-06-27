import { Routes, Route } from "react-router-dom"
import LandingPage from "./pages/LandingPage"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Dashboard from "./pages/Dashboard"
import CourseDetail from "./pages/CourseDetail"
import Profile from "./pages/Profile"
import Header from "./components/Header"
import Footer from "./components/Footer"
import "./styles.css";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/course/:id" element={<CourseDetail />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
