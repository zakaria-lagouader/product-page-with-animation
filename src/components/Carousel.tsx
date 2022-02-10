import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';
import { ArrowLeftIcon, ArrowRightIcon } from './icons';

const images = [
  "https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  "https://images.pexels.com/photos/45981/pexels-photo-45981.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  "https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  "https://images.pexels.com/photos/45981/pexels-photo-45981.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
]

function Carousel() {
  const [index, setIndex] = React.useState(0)
  const next = () => {
    setIndex(i => i + (i < images.length - 1 ? 1 : 0) )
  }
  const prev = () => {
    setIndex(i => i - (i > 0 ? 1 : 0) )
  }
  return (
      <div className="h-full bg-gray-100 relative overflow-hidden">
        <AnimatePresence initial={false}>
          <motion.img 
          className="w-full h-full object-contain"
          key={`image-${index}`}
          src={images[index]}
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          alt=""
          />
        </AnimatePresence>
        {/* Carousel Controls */}
        <div className="flex items-center absolute bottom-0 right-0 select-none">
        <div className="p-1 cursor-pointer" onClick={prev}>
          <ArrowLeftIcon />
        </div>
        <p className="font-playfair text-4xl mx-2 mb-3">0{index + 1}</p>
        <p className="font-playfair text-xl mx-2">/ 0{images.length}</p>
        <div className="p-1 cursor-pointer" onClick={next}>
          <ArrowRightIcon />
        </div>
        </div>
      </div>
  )
}

export default Carousel;
