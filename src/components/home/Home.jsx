import Footer from "../shared/Footer";
import Navbar from "../shared/Navbar";
import Banner from "./Banner";
import Brands from "./Brands";


const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <Brands></Brands>
            <Footer></Footer>
        </div>
    );
};

export default Home;