import type { IStack } from "../types/stackType";

const StackedCards = ({ stack } : {stack: IStack}) => {
  return (
    <div className="p-6 rounded-2xl border border-[#F1F5F9] hover:shadow-lg transition-shadow duration-300">
      <div className="flex flex-col sm:gap-1.5 gap-3">
        <div className="flex justify-between items-center gap-1.5">
          <div className="flex gap-2 items-center">
            <img className="w-8 h-8 object-contain" src={stack.icon} alt={stack.name} />
            <h2 className="sm:hidden block text-base leading-5 font-[Plus Jakarta Sans] font-bold text-[#0F172A]">{stack.name}</h2>
            <span className="font-[Plus Jakarta Sans] text-[11px] font-medium text-[#475569] bg-[#F1F5F9] py-0.5 px-2 rounded">{stack.category}</span>
          </div>
        </div>
      </div>

      <button className="bg-[#0A0F1D] w-full text-xs font-medium px-5 py-2.5 text-white rounded-lg cursor-pointer">Add to Stack</button>
    </div>
  );
};

export default StackedCards;
