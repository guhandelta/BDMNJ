"use client"
import { motion } from 'framer-motion'
import Image from 'next/image'
import Meeting from '@/public/images/financialmeeting.png'
import { DOPCardData1, DOPCardData2 } from '@/constants'
import { AnimatedNumbers } from '@/utils'

// <a href="https://www.flaticon.com/free-icons/process" title="process icons">Process icons created by netscript - Flaticon</a>

const DOPCard = ({ title, src }) => <div className="w-full h-32 text-center mb-16 flex flex-col [&>h2]:text-red-600 [&>h2]:font-bold">
<h2>{title}</h2>
    
    <Image src={src} alt='Data Management' height={108} width={72} className='mx-[37%] my-[5%] opacity-50'  />
</div>

const stats = {
    initial:{
        opacity: 0,
    },
    animate:{
        opacity: 1,
        transition: {
            delay: 3.5,
            staggerChildren: 0.08,
        }
    }
};

const Accomplishments = () => {
    return (

        <div className="grid grid-cols-2 gap-20 w-full h-auto justify-between py-16">

            <div className="col-span-1">
                <Image 
                    src={Meeting}
                    height={0}
                    width={0}
                    alt='meeting'
                    className=''
                />
                <motion.div 
                    className="flex flex-col items-start gap-2 justify-center -mt-[47em] pl-6 "

                    initial="initial"
                    animate="animate"
                >
                    <div className="flex flex-col font-bold pr-4 pb-8">
                        <h1 className='text-[4em] text-gray-600 text-center'>
                            <AnimatedNumbers value={2} />
                            <span className='text-red-600'>
                                <AnimatedNumbers value={4} />
                            </span>
                        </h1>
                        <h3 className='text-gray-600 font-bold text-xl ml-3'>Training Programs</h3>
                    </div>
                    <div className="flex flex-col border-t-2 border-b-2 border-spacing-6 px-6 py-8 border-white">
                        <h1 className='text-[4em] text-gray-200 text-center'>
                            <AnimatedNumbers value={6} />
                            <span className='text-red-600'>K</span>
                        </h1>
                        <h3 className='text-white font-bold text-xl'>Satisfied Clients</h3>
                    </div>
                    <div className="flex flex-col font-bold border-b-2 pl-6 py-8">
                        <h1 className='text-[4em] text-gray-300 text-center'>
                            <AnimatedNumbers value={24} />
                            <span className='text-red-600'>K</span>
                        </h1>
                        <h3 className='text-white  text-xl'>Finished Projects</h3>
                    </div>
                    <div className="flex flex-col font-bold pl-6 pt-6">
                        <h1 className='text-[4em] text-gray-200 text-center'>
                            <AnimatedNumbers value={36} />
                            <span className='text-red-600'>$</span>
                        </h1>
                        <h3 className='text-white  text-xl'>Business Turnover</h3>
                    </div>
                </motion.div>
            </div>

            <div className="flex flex-col -pt-8">
                <h6 className="text-base text-red-500">What We Do</h6>
                <div className="flex">
                    <h1 className='text-5xl text-gray-500 font-bold first-letter:text-7xl first-letter:text-red-500'>Develop</h1>
                    <h1 className='text-5xl text-gray-500 font-bold first-letter:text-7xl first-letter:text-red-500'>Your</h1> &emsp;
                    <h1 className='text-5xl text-gray-500 font-bold first-letter:text-7xl first-letter:text-red-500'>Business</h1>
                </div>
                <h6 className="text-[1.25rem] text-gray-500">Our team of experts brings together a unique blend of technical prowess, strategic thinking, and a deep understanding of the challenges modern businesses face. We specialize in providing comprehensive data management solutions, from data collection and storage to analysis and actionable insights, ensuring that your business is not just data-rich but also insight-driven.</h6>
                <div className="grid grid-cols-2 gap-4 px-6 pt-6 justify-between">
                    <div className="col-span-1">
                        <div className="flex flex-col">
                            {DOPCardData1.map(({ id, title, image}) => <DOPCard key={id} title={title} src={image} />)}
                        </div>
                    </div>
                    <div className="col-span-1">
                        <div className="flex flex-col">
                            {DOPCardData2.map(({ id, title, image}) => <DOPCard key={id} title={title} src={image} />)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Accomplishments