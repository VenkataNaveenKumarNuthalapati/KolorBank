import "./App.css";
import NavbarComponent from "./Components/Navbar";
import Home from "./Components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./Components/About";
import AdminLogin from "./Components/modules/AdminLogin";
import RegisterForm from "./Components/modules/RegisterForm";
import LoginForm from "./Components/modules/LoginForm";

function App() {
  return (
    <BrowserRouter>
      <NavbarComponent />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/register" element={<RegisterForm />}></Route>
        <Route path="/login" element={<LoginForm />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/adminLogin" element={<AdminLogin />}></Route>
        <Route path="/registerform" element={<RegisterForm />}></Route>
        <Route path="/loginform" element={<LoginForm />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
