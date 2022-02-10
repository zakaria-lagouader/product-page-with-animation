import { useState } from 'react';
import { MinusIcon, PlusIcon } from './icons';
import { AnimatePresence, motion } from "framer-motion"

function QuantityInput() {
    const [value, setValue] = useState(0);
    const increase = () => setValue(v => v + 1);
    const decrease = () => {
        if (value > 0) {
            setValue(v => v - 1);
        }
    };
    return (
        <div className="bg-gray-100 rounded-3xl flex items-center select-none overflow-hidden">
            <button
                onClick={decrease}
                className="w-10 h-10 grid place-items-center text-gray-500 cursor-pointer">
                <MinusIcon />
            </button>
            <AnimatePresence initial={false}>
                <motion.span 
                    key={value}
                    initial={{ y: -100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    className="px-3 text-sm font-bold"
                >
                {value}
                </motion.span>
            </AnimatePresence>
            <button
                onClick={increase}
                className="w-10 h-10 grid place-items-center text-gray-500 cursor-pointer">
                <PlusIcon />
            </button>
        </div>
    );
}

export default QuantityInput;
