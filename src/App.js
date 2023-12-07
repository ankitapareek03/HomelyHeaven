import logo from "./logo.svg";
import "./App.css";
import Navbar from "./component/Navbar";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Sign_in from "./screens/sign_in";
import Sign_up from "./screens/sign_up";

function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" exact Component={}></Route> */}
          <Route path="/signin" exact Component={Sign_in}></Route>

          <Route path="/signup" exact Component={Sign_up}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
