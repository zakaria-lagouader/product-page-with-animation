import React from "react"
import { XIcon } from "./icons"

function CartItem(props: any, ref: React.LegacyRef<HTMLDivElement>) {
  return (
    <div ref={ref} className="flex items-center py-4 space-x-4 border-b-2 border-b-gray-100">
        <div className="hover:bg-gray-100 transition-all rounded-lg p-2 cursor-pointer">
            <XIcon />
        </div>
        <img 
        className=" w-20 h-20 object-cover"
        src="https://images.pexels.com/photos/5625123/pexels-photo-5625123.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" 
        alt="" 
        />
        <div>
            <p className="font-bold font-playfair text-lg mb-2">Waxed Canvas Messenger Bag</p>
            <p className="text-gray-400 text-sm">Wemen's clothing</p>
        </div>
        <div className="flex-1"></div>
        <div className="space-x-2">
            <label className="text-xs font-playfair">QTY</label>
            <input type="number" className="py-2 border border-gray-200 w-10 text-center hide-arrows" defaultValue={1} />
        </div>
        <p className="font-bold text-xl">$300</p>
    </div>
  )
}

export default React.forwardRef(CartItem);