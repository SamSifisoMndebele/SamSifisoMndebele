const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer py-3">
            <div className="container">
                <p className="small mb-0 text-light">
                    © {currentYear} Created With <i className="ti-heart text-danger"></i> by{' '}
                    <span className="text-danger" title="Developer">
            Sam Sifiso Mndebele
          </span>
                </p>
            </div>
            <div className="btn-back_to_top">
                <span className="ti-arrow-up"></span>
            </div>
            <a className="btn btn-primary btn-component" data-spy="affix" data-offset-top="600">
                <i className="ti-arrow-up"> Up</i>
            </a>
        </footer>
    );
};

export default Footer;
