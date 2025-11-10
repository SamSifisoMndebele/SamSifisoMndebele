const Pricing = () => {
    return (
        <section className="section bg-custom-gray" id="price">
            <div className="container">
                <h1 className="mb-5">
                    <span className="text-danger">Developer</span> Pricing
                </h1>
                <div className="row align-items-center">
                    <div className="col-md-6 col-lg-3">
                        <div className="price-card text-center mb-4">
                            <h3 className="price-card-title">Portfolio</h3>
                            <div className="price-card-cost">
                                <sup>R</sup>
                                <span className="num">300</span>
                                <span className="date">once</span>
                            </div>
                            <ul className="list">
                                <li className="list-item">Single Page Website</li>
                                <li className="list-item">Custom Branding</li>
                                <li className="list-item">No Custom Domain</li>
                                <li className="list-item">No Professional Email</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <div className="price-card text-center mb-4">
                            <h3 className="price-card-title">Portfolio</h3>
                            <div className="price-card-cost">
                                <sup>R</sup>
                                <span className="num">600</span>
                                <span className="date">pa</span>
                            </div>
                            <ul className="list">
                                <li className="list-item">Many Pages Website</li>
                                <li className="list-item">Custom Branding</li>
                                <li className="list-item">Custom Domain</li>
                                <li className="list-item">1 Professional Email</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <div className="price-card text-center price-card-required mb-4">
                            <h3 className="price-card-title">E-Commerce</h3>
                            <div className="price-card-cost">
                                <sup>R</sup>
                                <span className="num">150</span>
                                <span className="date">pm</span>
                            </div>
                            <ul className="list">
                                <li className="list-item">100+ Products</li>
                                <li className="list-item">Custom Branding</li>
                                <li className="list-item">Custom Domain</li>
                                <li className="list-item">5 Professional Email</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <div className="price-card text-center mb-4">
                            <h3 className="price-card-title">Mobile App</h3>
                            <div className="price-card-cost">
                                <sup>R</sup>
                                <span className="num">1500</span>
                                <span className="date">+</span>
                            </div>
                            <ul className="list">
                                <li className="list-item">Any Idea</li>
                                <li className="list-item">10GB Storage</li>
                                <li className="list-item">Landing Web page</li>
                                <li className="list-item">Monetization</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Pricing;
