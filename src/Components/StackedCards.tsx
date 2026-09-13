import { LiaTimesSolid } from "react-icons/lia";
import type { IStack } from "../types/stackType";

const StackedCards = ({ stack } : {stack: IStack}) => {
  return (
    <div className="p-6 rounded-2xl border border-[#F1F5F9] hover:shadow-lg transition-shadow duration-300">
        <h2 className="font-bold text-base leading-[1.5em] text-[#0F172A] mb-1">Your Stack</h2>
        <p className="text-xs leading-[1.3em] text-[#94A3B8] mb-4">2 Technology Selected</p>
        <div className="flex flex-col gap-12">
            <div className="flex gap-2 items-center justify-between border border-[#E2E8F0] rounded-lg py-2 px-3 mb-3">
                <div className="flex gap-2.5 items-center">
                    <img className="w-9 h-9 object-contain" src={stack.icon} alt={stack.name} />
                    <div className="flex flex-col">
                        <h2 className="text-[13px] leading-[1.5em] font-[Plus Jakarta Sans] font-bold text-[#0F172A]">{stack.name}</h2>
                        <span className="font-[Plus Jakarta Sans] text-[10px] font-bold text-[#94A3B8]">{stack.category}</span>
                    </div>
                </div>
                <LiaTimesSolid className="w-5 h-5 text-[#94A3B8] hover:text-red-400 cursor-pointer" />
            </div>
            <button className="bg-transparent w-full text-xs font-medium px-5 py-2 text-[#D82C20] rounded-lg cursor-pointer border border-[#D82C20]">Remove All</button>
        </div>
    </div>
  );
};

export default StackedCards;
