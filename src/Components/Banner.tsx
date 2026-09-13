import Image from "../assets/banner-stack.png";

const Banner = () => {
    return (
        <div className="w-full px-[4vw] sm:py-24 py-10">
            <div className="max-w-305 mx-auto flex sm:flex-row flex-col gap-8">
                <div className="sm:w-3/5 w-full flex flex-col justify-center">
                    <h1 className="lg:text-6xl sm:text-5xl text-3xl sm:text-left text-center font-extrabold leading-[1em] tracking-[-1.5px] font-[Inter]">Build Your Ideal <span className="brand-gradient bg-clip-text text-transparent">Development Stack</span></h1>
                    <p className="lg:text-lg sm:text-base text-sm sm:text-left text-center leading-[1.5em] text-[#64748B] mt-4 max-w-145">
                        Explore frontend, backend, database, and tooling options, compare them side by side, and put together the stack that fits your next project.
                    </p>
                    <div className="flex gap-2.5 mt-3 sm:justify-start justify-center">
                        <button className="brand-gradient text-sm p-3 text-white rounded-lg mt-6 cursor-pointer">Explore Technologies</button>
                        <button className="bg-transparent border border-[#E5E7EB] text-sm py-3 px-11 text-[#374151] rounded-lg mt-6 cursor-pointer">Learn More</button>
                    </div>
                </div>
                <div className="sm:w-2/5 w-full"><img src={Image} alt="Banner" className="w-full h-full object-contain" /></div>
            </div>
        </div>
    );
};

export default Banner;