import { FaStar } from "react-icons/fa6";
import type { IStack } from "../types/stackType";
import { toast } from "react-toastify";

const badgeStyles: Record<string, string> = {
  Popular: "text-[#0EA5E9] bg-[#F0F9FF] border-[#E0F2FE]",
  Versatile: "text-[#059669] bg-[#ECFDF5] border-[#D1FAE5]",
  Fast: "text-[#EA580C] bg-[#FFF7ED] border-[#FFEDD5]",
  "SSR / Edge": "text-[#7E22CE] bg-[#F3E8FF] border-[#F3E8FF]",
  Standard: "text-[#059669] bg-[#ECFDF5] border-[#D1FAE5]",
  "Top SQL": "text-[#2563EB] bg-[#EFF6FF] border-[#DBEAFE]",
  Cache: "text-[#DC2626] bg-[#FEF2F2] border-[#FEE2E2]",
  Ubiquitous: "text-[#D97706] bg-[#FFFbeb] border-[#FEF3C7]",
  Essential: "text-[#0284C7] bg-[#F0F9FF] border-[#E0F2FE]",
  Robust: "text-[#0284C7] bg-[#F0F9FF] border-[#E0F2FE]",
  Modern: "text-[#0891B2] bg-[#ECFEFF] border-[#CFFAFE]",
  Containers: "text-[#0284C7] bg-[#F0F9FF] border-[#E0F2FE]"
};
const StackCard = ({ stack, handleAddToStack, selectedStacks } : {stack: IStack; handleAddToStack: (stack: IStack) => void; selectedStacks: IStack[]}) => {

    const selected = selectedStacks.some((selectedStack) => selectedStack.id === stack.id);

    return (
        <div className="p-6 rounded-2xl border border-[#F1F5F9] hover:shadow-lg transition-shadow duration-300">
            <div className="flex flex-col sm:gap-1.5 gap-3">
                <div className="flex justify-between items-center gap-1.5">
                    <div className="flex gap-2 items-center">
                        <img className="w-8 h-8 object-contain" src={stack.icon} alt={stack.name} />
                        <h2 className="sm:hidden block text-base leading-5 font-[Plus Jakarta Sans] font-bold text-[#0F172A]">{stack.name}</h2>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs leading-[1.5em] font-[Plus Jakarta Sans] font-semibold border ${badgeStyles[stack.badge] || "text-gray-600 bg-gray-50 border-gray-100"}`}>
                        {stack.badge}
                    </span>
                </div>
                <h2 className="hidden sm:block text-lg leading-7 font-[Plus Jakarta Sans] font-bold mt-1.5 text-[#0F172A]">{stack.name}</h2>
                <p className="font-[Plus Jakarta Sans] text-[#64748B] sm:text-sm text-xs leading-[1.5em] mb-4">{stack.description}</p>
            </div>
            <div className="flex flex-col gap-4 border-t border-[#F8FAFC] pt-3">
                <div className="flex justify-between items-center">
                    <span className="font-[Plus Jakarta Sans] text-[11px] font-medium text-[#475569] bg-[#F1F5F9] py-0.5 px-2 rounded">{stack.category}</span>
                    <span className="font-[Plus Jakarta Sans] text-[11px] font-medium text-[#64748B]">{stack.difficulty}</span>
                    <span className="flex items-center gap-1 font-[Plus Jakarta Sans] text-[11px] leading-[1.5em] font-semibold text-[#334155]"><FaStar className="w-2.5 h-2.5 text-[#FBBF24]" />{stack.rating}</span>
                </div>
                <button className="bg-[#0A0F1D] w-full text-xs font-medium px-5 py-2.5 text-white rounded-lg cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed" disabled={selected} onClick = {() => {handleAddToStack(stack); toast.success(`${stack.name} added to Stack.`);}}> {selected === true ? "✓ Added to Stack" : "Add to Stack"}</button>
            </div>
        </div>
    );
};

export default StackCard;