"use client"
import Link from "next/link"
import { motion } from "framer-motion"

const MotionLink = motion(Link);
const backgroundColor = ["#121212", "rgba(131,58,180,1)","rgba(253,29,29,1)","rgba(252,176,69,1)","rgba(131,58,180,1)", "#121212"];

const Logo = () => {
    return (
    <div className="flex justify-start mt-2">
        <MotionLink 
            className="w-16 h-16 bg-dark text-light border border-solid border-transparent text-2xl font-bold font-serif dark:border-light dark:bg-white dark:text-dark z-10"
            href="/"
            // whileHover={{ 
            //     backgroundColor,
            //     transition: { duration: 1, repeat: Infinity }
            // }}
        ></MotionLink>
    </div>
    )
}

export default Logo