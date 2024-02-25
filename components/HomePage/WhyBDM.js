import Image from 'next/image'
import React from 'react'

import LionMale from '@/public/LionMale1.png';
import BG from '@/public/bg.png';
// import LionMale2 from '@/public/LionMale2.png';

const CardsData = [
    {
        id: 1,
        title: "Business Transformation",
        gist: "We help you transform your business",
        icon: "icon"
    },
    {
        id: 2,
        title: "Business Transformation",
        gist: "We help you transform your business",
        icon: "icon"
    },
    {
        id: 3,
        title: "Business Transformation",
        gist: "We help you transform your business",
        icon: "icon"
    },
];

const WhyBDM = () => {
    return (
        <div className="h-auto w-full boder border-dashed border-red">
            <div className="grid grid-cols-1 grid-rows-1">
                <div className="w-full h-[40%] flex justify-center items-center">
                    <p className="text-6xl text-red-600 font-bold">
                    <span className='text-gray-500'>Why</span> BDM?</p>
                </div>
                <div className="w-full h-[60%] flex justify-center items-center">
                    <p className="text-2xl font-semibold">We are a team of professionals with a passion for helping businesses grow. We provide a wide range of services to help businesses grow and succeed.</p>
                </div>
                <div className="my-6 h-[44em] flex bg-black">
                    <div className="flex items-center w-full">
                        <div className="pl-[5%]">
                            <Image src={LionMale} alt="Why BDM" className='w-auto h-auto mx-20 -mt-[12em] scale-125' width={1920} height={750} />
                        </div>
                        <Image src={BG} alt="Why BDM" className='w-[85%] h-[44em]' width={1920} height={500} />
                    </div>
                </div>
                <div className=" w-full grid grid-cols-2 bg-transparent py-[2%] -mt-[44em]">
                    <div className="col-span-1"></div>
                    <div className="col-span-1">
                        <h1 className="text-center text-[2em] text-white font-bold">Why BDM</h1><br />
                        <h3 className="text-center text-[1.6em] text-white font-bold">BDM helps enterprises succeed in driving Business and digital transformation</h3><br />
                        <div className="px-16">
                            <p className='text-center text-[1.4em] text-white'>We specialize in training candidates for with the skills needed to navigate today's business landscape. In a world where organizations are often overwhelmed by the demands of technology adoption and cultural change, we provide comprehensive management training programs to ensure your team stays focused on building and maintaining a strong digital infrastructure. With BDM, empower your leaders to confidently drive sustainable growth and align every initiative with your organization's goals.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-9 gap-[6em] -mt-[17em]">
                    {/*<div className="h-[12em] w-[24em] border border-dashed border-white float-end">
                    <div className="col-span-1"></div>*/}
                    <div className="col-span-1"></div>
                    <div className="col-span-6">
                        <div className="grid grid-cols-3 gap-6">
                            {CardsData.map(({ id, title, gist, icon }) => (
                                <div key={id} className="grid grid-cols-5 h-[13em] p-[4%] bg-white rounded-md text-gray-500 hover:border-b-red-600 transition duration-300 ease-in">
                                    <div className="col-span-1 pt-4">{icon}</div>
                                    <div className="col-span-4 flex flex-col gap-4">
                                        <h1 className="text-[1.2em] text-gray-500 font-bold">{title}</h1>
                                        <p className="text-[1em] text-gray-500">{gist}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="col-span-1"></div>
                    {/*</div>*/}
                </div>
            </div>
        </div>
    )
}

export default WhyBDM