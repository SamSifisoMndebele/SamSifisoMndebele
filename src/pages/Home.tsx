import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hire from "@/components/Hire";
import Navbar from "@/components/Navbar";
import Resume from "@/components/Resume";
import Services from "@/components/Services";
import Stats from "@/components/Stats";

const Home = () => {
    return (
        <div id="home">
            <div className="btn-back_to_top">
                <span className="ti-arrow-up"></span>
            </div>
            <a className="btn btn-primary btn-component" data-spy="affix" data-offset-top="600">
                <i className="ti-arrow-up"> Up</i>
            </a>
            <Header/>
            <Navbar/>
            <About/>
            <Resume/>
            <Stats/>
            <Services/>
            {/*<Pricing/>*/}
            <Hire/>
            <Contact/>
            <Footer/>
        </div>
    )
}

export default Home;