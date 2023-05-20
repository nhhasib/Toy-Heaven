import { Outlet } from "react-router-dom";
import Footer from "../shared/Footer";
import Navbar from "../shared/Navbar";
import Banner from "./Banner";
import Brands from "./Brands";
import { ToastContainer } from "react-toastify";


const Home = () => {
    return (
        <div>
            <ToastContainer position="top-center"/>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Home;