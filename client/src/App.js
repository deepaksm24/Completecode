import "./App.css";
import Home from "./pages/Lorem/Home";
import Homepage from "./pages/NewProjectAB/Homepage";
import NewProject from "./pages/NewProject/NewProject";
import Login from "./pages/Login/Login"
import Register from "./pages/Register/Register"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import ProtecdRoute from "./components/protecdRoute";

function App() {
  return (
    <div className="App">
      

      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<NewProject />} /> */}

          <Route
            path="/"
            element={
              <ProtecdRoute>
                <NewProject />
              </ProtecdRoute>
            }
          />

          <Route path ="/lorem" element ={<Home/>} />
          <Route path="/dashboard" element={<Homepage/>} />
          <Route path ="/login" element={<Login/>}/>
          <Route path ="/register" element={<Register/>}/>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
