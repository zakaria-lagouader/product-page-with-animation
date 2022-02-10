import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { CheckIcon } from "./icons";


function AddToCartButton() {
  const [IsAdded, setIsAdded] = useState(false);
  return (
    <button
      onClick={() => setIsAdded((s) => !s)}
      className="bg-gray-800 hover:bg-gray-700 text-sm text-white font-bold font-playfair py-3 px-12 rounded-3xl tracking-wider overflow-hidden transition-all"
    >
      <AnimatePresence initial={false}>
        {IsAdded ? (
          <motion.div
            key="added"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="flex items-center"
          >
            <CheckIcon />
            <span className="ml-2">Added</span>
          </motion.div>
        ) : (
          <motion.div
            key="add"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
          >
            <span>Add To Cart</span>
          </motion.div>
        )}
      </AnimatePresence>
    </button>
  );
}

export default AddToCartButton;
