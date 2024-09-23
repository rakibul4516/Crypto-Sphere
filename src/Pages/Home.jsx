import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import About from "../components/About";
import Contact from "../components/Contact";
import FreqAskQuestion from "../components/FAQ";
import Features from "../components/Features";
import Footer from "../components/Footer";
import Navbar from "../components/Header";
import Pricing from "../components/Pricing";
import Services from "../components/Services";
import { useEffect } from "react";

const ScrollToTop = () => {
    const { hash } = useLocation();

    useEffect(() => {
        if (hash) {
            const element = document.querySelector(hash);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [hash]);

    return null;
};

const Home = () => {
    return (
        <Router>     
            <Navbar />
            <Features />
            <About />
            <Services />
            <Pricing />
            <FreqAskQuestion />
            <Contact />
            <Footer />
            <Routes>
                <Route path="/home" element={<Navbar/>} />
                <Route path="/about" element={<About />} />
                <Route path="/features" element={<Features />} />
                <Route path="/pricing" element={<Pricing />} />
                <Route path="/services" element={<Services />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/faq" element={<FreqAskQuestion />} />
            </Routes>
            <ScrollToTop />
        </Router>
    );
};

export default Home;

