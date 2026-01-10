
import './App.css'
import {BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Page/Home";
import About from "./Page/About";
import ErrorPage from './Page/Error';
import Signup from './Page/Signup';
import Login from './Page/Login';
import Services from './Page/Services';
import Contact from './Page/Contact';
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
            <Route path='/Login' element={<Login/>}></Route>
            <Route path='/Services' element={<Services/>}></Route>
            <Route path='/Contact' element={<Contact/>}></Route>
             
            </Route>
            <Route path='/Signup' element={<Signup/>}></Route>
            <Route path='*' element={<ErrorPage/>}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App
