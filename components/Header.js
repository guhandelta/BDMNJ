"use client"
import Image from 'next/image'
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation'
import { motion } from "framer-motion"

import { MoonIcon, SunIcon } from "./Icons";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { GrMapLocation } from "react-icons/gr";
import BDMLogo from '@/public/images/bdm.png'
import Link from 'next/link';

const CustomLink = ({ href, title, className="" }) => {
    const router = useRouter();
    return (
        <Link href={href} className={`${className} relative group`}>
            {title}
            <span className={`h-[1px] inline-block bg-dark absolute left-0 
            -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 dark:bg-light
            ${router.asPath === href ? 'w-full' : 'w-0'}`}>
                &nbsp;
            </span>
        </Link>
    )
}

const links = [
    {
        id:1,
        label:'Home',
        url:'/'
    },
    {
        id:2,
        label:'About',
        url:'/about'
    },
    {
        id:3,
        label:'Services',
        url:'/services'
    },
    {
        id:4,
        label:'Contact',
        url:'/contact'
    },
];

const CustomAnchor = ({ href, children }) =>(
    <motion.a 
        href={href} 
        target={"_blank"}
        whileHover={{
            y: -8,
            scale: 1.2
        }}
        whileTap={{ scale: 0.9 }}
        className="w-6 mx-4"
    >
        {children}
    </motion.a>
)

const Header = () => {
    const PathName = usePathname();
    PathName && console.log('PathName:\t', PathName);
    PathName && console.log('Edited PathName:\t', PathName.replace('/',''));
    return (
        <header 
            className="w-full h-24 mb-0 px-6 z-20 font-medium flex flex-col bg-white justify-between text-black dark:text-light"
        >
            <div className="md:flex md:flex-row h-8 border-b-2 pt-1 justify-between w-full sm:hidden">
                <div className='flex justify-start'>
                    <div className="flex flow-row gap-2">
                        <FaPhoneAlt className='scale-125' />
                        <p className="text-sm">609.503.9338</p> &nbsp;
                    </div>
                    <a className='text-sm flex flow-row gap-2 border-l-2 border-r-2 border-black px-4' href="mailto:info@bdmnj.com">
                        <MdOutlineEmail className='scale-150 mt-[4px]' />
                        info@bdmnj.com
                    </a> &emsp;
                    <Link target='blank' href='https://maps.app.goo.gl/aeKt44DEf4AXVKss6' className='flex flow-row gap-2'>
                        <GrMapLocation className='scale-125' />
                        <p className='text-sm hover:text-cyan-700 hover:no-underline'>1239 US-130, Robbinsville, NJ</p>
                    </Link> 
                </div>
                <div className="flex justify-end">
                    <p className='text-sm hover:underline hover:text-cyan-700'>FAQ</p>
                </div>
            </div>
            <div className="flex justify-around border-b-2 p-1">
                <div className="top-2 -translate-x-[50%] justify-start flex flex-row">
                    <Link href="/">
                        <Image src={BDMLogo} height={0} width={0} alt="BDMNJ" className='h-14 w-14 mr-1' />
                    </Link>
                    <div className="flex flex-col">
                        <p className='-mt-1 font-bold'>Business</p>
                        <p className='-mt-1 font-bold'>Data</p>
                        <p className='-mt-1 font-bold'>Management</p>
                    </div>
                </div>
            
                <nav className='items-center pl-[20%] -pb-2 my-3 justify-end sm:hidden md:flex md:flow-row'>
                    {links.map(({ id, label, url }) => {
                        console.log("label:\t", label);
                        console.log("url:\t", url);
                        console.log("PathName Edit\t", PathName.replace('/',''));
                        console.log("URL Edit\t", url.replace('/',''));
                        console.log("Comparison\t", PathName.replace('/','') === label.toLowerCase());
                        label === 'Home' && url==='/' && console.log("Home Page");
                        return(
                        <CustomLink 
                            key={id} 
                            href={url} 
                            title={label} 
                            className={`mx-8 ${ PathName.replace('/','') === label.toLowerCase() ?'text-red-600 font-bold text-xl':'text-black'} hover:text-red-600 font-bold `}
                        />
                    )})}
                </nav>
            </div>
            {/*<button
                    onClick={() => setMode(mode === "light" ? "dark" : "light")}
                    className={`ml-3 flex items-center justify-center rounded-full p-1 
                    ${mode==="light" ? "bg-dark text-light" : "bg-light text-dark"}`}
                >
                    {
                        mode === "dark" ?
                            <SunIcon className={"fill-dark"} />
                            :
                            <MoonIcon className={"fill-dark"} />
                    }
                </button>
            </nav> */}

        </header>
    )
}

export default Header