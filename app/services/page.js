import Image from 'next/image'
import React from 'react'

import Cards from '@/components/Cards'
import ServicesImage from '@/public/images/services.png';
import { DOPCardData1, DOPCardData2, ServicesSectionCardData1, ServicesSectionCardData2 } from '@/constants';
import Meeting from '@/public/images/meeting.png'

const ServiceCardProps = [
    {
        id: 1,
        name: "DATA MANAGEMENT",
        gist: "Elevate your skills with our training programs in data handling, storage, security, & analysis to improve data accuracy & integrity, offering practical insights on data accuracy, accessibility, & integrity, empowering you to make data-driven decisions & optimize business operations.",
        image: '/images/dataengg.png',
        color: "bg-amber-500"
    },
    {
        id: 2,
        name: "FINANCIAL MANAGEMENT",
        gist: "Designed for aspiring finance professionals, to dive into the critical aspects of financial planning, analysis, and control. Learn to navigate financial markets, understand investment strategies, and master budgeting and forecasting techniques. ",
        image: '/images/finance.png',
        color: "bg-yellow-500"
    },
    {
        id: 3,
        name: "IT BUSINESS ANALYSIS & PROJECT MANAGEMENT",
        gist: "Unlock the Gateway to Business Transformation with our IT Business Analysis & Project Management Training Program to learn the skills and methods to bridge business needs & solutions while mastering the art of managing projects from inception to completion.",
        image: '/images/pm.png',
        color: "bg-lime-600"
    },
    {
        id: 4,
        name: "BUSINESS PROCESS MANAGEMENT",
        gist: "Master the art of efficiency with our Business Process Management course. Learn to streamline operations, enhance agility, and drive growth through innovative strategies and analytics. Transform your business processes for peak performance.",
        image: '/images/bpm.png',
        color: "bg-green-600"
    },
    {
        id: 5,
        name: "WEB DEVELOPMENT",
        gist: "Master web development through our training program, covering HTML, CSS, JavaScript, and modern frameworks. From basics to advanced techniques, you'll learn to build responsive, dynamic websites and applications, preparing you for a successful career.",
        image: '/images/uidev.png',
        color: "bg-emerald-500"
    },
    {
        id: 6,
        name: "BUSINESS SERVICES",
        gist: "Explore the world of Business Services with our coursework, designed to equip you with key skills & insights to excel in the business operations. From strategic planning to customer service, learn to drive growth and efficiency in any organization.",
        image: '/images/business.png',
        color: "bg-teal-500"
    },
];

const DOPCard = ({ title, src }) => <div className="w-full h-32 text-center my-16 flex flex-col">
    <h1 className='font-mono font-bold text-xl'>{title}</h1>
    <Image src={src} alt='Data Management' height={108} width={72} className='mx-[37%] my-[5%]'  />
</div>

const Services = () => {
    return (
        <div className=" gap-6">
            <Image src={ServicesImage} height={48} width={600} alt="Services" className='w-full h-full mb-6' />
            <h2 className="text-center mt-8 text-2xl font-mono my-8">Discover our services</h2>
            <p className="text-center text-xl mx-[20%] mb-12 font-mono">
            Are you ready to redefine your professional journey and achieve new heights in your career? Our training and staffing agency is here to guide you through the exploration and mastery of the most sought-after skills across a wide range of industries. With our specialized training programs, you&apos;ll not only enhance your skill set but also build a robust portfolio that opens doors to exciting career opportunities. Let us empower you to transform your work life and embark on a path to success.
            </p>

            <div class="flex flex-col bg-white mx-auto mb-18 p-auto">
                <div class="flex overflow-x-scroll pb-10 no-scrollbar">
                    <div class="flex flex-nowrap lg:ml-40 md:ml-20 ml-10 ">
                        <div class="flex gap-24 px-3">
                        {/*<div class="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"></div>*/}
                            {ServiceCardProps.map(({ id, name, gist, image}) => (
                                <div key={id} class="w-[64em] h-[38em] max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-2xl hover:bg-red-600 hover:text-gray-200 duration-300 ease-in-out">
                                    <h2 className='text-center my-4 font-bold font-mono'>{name}</h2>
                                    <p className='px-6 font-mono'>{gist}</p>
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
                        <div className="flex flex-col font-bold font-mono pr-4">
                            <h1 className='font-mono text-[3em] text-gray-500 text-center'>2<span className='text-red-600'>4</span></h1>
                            <h3 className='text-white font-mono text-base'>Training Programs</h3>
                        </div>
                        <div className="flex flex-col border-l-2 border-r-2 border-spacing-6 px-6 border-white">
                            <h1 className='font-mono text-[3em] text-gray-500 text-center'>6<span className='text-red-600'>K</span></h1>
                            <h3 className='text-white font-mono font-bold text-base'>Satisfied Clients</h3>
                        </div>
                        <div className="flex flex-col font-bold font-mono pl-6">
                            <h1 className='font-mono text-[3em] text-gray-500 text-center'>24<span className='text-red-600'>K</span></h1>
                            <h3 className='text-white font-mono  text-base'>Finished Projects</h3>
                        </div>
                    </div>
                </div>

            <div className="">
                <div className="flex flex-col mt-12">
                    <h6 className="text-base text-red-500">What We Do</h6>
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