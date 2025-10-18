import React from 'react';
import Header from "@/components/Header.tsx";
import Navbar from "@/components/Navbar.tsx";
import About from "@/components/About.tsx";
import Resume from "@/components/Resume.tsx";
import Stats from "@/components/Stats.tsx";
import Services from "@/components/Services.tsx";
import Contact from "@/components/Contact.tsx";

const Home: React.FC = () => {
    const currentYear = new Date().getFullYear();
    return (
        <>
            <Header/>
            <Navbar/>
            <About/>
            <Resume/>
            <Stats/>
            <Services/>
            {/*<Pricing/>*/}
            <section className="section bg-dark py-5">
                <div className="container text-center">
                    <h2 className="text-light mb-5 font-weight-normal">I Am Available For FreeLance</h2>
                    <a href="#contact" className="btn bg-primary w-lg">Hire Me</a>
                </div>
            </section>
            <Contact/>
            <footer className="footer">
                <div className="container py-4">
                    <p className="small mb-0 text-light">
                        © {currentYear} Created With <i className="ti-heart text-danger"></i> by{' '}
                        <span className="text-danger" title="Developer">Sam Sifiso Mndebele</span>
                    </p>
                </div>
                <div className="btn-back_to_top">
                    <span className="ti-arrow-up"></span>
                </div>
                <a className="btn btn-primary btn-component" data-spy="affix" data-offset-top="600">
                    <i className="ti-arrow-up"> Up</i>
                </a>
            </footer>
        </>
    );
};

export default Home;
