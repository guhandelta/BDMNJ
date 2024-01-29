import { Header } from "@/components";
import Image from "next/image";

import JobSearch from '../public/job_search.png';

export default function Home() {
  return (
    <>

    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="flex flex-row h-24 w-full">
        <div className="flex flex-col w-[55%]">
            <Image src={JobSearch} height={800} width={800} className="object-cover scale-110 mt-6" alt="Job Search" />
        </div>
        <div className="flex flex-col w-[50%] text-center pt-[20%]">
          <p className="text-5xl font-bold text-black">BUSINESS DATA MANAGEMENT:</p>
          <p className="text-5xl font-bold text-green-500">GLOBAL SOLUTIONS</p>
          <p className="text-2xl text-green-500">Specialized Consulting</p>
        </div>
      </div>
    </main>
    </>
  );
}
