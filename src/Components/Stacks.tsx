import { use } from 'react';
import type { IStack } from '../types/stackType';
import StackCard from './StackCard';

const Stacks = ({ promise }: {promise: Promise<IStack[]>}) => {
    const stacks = use(promise);
    return (
        <div className="w-full px-[4vw] sm:pb-25 pb-10">
            <div className='max-w-305 mx-auto'>
                <div className="sm:w-3/5 w-full flex flex-col justify-center gap-2 sm:mb-10 mb-5">
                    <h1 className="lg:text-4xl sm:text-3xl text-2xl sm:text-left text-center font-bold leading-[1.2em] tracking-[-1.5px] font-[Inter]">Explore the <span className="bg-linear-[to_right,#EC4899_0%,#8B5CF6_100%] bg-clip-text text-transparent">Technologies</span></h1>
                    <p className="sm:text-base text-sm sm:text-left text-center leading-[1.5em] text-[#64748B]">
                        Pick one technology per category to build your ideal stack.
                    </p>
                </div>
                <div className='w-3/4 grid sm:grid-cols-2 lg:grid-cols-3 gap-5'>                    
                    {stacks.map((stack) => (
                        <StackCard key={stack.name} stack={stack} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Stacks;