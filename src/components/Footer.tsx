
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
    </footer>
  );
};

export default Footer;
