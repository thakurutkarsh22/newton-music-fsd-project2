import "./App.css";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Social from "./pages/social/Social";

function App() {
  return (
    <>
      {/* NAV GATION BAR */}
      <NavBar />

      {/* <MusicCard title={"hello"} artist={"cat"} /> */}

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/social" element={<Social />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<h1>SignUp</h1>}></Route>

        {/* Protected  */}

        <Route path="/library" element={<h1>Library</h1>}></Route>
      </Routes>
    </>
  );
}

export default App;
