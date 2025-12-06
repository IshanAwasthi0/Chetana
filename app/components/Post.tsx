import Link from "next/link";
import { Icon } from "@iconify/react";

export default function Post({title, description, location, contact, type} : {title: string, description: string, location: string, contact: string, type: string}) {
    return (
        
        <div className="border-3 border-black w-120 h-130 pt-8 pb-8 px-8 bg-[#FFF7D1] rounded flex flex-col items-center gap-7">
            <h1 className="text-4xl md:text-5xl text-black w-full text-center">{title}</h1>
            <div className="flex flex-col items-center gap-3 w-full">
            <p className="overflow-clip text-justify text-base text-[#726F63] leading-relaxed w-full h-50">
            {description}
            </p>
            <div className="flex flex-col items-center w-full">
                <div className="flex flex-col gap-2 w-full text-black">
                <p className="text-base md:text-xl w-full">{location}</p>
                <p className="text-base md:text-xl w-full">{type}</p>
                </div>
            </div>
            </div>
        </div>
    );
    }
