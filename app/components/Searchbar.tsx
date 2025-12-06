import { Icon } from "@iconify/react";
import React from 'react'

const Sidebar = () => {
    return (
        <form className="flex flex-row justify-between items-center w-220 h-18 bg-[#FFECC8] border-3 rounded border-black relative">
          <input type="text" placeholder="Search for Stories, Poems, Fables... " className="text-[#726F63] text-2xl z-50 w-220 h-18 pl-6 pr-6 focus:outline-0 focus:ring-0"/>
          <button className="absolute right-6 cursor-pointer"><Icon icon="majesticons:search-line" width="35" height="35" color="gray"/></button>
        </form>
    )
}

export default Sidebar