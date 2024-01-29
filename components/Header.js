"use client"
import { useRouter } from 'next/navigation';
import Image from 'next/image'
import { motion } from "framer-motion"

import { MoonIcon, SunIcon } from "./Icons";
import Logo from './Logo'
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

    return (
        <header 
            className="w-full px-6 font-medium flex flex-col bg-transparent justify-between text-black dark:text-light"
        >
            <div className="flex flex-row h-12 border-b-2 p-2 justify-between w-full">
                <div className='flex justify-start'>
                    <p className="text-sm">609.503.9338</p> &nbsp;|&nbsp;
                    <a className='text-sm' href="mailto:info@bdmnj.com">info@bdmnj.com</a> &nbsp;|&nbsp;
                    <Link href='https://maps.app.goo.gl/aeKt44DEf4AXVKss6'>
                        <p className='text-sm hover:underline hover:text-cyan-700'>1239 US-130, Robbinsville, NJ</p>
                    </Link> 
                </div>
                <div className="flex justify-end">
                    <p className='text-sm hover:underline hover:text-cyan-700'>FAQ</p>
                </div>
            </div>
            <div className="flex border-b-0 justify-around">
                <div className="top-2 -translate-x-[50%] justify-start scale-110">
                    <Logo />
                </div>
            
                <nav className='items-center pl-[20%] -pb-2 my-3 justify-end'>
                    {links.map(({ id, label, url }) => (
                        <CustomLink key={id} href={url} title={label} className="mx-8" />
                    ))}
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
        // <div className="flex flex-col h-16 px-24 mb-6 w-full bg-transparent justify-between bg-slate-200 text-black">
            // <div className="flex flex-row h-12 border-b-2 p-4">
            //     <p className="text-sm">609.503.9338 </p> &nbsp;|&nbsp;
            //     <a className='text-sm' href="mailto:info@bdmnj.com">info@bdmnj.com</a> &nbsp;|&nbsp;
            //     <Link href='https://maps.app.goo.gl/aeKt44DEf4AXVKss6'>
            //         <p className='text-sm hover:underline hover:text-cyan-700'>1239 US-130, Robbinsville, NJ</p>
            //     </Link> 
            // </div>

        //     <div className="flex flex-row">
        //         <Image src={BDM} className='sm:w-12 sm:h-12 h-16 w-16 ml-4 my-2' alt='BDMNJ' />
        //         <Link href='/'>
        //             <h2 className="font-bold text-xl ml-4 my-4 tracking-wider">BUSINESS DATA MANAGEMENT</h2>
        //         </Link> 
            
        //         {
        //             links.map(({ id, label, url }) => (
        //                 <li className='list-none' key={id}>
        //                     <Link className='mx-4 md:flex my-6 text-l hover:underline' href={url}>{label}</Link> 
        //                 </li>
        //             ))
        //         }
        //         {/*<li className='list-none'>
        //             <Link className='mx-4 md:flex my-4 text-xl hover:font-bold' href='/about'>About</Link> 
        //         </li>
        //         <li className='list-none'>
        //             <Link className='mx-4 md:flex my-4 text-xl hover:font-bold' href='/services'>Services</Link> 
        //         </li>
        //         <li className='list-none'>
        //             <Link className='mx-4 md:flex my-4 text-xl hover:font-bold' href='/contact'>Contact</Link> 
        //         </li>*/}
        //     </div>

        // </div>
    )
}

export default Header