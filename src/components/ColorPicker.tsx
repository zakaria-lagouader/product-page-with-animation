import { useState } from "react";
import { CheckIcon } from "./icons";

function ColorPicker() {
  const [selected, setSelected] = useState(0);
  return (
    <div className="flex items-center space-x-2">
      <div
        onClick={() => setSelected(0)}
        className="bg-slate-600 w-8 h-8 rounded-full text-white grid place-items-center cursor-pointer hover:opacity-80 transition-all"
      >
        {selected === 0 && <CheckIcon />}
      </div>
      <div
        onClick={() => setSelected(1)}
        className="bg-neutral-700 w-8 h-8 rounded-full text-white grid place-items-center cursor-pointer hover:opacity-80 transition-all"
      >
        {selected === 1 && <CheckIcon />}
      </div>
      <div
        onClick={() => setSelected(2)}
        className="bg-black w-8 h-8 rounded-full text-white grid place-items-center cursor-pointer hover:opacity-80 transition-all"
      >
        {selected === 2 && <CheckIcon />}
      </div>
      <div
        onClick={() => setSelected(3)}
        className="bg-green-900 w-8 h-8 rounded-full text-white grid place-items-center cursor-pointer hover:opacity-80 transition-all"
      >
        {selected === 3 && <CheckIcon />}
      </div>
    </div>
  );
}

export default ColorPicker;
