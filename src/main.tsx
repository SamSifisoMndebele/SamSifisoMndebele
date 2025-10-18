import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import Header from "@/components/Header.tsx";
import Navbar from "@/components/Navbar.tsx";
import About from "@/components/About.tsx";
import Resume from "@/components/Resume.tsx";
import Stats from "@/components/Stats.tsx";
import Services from "@/components/Services.tsx";
import Hire from "@/components/Hire.tsx";
import Contact from "@/components/Contact.tsx";
import Footer from "@/components/Footer.tsx";

createRoot(document.getElementById('root')!).render(
    <StrictMode>
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
    </StrictMode>,
)
