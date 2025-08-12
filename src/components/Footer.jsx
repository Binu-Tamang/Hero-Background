import logo from "../assets/images/logo.svg";

const Footer = () => {
  return (
    <section className="relative bg-gradient-to-b from-[#001b38] to-[#000b1a] text-white landing-footer">
      <div className="landing-footer-main relative">
        <div className="landing-footer-cover absolute inset-0 bg-black opacity-50"></div>

        <div className="container mx-auto px-4 landing-footer-container relative flex items-center justify-between py-6">
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="landing-lofo-footer-link inline-block"
          >
            <img
              src={logo}
              loading="lazy"
              alt="SecurityPal AI Logo"
              className="mx-auto w-40"
            />
          </a>

          <div className="landing-footer-list flex space-x-8 items-center">
            <p className="landing-footer-text text-sm">
              © 2025 SecurityPal AI. All rights reserved.
            </p>

            <a
              href="https://www.securitypalhq.com/privacy-policy?__hstc=94690499.f705c0f3e32a667f77f562c936c114f8.1755022132638.1755024653330.5&amp;__hssc=94690499.2.1755024653330&amp;__hsfp=2642537748"
              target="_blank"
              rel="noopener noreferrer"
              className="landing-footer-link inline-block"
            ></a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
