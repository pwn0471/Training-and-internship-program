import {Footer} from "../Components/Footer";
import {Header} from "../Components/Header";
import {Outlet} from "react-router-dom";
import {Navbar} from "../Components/Navbar";

const DefaultLayout = ()=>{
    return (
        <>
        <Header/>
        <Footer/>
        <Outlet/>
        <Navbar/>
        </>
    )
}

export default DefaultLayout;