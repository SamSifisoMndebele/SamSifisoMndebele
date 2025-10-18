const About = () => {
    return (
        <div className="container-fluid">
            <div id="about" className="row about-section">
                <div className="col-lg-4 about-card">
                    <h3 className="font-weight-light">Who am I ?</h3>
                    <span className="line mb-4"></span>
                    <h5 className="mb-3">A Web and Mobile Developer</h5>
                    <p className="mt-20">
                        I'm an Android and Web Developer with a knack for crafting seamless digital experiences.
                        With expertise in creating dynamic, user-friendly applications and websites,
                        I thrive on solving complex problems with innovative solutions.
                        My passion lies in bridging the gap between design and functionality,
                        ensuring every project I work on is both visually stunning and technically sound.
                        Whether it's building a mobile app from scratch or designing a responsive web interface,
                        I bring a blend of creativity and technical prowess to everything I do.
                    </p>
                    {/*<a href="/docs/resume" target="_blank" className="btn btn-primary btn-rounded"><i className="ti-printer pr-2"></i>View Resume</a>*/}
                </div>
                <div className="col-lg-4 about-card">
                    <h3 className="font-weight-light">Personal Info</h3>
                    <span className="line mb-5"></span>
                    <ul className="mt40 info list-unstyled">
                        <li><span>Title</span> : Mr</li>
                        <li><span>First Names</span> : Sam Sifiso</li>
                        <li><span>Family Name</span> : Mndebele</li>
                        <li><span>Birthdate</span> : 15 March</li>
                        <li><span>Nationality</span> : South African</li>
                        <li><span>Email</span> : sams.mndebele@studentintellect.co.za</li>
                        <li><span>Phone</span> : +27 72 164 6430</li>
                        <li>
                            <span>Address</span> : 104 Clau-Clau, No. 2<br/>
                            Kabokweni, 1245<br/>
                            Mbombela, MP
                        </li>
                    </ul>
                    <ul className="social-icons pt-3">
                        <li className="social-item">
                            <a href="https://github.com/SamSifisoMndebele" target="_blank" rel="noopener noreferrer"
                               className="social-link">
                                <i className="fa-brands fa-github"></i>
                            </a>
                        </li>
                        <li className="social-item">
                            <a href="https://wa.me/27721646430?text=%3E%20From%20GitHub%0AHi%20Sam,%0A" target="_blank"
                               rel="noopener noreferrer" className="social-link">
                                <i className="fa-brands fa-whatsapp"></i>
                            </a>
                        </li>
                        <li className="social-item">
                            <a href="mailto:sams.mndebele@studentintellect.co.za" target="_blank"
                               rel="noopener noreferrer" className="social-link">
                                <i className="fa-regular fa-envelope"></i>
                            </a>
                        </li>
                        <li className="social-item">
                            <a href="https://www.facebook.com/sam.sifiso.mndebele" target="_blank"
                               rel="noopener noreferrer" className="social-link">
                                <i className="fa-brands fa-facebook-f"></i>
                            </a>
                        </li>
                        <li className="social-item">
                            <a href="https://www.instagram.com/sam.sifiso.mndebele" target="_blank"
                               rel="noopener noreferrer" className="social-link">
                                <i className="fa-brands fa-instagram"></i>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="col-lg-4 about-card">
                    <h3 className="font-weight-light">My Expertise</h3>
                    <span className="line mb-5"></span>
                    <div className="row">
                        <div className="col-1 text-danger pt-1"><i className="ti-mobile icon-lg"></i></div>
                        <div className="col-10 ml-auto mr-3">
                            <h6>Web & Mobile App Development</h6>
                            <p className="subtitle">Building responsive and dynamic websites and robust Android
                                applications with a focus on performance, usability, and seamless integration across
                                devices.</p>
                            <hr/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-1 text-danger pt-1"><i className="ti-server icon-lg"></i></div>
                        <div className="col-10 ml-auto mr-3">
                            <h6>Backend Development</h6>
                            <p className="subtitle">Implementing secure and efficient server-side logic, APIs, and
                                databases.</p>
                            <hr/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-1 text-danger pt-1"><i className="ti-shopping-cart-full icon-lg"></i></div>
                        <div className="col-10 ml-auto mr-3">
                            <h6>Ecommerce</h6>
                            <p className="subtitle">Initiating and developing ecommerce platforms that offer seamless
                                shopping experiences, from product browsing to secure checkout, ensuring they meet user
                                needs and industry standards.</p>
                            <hr/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
