import "./App.css";
import { Route, Routes, useLocation } from "react-router-dom";
import NavBar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Social from "./pages/social/Social";
import Library from "./pages/library/Library";
import ProtectedComponent from "./components/ProtectedComponent/ProtectedComponent";
import React from "react";
import { MusicProvider } from "./Providers/MusicProvider";

function App() {
  const location = useLocation();
  console.log(location.pathname, "use location ");

  const noNavBar = ["/login"];
  return (
    <>
      {/* NAV GATION BAR */}

      {!noNavBar.includes(location.pathname) && <NavBar />}

      {/* <MusicCard title={"hello"} artist={"cat"} /> */}

      <div style={{ marginTop: "100px" }}>
        <Routes>
          <Route
            path="/"
            element={
              <MusicProvider>
                <Home />
              </MusicProvider>
            }
          ></Route>
          <Route path="/social" element={<Social />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<h1>SignUp</h1>}></Route>

          {/* Protected  */}

          <Route
            path="/library"
            element={
              <ProtectedComponent>
                <Library />
              </ProtectedComponent>
            }
          ></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
