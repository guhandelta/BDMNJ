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
        <div className="flex flex-col mb-16">
            <Image src={ServicesImage} height={48} width={600} alt="Services" className='w-full h-full mb-6' />
            <h1 className="text-center text-4xl text-amber-900 font-bold">OUR SERVICES</h1>
            <h4 className="text-center mt-8 text-2xl">Discover our services</h4>
            <p className="text-center mx-[20%] mb-12">
            Backed by a team of experienced professionals, our strategic services meet the needs of all types and sizes of clients - from small startups to large firms - and deliver lasting changes with measurable growth. Please get in touch with us today to learn how Business Data Management can help your future success.
            </p>

            <div className="container m-auto grid grid-cols-3 gap-3 sm:grid-cols-3 sm:gap-2">
                {services.map(({id, name, image, contents, color}) => <Cards key={id} image={image} title={name} contents={contents} color={color} />)}
                {/*<div className="tile bg-teal-500">
                    <h1 className="tile-marker">ONE</h1>
                </div>
                <div className="tile bg-amber-500">
                    <h1 className="tile-marker">TWO</h1>
                </div>
                <div className="tile bg-yellow-500">
                    <h1 className="tile-marker">THREE</h1>
                </div>
                <div className="tile bg-lime-600">
                    <h1 className="tile-marker">FOUR</h1>
                </div>
                <div className="tile bg-green-600">
                    <h1 className="tile-marker">FIVE</h1>
                </div>
                <div className="tile bg-emerald-500">
                    <h1 className="tile-marker">SIX</h1>
                </div>
                <div className="tile bg-teal-500">
                    <h1 className="tile-marker">SEVEN</h1>
                </div>
                <div className="tile bg-purple-500">
                    <h1 className="tile-marker">EIGHT</h1>
                </div>
                <div className="tile bg-pink-500">
                    <h1 className="tile-marker">NINE</h1>
                </div>*/}
            </div>
        </div>
    )
}

export default Services