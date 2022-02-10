import { Link } from "react-router-dom";
import { MenuIcon, SearchIcon, ShopIcon } from "./icons";

function Navbar() {
  return (
      <div className="w-full flex items-center px-4 h-[55px] border-b-2 border-b-gray-200 space-x-4">
          <Link to="/product-page-with-animation/" className="font-bold text-2xl tracking-wider">HIDE</Link>
          <div className="flex-1"></div>
          <a href="#" className="text-sm">MY ACCOUNT</a>
          <Link to="/product-page-with-animation/cart">
            <div className="text-sm flex items-center cursor-pointer">
              <ShopIcon />
              <span className="text-sm">(3)</span>
            </div>
          </Link>
          <div className="cursor-pointer">
              <SearchIcon />
          </div>
          <div className="cursor-pointer">
              <MenuIcon />
          </div>
      </div>
  );
}

export default Navbar;
