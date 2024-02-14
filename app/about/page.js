import React from 'react'
import Image from 'next/image';

import Meeting from '@/public/meeting.png';
import AboutImage from '@/public/AboutImage.png';

const About = () => {
    return (
        <div className=''>
            <Image src={AboutImage} height={48} width={600} alt="About" className='w-full h-full' />
            <div className="flex md:flex-row sm:flex-col">
                <div className="flex flex-col w-full">
                    <Image src={Meeting} height={800} width={800} className='w-full scale-y-105 mt-5' alt="meeting" />
                </div>
                <div className="flex flex-col sm:items-center sm:px-[10%] w-[50%] py-[5%] px-[8%]">
                    <h3 className="text-center text-5xl text-lime-400 mb-4">ABOUT OUR BUSINESS</h3>
                    <p className="text-center text-black text-l">
                        We’re Business Data Management, and we’re here to help your business grow. Since our founding in 2000, we’ve guided countless clients to help them achieve their unique business goals. Using our proven end-to-end methods we’ll equip you and your organization with a plan to succeed. You can count on our team to give you the best insights towards your future.
                        <br />  <br />  
                        Business Data Management offers a wide range of consulting services with the necessary tools and expertise to help grow your business. We partner with our clients from start to finish, focusing on their needs while producing new ideas, developing effective strategies and designing high quality and scalable solutions. Contact us to learn more.
                        <br />  
                    </p>
                    <button className="h-12 w-36 items-center"></button>
                </div>
            </div>
        </div>
    )
}

export default About