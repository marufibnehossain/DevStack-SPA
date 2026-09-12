import type { IStack } from "../types/StackType";

const StackCard = ({ stack } : {stack: IStack}) => {
    return (
        <div className="p-6 rounded-lg border border-gray-200 shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="flex justify-between items-center gap-1.5">
                <img className="w-7 h-7" src={stack.icon} alt={stack.name} />
                <span>{stack.badge}</span>
            </div>
            <h2 className="text-lg font-semibold mt-2">{stack.name}</h2>
            <p className="text-gray-600 mt-1">{stack.description}</p>
            <div className="flex justify-between items-center mt-2">
                <span className="text-sm text-gray-500">{stack.category}</span>
                <span className="text-sm text-gray-500">{stack.difficulty}</span>
                <span className="text-sm text-gray-500">Rating: {stack.rating}</span>
            </div>
            <button className="bg-[#0A0F1D] text-sm px-5 py-2.5 text-white rounded-full cursor-pointer mt-4">Add to Stack</button>
        </div>
    );
};

export default StackCard;