"use client"
import Image from 'next/image'
import React from 'react'

import Cards from '@/components/Cards'
import ServicesImage from '@/public/images/services.png';
import { DOPCardData1, DOPCardData2, ServiceCardProps, ServicesSectionCardData1, ServicesSectionCardData2 } from '@/constants';
import Meeting from '@/public/images/meetings.png'
import { AnimatedNumbers } from '@/utils';

const DOPCard = ({ title, src }) => <div className="w-full h-32 text-center my-16 flex flex-col [&>h1]:text-red-600">
    <h1 className='font-bold text-2xl'>{title}</h1>
    <Image src={src} alt='Data Management' height={148} width={112} className='mx-[37%] my-[5%] opacity-50'  />
</div>

const Services = () => {
    return (
        <div className=" gap-6">
            <Image src={ServicesImage} height={48} width={600} alt="Services" className='w-full h-full mb-6' />
            <h2 className="text-center mt-8 text-[3em] my-8 text-red-600">Discover our services</h2>
            <p className="text-center text-xl mx-[20%] mb-12 font-mono text-gray-500">
            Are you ready to redefine your professional journey and achieve new heights in your career? Our training and staffing agency is here to guide you through the exploration and mastery of the most sought-after skills across a wide range of industries. With our specialized training programs, you will not only enhance your skill set but also build a robust portfolio that opens doors to exciting career opportunities. Let us empower you to transform your work life and embark on a path to success.
            </p>

            <div class="flex flex-col bg-white mx-auto mb-18 p-auto">
                <div class="flex overflow-x-scroll pb-10 no-scrollbar">
                    <div class="flex flex-nowrap lg:ml-40 md:ml-20 ml-10 ">
                        <div class="flex gap-24 px-3">
                            {/*<div class="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"></div>*/}
                            {ServiceCardProps.map(({ id, name, gist, image}) => (
                                <div key={id} class="w-[64em] h-[38em] max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-2xl hover:bg-red-200 hover:text-gray-600 [&>h2]:text-red-600 [&>h2]:hover:text-gray-600 hover:border-4 hover:border-gray-400 hover:border-solid duration-300 ease-in-out">
                                    <h2 className='text-center my-4 font-bold '>{name}</h2>
                                    <p className='px-6 '>{gist}</p>
                                    <Image src={image} height={325} width={325} className='w-full @apply  transition-opacity duration-[0.2s,transform]' alt="Skill Card" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-2 gap-20 w-full h-auto justify-between py-6 -mb-[36em]">

                <div className="col-span-1">
                    <Image 
                        src={Meeting}
                        height={0}
                        width={0}
                        alt='meeting'
                        className='ml-8 py-12 -mb-[13em]'
                    />
                    <div className="flex items-center gap-2 justify-center py8">
                        <div className="flex flex-col font-bold pr-4">
                            <h1 className='text-[4em] text-gray-300 text-center'>
                                <AnimatedNumbers value={2} />
                                <span className='text-red-600'>
                                    <AnimatedNumbers value={4} />
                                </span>
                            </h1>
                            <h3 className='text-white text-2xl'>Training Programs</h3>
                        </div>
                        <div className="flex flex-col border-l-2 border-r-2 border-spacing-6 px-6 border-white">
                            <h1 className='text-[4em] text-gray-300 text-center'>
                                <AnimatedNumbers value={6} />
                                <span className='text-red-600'>K</span>
                            </h1>
                            <h3 className='text-white font-bold text-2xl'>Satisfied Clients</h3>
                        </div>
                        <div className="flex flex-col font-bold pl-6">
                            <h1 className='text-[4em] text-gray-300 text-center'>
                                <AnimatedNumbers value={24} />
                                <span className='text-red-600'>K</span>
                            </h1>
                            <h3 className='text-white text-2xl'>Finished Projects</h3>
                        </div>
                    </div>
                </div>

            <div className="">
                <div className="flex flex-col mt-12">
                    <h6 className="text-base text-red-500">Our Sprcializations</h6>
                    <div className="flex">
                        <h1 className='text-5xl font-bold text-gray-500 first-letter:text-7xl first-letter:text-red-500'>The</h1> &emsp;
                        <h1 className='text-5xl font-bold text-gray-500 first-letter:text-7xl first-letter:text-red-500'>Service</h1>&emsp;
                        <h1 className='text-5xl font-bold text-gray-500 first-letter:text-7xl first-letter:text-red-500'>You</h1>&emsp;
                        <h1 className='text-5xl font-bold text-gray-500 first-letter:text-7xl first-letter:text-red-500'>Want</h1>
                    </div>
                    <h6 className="text-[1.25rem] text-gray-500">Our team of experts brings together a unique blend of technical prowess, strategic thinking, and a deep understanding of the challenges modern businesses face. We specialize in providing comprehensive data management solutions, from data collection and storage to analysis and actionable insights, ensuring that your business is not just data-rich but also insight-driven.</h6>
                    <div className="grid grid-cols-2 gap-4 px-6 pt-6 justify-between">
                        <div className="col-span-1">
                            <div className="flex flex-col">
                                {ServicesSectionCardData1.map(({ id, title, image}) => <DOPCard key={id} title={title} src={image} />)}
                            </div>
                        </div>
                        <div className="col-span-1">
                            <div className="flex flex-col">
                                {ServicesSectionCardData2.map(({ id, title, image}) => <DOPCard key={id} title={title} src={image} />)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        </div>
    )
}

export default Services