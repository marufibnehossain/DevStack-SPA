import logo from "../assets/logo-text.png";

const Footer = () => {
    return (
        <footer className="w-full border-t border-[#F1F5F9] bg-white px-[4vw] pt-16 pb-8">
      <div className="max-w-305 mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-20 pb-12">
          <div className="sm:col-span-2">
            <div className="flex items-center gap-2 mb-4">
                <img src={logo} alt="" />
            </div>

            <p className="text-xs leading-[1.5em] text-[#64748B] max-w-sm mb-6">
              Curated tools, technologies, and resources for developers
              building modern software.
            </p>

            <div className="flex items-center gap-5 text-xs font-semibold leading-[1.3em] text-[#475569]">
              <a
                href="#"
                className="flex items-center gap-1.5 hover:text-[#EC4899] transition-colors"
              >
                GitHub
              </a>

              <a
                href="#"
                className="flex items-center gap-1.5 hover:text-[#EC4899] transition-colors"
              >
                Twitter
              </a>

              <a
                href="#"
                className="flex items-center gap-1.5 hover:text-[#EC4899] transition-colors"
              >
                LinkedIn
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xs font-bold leading-[1.3em] text-[#0F172A] mb-4">
              PRODUCT
            </h3>

            <ul className="flex flex-col gap-3 text-xs leading-[1.3em] text-[#64748B]">
              <li>
                <a href="#" className="hover:text-[#EC4899] transition-colors">
                  Home
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-[#EC4899] transition-colors">
                  Technologies
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-[#EC4899] transition-colors">
                  Projects
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-bold leading-[1.3em] text-[#0F172A] mb-4">
              COMPANY
            </h3>

            <ul className="flex flex-col gap-3 text-xs leading-[1.3em] text-[#64748B]">
              <li>
                <a href="#" className="hover:text-[#EC4899] transition-colors">
                  About
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-[#EC4899] transition-colors">
                  Contact
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-[#EC4899] transition-colors">
                  Careers
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-bold leading-[1.3em] text-[#0F172A] mb-4">
              LEGAL
            </h3>

            <ul className="flex flex-col gap-3 text-xs leading-[1.3em] text-[#64748B]">
              <li>
                <a href="#" className="hover:text-[#EC4899] transition-colors">
                  Privacy Policy
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-[#EC4899] transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-[#F1F5F9] pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs leading-[1.3em] text-[#94A3B8]">
            © 2026 Dev Stack. All rights reserved.
          </p>

          <div className="flex items-center gap-6 text-xs font-semibold leading-[1.3em] text-[#94A3B8]">
            <a href="#" className="hover:text-[#EC4899] transition-colors">
              Privacy
            </a>

            <a href="#" className="hover:text-[#EC4899] transition-colors">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
    );
};

export default Footer;