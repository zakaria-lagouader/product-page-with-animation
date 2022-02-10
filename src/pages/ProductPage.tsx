import { motion } from 'framer-motion';
import AddToCartButton from '../components/AddButton';
import Carousel from '../components/Carousel';
import ColorPicker from '../components/ColorPicker';
import QuantityInput from '../components/QuantityInput';

function ProductPage() {
  return (
    <div className="page-height grid grid-cols-2 overflow-hidden">
      <motion.div
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ easings: "easeInOut", duration: 0.6 }}
        className="p-2">
        <Carousel />
      </motion.div>
      <motion.div
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ easings: "easeInOut", duration: 0.6 }}
        className="text-center flex flex-col items-center justify-center relative"
      >
        <h1 className="text-4xl font-playfair font-bold">Waxed Canvas <br /> Messenger Bag</h1>
        <p className="text-sm text-gray-400 my-3">Wemen </p>
        <p className="text-3xl pb-4">$399</p>
        <div className="w-10 h-1 bg-black"></div>
        <p className="text-gray-400 text-sm w-2/3 my-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, dolorum in sint, ad inventore tempore excepturi laborum optio temporibus, neque cum dolor vitae met consectetur adipisicing elit. Error dolor sit amet co.
        </p>
        <div className="mb-6">
          <p className="text-xs font-bold tracking-wider mb-2">CHOOSE YOUR COLOR</p>
          <ColorPicker />
        </div>
        <div className="mb-12">
          <p className="text-xs font-bold tracking-wider mb-2">QUANTITY</p>
          <QuantityInput />
        </div>
        <AddToCartButton />

        <div className="absolute bottom-0 left-0 w-full flex items-center justify-between p-4">
          <a href="#" className="font-playfair text-xs p-2 border-b-2 border-b-black uppercase">Details</a>
          <a href="#" className="font-playfair text-xs p-2 text-gray-300 uppercase hover:text-black transition-all">Features</a>
          <a href="#" className="font-playfair text-xs p-2 text-gray-300 uppercase hover:text-black transition-all">Shipping</a>
          <a href="#" className="font-playfair text-xs p-2 text-gray-300 uppercase hover:text-black transition-all">Instroctions</a>
        </div>
      </motion.div>
    </div>
  )
}

export default ProductPage;
