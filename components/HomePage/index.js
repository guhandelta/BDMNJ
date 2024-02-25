import React from 'react'
import Hero from './Hero'
import Accomplishments from './Accomplishments'
import OurServices from '../OurServices'
import WhyBDM from './WhyBDM'

const index = () => {
    return (
        <div className=" w-full grid grid-cols-1 gap-6">
            <div className=" w-full h-auto mt-0"><Hero /></div>
            <div className=" w-screen h-screen -mt-6"><Accomplishments /></div>
            <div className=" w-screen h-auto py-6"><WhyBDM /></div> 
        </div>
    )
}

export default index