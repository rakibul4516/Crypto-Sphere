import About from "../components/About";
import Contact from "../components/Contact";
import FreqAskQuestion from "../components/FAQ";
import Features from "../components/Features";
import Footer from "../components/Footer";
import Navbar from "../components/Header";
import Pricing from "../components/Pricing";
import Services from "../components/Services";

const Home = () => {
    return (
        <div>
            <Navbar/>
            <Features/>
            <About/>
            <Services/>
            <Pricing/>
            <FreqAskQuestion/>
            <Contact/>
            <Footer/>
        </div>
    );
};

export default Home;


