import Header from "../Components/Header";
import {Outlet} from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";



const DefaultLayout = ()=>{
    return (
        <>
        <Header/>
        <Navbar/>

        <Outlet/>
        <Footer/>

        </>
    )
}

export default DefaultLayout;