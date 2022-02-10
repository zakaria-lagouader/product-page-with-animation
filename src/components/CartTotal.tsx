import React from "react"

function CartTotal(props: any, ref: React.LegacyRef<HTMLDivElement>) {
  return (
    <div ref={ref} className="w-full h-[55px] absolute bottom-0 left-0 bg-white border-t-2 border-t-gray-200">
        <div className="max-w-[800px] w-full h-full mx-auto flex items-center justify-between">
            <p className="text-sm text-gray-300">Read our policy</p>
            <button className="bg-gray-800 hover:bg-gray-700 text-xs text-white font-bold font-playfair py-3 px-12 rounded-3xl tracking-wider transition-all">
                CHECKOUT
            </button>
            <div className="text-lg">
              <span className="mr-2">Total :</span>
              <span className="font-bold">$799</span>
            </div>
        </div>
    </div>
  )
}

export default React.forwardRef(CartTotal)