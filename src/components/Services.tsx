const Services = () => {
    return (
        <section className="section bg-custom-gray" id="service">
            <div className="container">
                <h2 className="mb-5 pb-4">
                    <span className="text-danger">My</span> Services
                </h2>
                <div className="row">
                    <div className="col-md-4 col-sm-6">
                        <div className="card mb-5">
                            <div className="card-header has-icon">
                                <i className="ti-mobile text-danger" aria-hidden="true"></i>
                            </div>
                            <div className="card-body px-4 py-3">
                                <h5 className="mb-3 card-title text-dark">Android Development</h5>
                                <p className="subtitle">With expertise in Java and Kotlin, I develop native Android
                                    applications that are user-friendly and feature-rich. My Android development skills
                                    ensure that apps are optimized for performance, security, and compatibility across a
                                    wide range of devices.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6">
                        <div className="card mb-5">
                            <div className="card-header has-icon">
                                <i className="ti-world text-danger" aria-hidden="true"></i>
                            </div>
                            <div className="card-body px-4 py-3">
                                <h5 className="mb-3 card-title text-dark">Web Application Development</h5>
                                <p className="subtitle">I specialize in creating custom web applications that perfectly
                                    align with client needs. Utilizing the latest technologies and frameworks, I develop
                                    robust, scalable, and high-performing web solutions that offer seamless user
                                    experiences.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6">
                        <div className="card mb-5">
                            <div className="card-header has-icon">
                                <i className="ti-harddrives text-danger" aria-hidden="true"></i>
                            </div>
                            <div className="card-body px-4 py-3">
                                <h5 className="mb-3 card-title text-dark">Back-End Development</h5>
                                <p className="subtitle">I am proficient in designing and developing server-side
                                    applications using frameworks like Node.js, Express, and Django. My back-end
                                    solutions are reliable, secure, and capable of handling high volumes of traffic,
                                    ensuring optimal performance and stability.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6">
                        <div className="card mb-5">
                            <div className="card-header has-icon">
                                <i className="ti-server text-danger" aria-hidden="true"></i>
                            </div>
                            <div className="card-body px-4 py-3">
                                <h5 className="mb-3 card-title text-dark">Database Management</h5>
                                <p className="subtitle">I provide comprehensive database management services, including
                                    design, development, and maintenance. Using SQL and NoSQL technologies like MySQL,
                                    PostgreSQL, and MongoDB, I ensure that databases are efficiently organized and
                                    easily accessible.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6">
                        <div className="card mb-5">
                            <div className="card-header has-icon">
                                <i className="ti-cloud text-danger" aria-hidden="true"></i>
                            </div>
                            <div className="card-body px-4 py-3">
                                <h5 className="mb-3 card-title text-dark">API Development and Integration</h5>
                                <p className="subtitle">I offer API development and integration services to enhance the
                                    functionality of web applications. By creating and integrating RESTful APIs with
                                    Ktor, I enable seamless communication between different services and platforms.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6">
                        <div className="card mb-5">
                            <div className="card-header has-icon">
                                <i className="ti-bag text-danger" aria-hidden="true"></i>
                            </div>
                            <div className="card-body px-4 py-3">
                                <h5 className="mb-3 card-title text-dark">E-commerce Solutions</h5>
                                <p className="subtitle">I create and optimize e-commerce websites with functionalities
                                    such as online stores, payment gateways, and inventory management. My e-commerce
                                    solutions are tailored to meet the unique needs of each business, ensuring a smooth
                                    and secure online shopping experience.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
