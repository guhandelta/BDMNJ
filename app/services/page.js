import Image from 'next/image'
import React from 'react'

import Cards from '@/components/Cards'
import ServicesImage from '@/public/images/services.png';

const services = [
    {
        id: 1,
        name: "DATA MANAGEMENT",
        contents: [
            "Data Analyst",
            "Data Engineer"
        ],
        image: '/images/dataengg.png',
        color: "bg-amber-500"
    },
    {
        id: 2,
        name: "FINANCIAL MANAGEMENT",
        contents: [
            "Risk Assessment",
            "Regulatory & Compliance"
        ],
        image: '/images/finance.png',
        color: "bg-yellow-500"
    },
    {
        id: 3,
        name: "IT BUSINESS ANALYSIS & PROJECT MANAGEMENT",
        contents: [
            "Business Analysis", 
            "Project Management"
        ],
        image: '/images/pm.png',
        color: "bg-lime-600"
    },
    {
        id: 4,
        name: "BUSINESS PROCESS MANAGEMENT",
        contents: [
            "Mortgage Processing", 
            "Medical Billing"
        ],
        image: '/images/bpm.png',
        color: "bg-green-600"
    },
    {
        id: 5,
        name: "WEB DEVELOPMENT",
        contents: [
            "ReactJS, NextJS, Astro, Svelte, Qwik....",
            "NodeJS, Bun, Java, Python...",
            "Content Management System",
            "Redux, GraphQL, React Query,..."
        ],
        image: '/images/uidev.png',
        color: "bg-emerald-500"
    },
    {
        id: 6,
        name: "BUSINESS SERVICES",
        contents: [
            "Accounting & Bookkeeping",
            "Management Consulting"
        ],
        image: '/images/business.png',
        color: "bg-teal-500"
    },
];

const Services = () => {
    return (
        <div className="flex flex-col gap-6">
            <Image src={ServicesImage} height={48} width={600} alt="Services" className='w-full h-full mb-6' />
            <h1 className="text-center text-4xl text-amber-900 font-bold">OUR SERVICES</h1>
            <h4 className="text-center mt-8 text-2xl">Discover our services</h4>
            <p className="text-center mx-[20%] mb-12">
            Backed by a team of experienced professionals, our strategic services meet the needs of all types and sizes of clients - from small startups to large firms - and deliver lasting changes with measurable growth. Please get in touch with us today to learn how Business Data Management can help your future success.
            </p>

            <div className="container m-auto sm:pl-[10%] sm:gap-6 sm:mt-6 md:grid md:grid-cols-3 gap-1 sm:flex sm:flex-col border border-solid">
                {services.map(({id, name, image, contents, color}) => (
                    <Cards 
                        key={id} 
                        image={image} 
                        title={name} 
                        contents={contents} 
                        color={color} 
                    />
                ))}
            </div>
        </div>
    )
}

export default Services