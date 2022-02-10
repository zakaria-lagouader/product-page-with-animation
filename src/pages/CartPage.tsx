import { motion } from "framer-motion";
import CartItem from "../components/CartItem";
import CartTotal from "../components/CartTotal";

const AnimatedCartItem = motion(CartItem);
const AnimatedCartTotal = motion(CartTotal);

function CartPage() {
  return (
    <div className="page-height bg-white p-4 relative pb-20 overflow-hidden">
      <motion.h1
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ easings: "easeInOut", duration: 0.4 }}
        className="font-playfair font-bold text-5xl text-center my-8">
        Shoping Cart
      </motion.h1>
      <div className="max-w-[800px] w-full mx-auto">
        <div className="space-y-4">
          {[1, 2, 3].map((_, i) => (
            <AnimatedCartItem
              key={`cart-${i}`}
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ easings: "easeInOut", duration: 0.4, delay: 0.2 + (i * 0.1) }}
            />
          ))}
        </div>
      </div>
      <AnimatedCartTotal
        initial={{ y: 60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ easings: "easeInOut", duration: 0.5, delay: 0.7 }}
      />
    </div>
  );
}

export default CartPage;
