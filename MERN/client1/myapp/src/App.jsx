
import './App.css'
import{BrowserRouter, Routes, Route } from "react-router-dom";
import {Home} from "./Page/Home";
import {About} from "./Page/About";
import {Navbar} from "./Components/Navbar";
import DefaultLayout from "./Layout/Default";

function App() {
  

  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route element = {<DefaultLayout/>}>
             <Route path= "/" element= {<Home/>}/>
             <Route path= "/About" element= {<About/>}/>
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App
