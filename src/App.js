import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./Components/Home/Home";
import Page404 from "./Components/Home/Home";
import SignUp from "./Components/Signup/Signup";
import Login from "./Components/Login/Login";

function App() {
  return (
    <BrowserRouter>
      <section className="hero-section">
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="*" element={<Page404 />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </section>
    </BrowserRouter>
  );
}

export default App;
