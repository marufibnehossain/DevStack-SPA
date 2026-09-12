import { use } from 'react';
import type { IStack } from '../types/StackType';
import StackCard from './StackCard';

const Stacks = ({ promise }: {promise: Promise<IStack[]>}) => {
    const stacks = use(promise);
    return (
        <div className="w-full px-[4vw] py-24">
            <div className='max-w-305 mx-auto'>
                <div className='w-3/4 grid sm:grid-cols-2 lg:grid-cols-3 gap-8'>                    
                    {stacks.map((stack) => (
                        <StackCard key={stack.name} stack={stack} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Stacks;