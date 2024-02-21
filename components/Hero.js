
import Image from 'next/image'

import JobSearch from '../public/meeting.jpeg';
import VideoPlayer from './VideoPlayer';

const Hero = () => {
    return (
        <>
            <div className="flex flex-col h-auto border-2">
                <div className="grid grid-cols-10 grid-rows-1 w-full border-black -mb-[24em]">
                    <div className="w-screen h-screen flex flex-col gap-4 text-lg font-semibold justify-center items-center">
                        {/*<Image 
                            src={JobSearch} 
                            height={0} 
                            width={0} 
                            layout="contain" 
                            objectFit="contain"
                            style={{ mixBlendMode: "color"}} 
                            className="w-full scale-y-90" 
                            alt="Job Search" 
                        />*/}
                        <VideoPlayer />
                    </div>
                    <div className="col-span-1 h-[72%] -mt-20 opacity-80">
                        <div className="grid grid-cols-1 col-span-1 grid-rows-12 justify-between w-full h-full -ml-16">
                            {/*<div className="row-span-4 h-[10%] w-full py-[60%]">
                                <p className="text-[14em] font-bold --font-anurati text-red-600">B</p>
                            </div>
                            <div className="row-span-4 h-[10%] w-full py-[40%]">
                                <p className="text-[14em] font-bold --font-anurati text-red-600">D</p>
                            </div>
                            <div className="row-span-4 h-[10%] w-full py-[40%]">
                                <p className="text-[14em] font-bold --font-anurati text-red-600">M</p>
                            </div>*/}
                            <div className="grid grid-rows-4">
                                <div className="grid grid-row-4">


                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero