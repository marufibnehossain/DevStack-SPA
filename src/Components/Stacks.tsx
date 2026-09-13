import { use, useState } from "react";
import type { IStack } from "../types/stackType";
import StackCard from "./StackCard";
import StackedCards from "./StackedCards";
import { toast } from "react-toastify";

const Stacks = ({ promise }: { promise: Promise<IStack[]> }) => {
  const stacks = use(promise);

  const [selectedStacks, setSelectedStacks] = useState<IStack[]>([]);
  const handleAddToStack = (stack: IStack) => {
    setSelectedStacks([...selectedStacks, stack]);
};

    const handleRemoveStack = (stack: IStack) => {
        const remainingStacks = selectedStacks.filter((item) => item.id !== stack.id);
        setSelectedStacks(remainingStacks);
        toast.success(`${stack.name} removed from Stack.`);
    };

    const handleRemoveAll = () => {
        setSelectedStacks([]);
        toast.success(`All technologies removed from Stack.`)
    }

  return (
    <div className="w-full px-[4vw] sm:pb-25 pb-10">
      <div className="max-w-305 w-full mx-auto">
        <div className="sm:mb-10 mb-6">
            <h1 className="lg:text-4xl sm:text-3xl text-2xl sm:text-left text-center font-bold leading-[1.2em] tracking-[-1.5px] font-[Inter] mb-2">Explore the <span className="bg-linear-[to_right,#EC4899_0%,#8B5CF6_100%] bg-clip-text text-transparent">Technologies</span>
            </h1>
            <p className="sm:text-base text-sm sm:text-left text-center leading-[1.5em] text-[#64748B]">Pick one technology per category to build your ideal stack.</p>
        </div>
        <div className="w-full flex justify-between gap-8 sm:mb-10 mb-5">
          <div className="sm:w-3/4 w-full grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {stacks.map((stack) => (
              <StackCard key={stack.id} stack={stack} handleAddToStack={handleAddToStack} selectedStacks={selectedStacks} />
            ))}
          </div>
          <div className="w-1/4">
            <StackedCards selectedStacks={selectedStacks} handleRemoveStack={handleRemoveStack} handleRemoveAll={handleRemoveAll} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stacks;
