import Image from 'next/image'

import JobSearch from '../public/meeting.jpeg';

const Hero = () => {
    return (
        <>
            <div className="flex flex-col h-[75%] border-2 border-solid border-black">
                <div className="grid grid-cols-10 w-full border-black">
                    <div className="col-span-9 h-[60%]">
                        <Image 
                            src={JobSearch} 
                            height={0} 
                            width={0} 
                            layout="contain" 
                            objectFit="contain"
                            style={{ mixBlendMode: "color"}} 
                            className="w-full scale-y-90" 
                            alt="Job Search" 
                        />
                    </div>
                    <div className="col-span-1 h-[72%]">
                        <div className="grid grid-cols-1 col-span-1 grid-rows-12 justify-between w-full h-full -ml-16">
                            <div className="row-span-4 h-[10%] w-full py-[60%]">
                                <p className="text-[14em] font-bold --font-anurati text-red-600">B</p>
                            </div>
                            <div className="row-span-4 h-[10%] w-full py-[40%]">
                                <p className="text-[14em] font-bold --font-anurati text-red-600">D</p>
                            </div>
                            <div className="row-span-4 h-[10%] w-full py-[40%]">
                                <p className="text-[14em] font-bold --font-anurati text-red-600">M</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero