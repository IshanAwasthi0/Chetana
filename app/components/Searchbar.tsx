import { Icon } from "@iconify/react";

const Sidebar = () => {
    return (
       <div className="absolute top-0  ">
        <form className="mt-9 flex flex-row justify-between items-center w-200 h-16 bg-[#FFECC8] border-3 rounded border-black relative">
          <input type="text" placeholder="Search for Posts.... " className="text-[#726F63] text-2xl w-220 h-18 pl-6 pr-6 focus:outline-0 focus:ring-0"/>
          <button className="absolute right-6 cursor-pointer"><Icon icon="majesticons:search-line" width="35" height="35" color="gray"/></button>
        </form>
       </div>
    )
}

export default Sidebar