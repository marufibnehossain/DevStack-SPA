import Logo from "../assets/logo-text.png";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 w-full h-20 border-b border-[#F1F5F9] bg-base-100 px-[4vw]">
      <div className="flex justify-between items-center max-w-305 mx-auto h-full">
        <div className="lg:hidden">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
              <svg aria-label="Menu" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /> </svg>
            </div>
            <ul
              tabIndex={-1}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
              <li><a href='#' className="cursor-pointer hover:text-[#EC4899] transition-colors">Home</a></li>
              <li><a href='#' className="cursor-pointer hover:text-[#EC4899] transition-colors">Technologies</a></li>
              <li><a href='#' className="cursor-pointer hover:text-[#EC4899] transition-colors">Projects</a></li>
              <li><a href='#' className="cursor-pointer hover:text-[#EC4899] transition-colors">About</a></li>
              <li><a href='#' className="cursor-pointer hover:text-[#EC4899] transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>
        <div>
          <img src={Logo} alt="Logo" className="h-10 w-auto" />
        </div>
        <ul className="hidden lg:flex gap-10 text-[#475569] text-sm font-medium">
            <li><a href='#' className="cursor-pointer hover:text-[#EC4899] transition-colors">Home</a></li>
            <li><a href='#' className="cursor-pointer hover:text-[#EC4899] transition-colors">Technologies</a></li>
            <li><a href='#' className="cursor-pointer hover:text-[#EC4899] transition-colors">Projects</a></li>
            <li><a href='#' className="cursor-pointer hover:text-[#EC4899] transition-colors">About</a></li>
            <li><a href='#' className="cursor-pointer hover:text-[#EC4899] transition-colors">Contact</a></li>
        </ul>
        <div className="flex gap-5">
          <button className="text-[#334155] text-sm cursor-pointer">Sign In</button>
          <button className="bg-[#D91B7E] text-sm px-5 py-2.5 text-white rounded-full cursor-pointer">Sign Up</button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
