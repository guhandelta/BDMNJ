import React from 'react'
import Hero from './Hero'
import Accomplishments from './Accomplishments'
import OurServices from './OurServices'

const HomePage = () => {
    return (
        <div className=" w-full grid grid-cols-1 grid-rows-3 gap-6">
            <div className=" w-full h-[40%]"><Hero /></div>
            <div className=" w-full h-[40%]"><Accomplishments /></div>
            {/*<div className=" w-full h-[40%]"><OurServices /></div> */}
        </div>
    )
}

export default HomePage