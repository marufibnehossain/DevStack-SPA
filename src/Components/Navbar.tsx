import Logo from "../assets/logo-text.png";

const Navbar = () => {
  return (
    <div className="sticky top-0 z-50 w-full h-20 border-b border-[#F1F5F9] bg-base-100">
      <div className="flex justify-between items-center max-w-[1220px] mx-auto h-full">
        <div>
          <img src={Logo} alt="Logo" className="h-10 w-auto" />
        </div>
        <ul className="flex gap-10 text-[#475569] text-sm font-medium">
            <li><a>Home</a></li>
            <li><a>About</a></li>
            <li><a>Contact</a></li>
        </ul>
        <div className="flex gap-5">
          <button className="text-[#334155] text-sm">Sign In</button>
          <button className="bg-[#D91B7E] text-sm px-5 py-2.5 text-white rounded-full">Sign Up</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
