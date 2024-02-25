import React from 'react'
import Image from 'next/image';

import Meeting from '@/public/meeting.png';
import AboutImage from '@/public/AboutImage.png';
import Link from 'next/link';

const About = () => {
    return (
        <div className=''>
            <Image src={AboutImage} height={48} width={600} alt="About" className='w-full h-full mt-4' />
            <div className="flex md:flex-row sm:flex-col">
                <div className="flex flex-col w-full">
                    <Image src={Meeting} height={0} width={0} className='w-screen h-screen scale-110 ml-8 mt-20' alt="meeting" />
                </div>
                <div className="flex flex-col sm:items-center sm:px-[10%] w-[50%] py-[5%] px-[4%] -mt-12">
                    <h3 className="text-center text-5xl text-red-600 -mt-4">ABOUT OUR BUSINESS</h3>
                    <p className="text-center text-gray-600 text-[1.4em] mt2">
                        We&apos;re Business Data Management and here to help your business grow. Since our founding in 2000, we&apos;ve guided countless clients to help them achieve their unique business goals. Using our proven end-to-end methods, we&apos;ll equip you and your organization with a plan to succeed. You can count on our team to give you the best insights for your future.
                        <br />  <br />  
                        Business Data Management offers a wide range of consulting services with the necessary tools and expertise to help grow your business. We partner with our clients from start to finish, focusing on their needs while producing new ideas, developing effective strategies, and designing high-quality and scalable solutions. 
                        <br />
                        <Link className='text-red-600 hover:underline' href='/contact'>Contact us</Link>  to learn more.
                        <br />  
                    </p>
                    <button className="h-12 w-36 items-center"></button>
                </div>
            </div>
        </div>
    )
}

export default About