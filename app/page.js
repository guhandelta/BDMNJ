import { Header } from "@/components";
import Image from "next/image";

import { HomePage } from "@/components";

export default function Home() {
  return (
    <>
      <HomePage />
      { /*<div className="flex h-full flex-col">
        <span className="flex flex-row h-full w-full">
        
        <div className="flex flex-col items-end w-full text-left h-full border border-solid border-black">
          <Image 
            src={JobSearch} 
            height={0} 
            width={0} 
            layout="fill" 
            objectFit="fill"
            style={{ mixBlendMode: "color", marginLeft: '-8', }} 
            className="w-full h-full mt-6" 
            alt="Job Search" 
          />
              <div className=""></div>
              <div className=""></div>
              <div className=" text-center h-full">
                <p className="text-7xl font-bold text-red-600">BUSINESS</p> <br />
                <p className="text-7xl font-bold text-red-600">DATA</p> <br />
                <p className="text-7xl font-bold text-red-600">MANAGEMENT</p> <br />
                <p className="text-5xl text-left font-bold text-red-600">GLOBAL SOLUTIONS</p> <br />
                <p className="text-2xl text-red-600 text-center">Specialized Consulting</p>
              </div>
            </div>
        </span>
      </div>*/}
    </>
  );
}
