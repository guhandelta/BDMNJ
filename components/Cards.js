import Image from 'next/image'
import React from 'react'

const Cards = ({ image, title, contents, color }) => {
    return (
        <div className={`flex flex-col w-3/4 items-center h-full ${color} pb-8`}>
            <Image src={image} height={90} width={300} alt={title} className='w-full h-full' />
            
            <h3 className="text-center md:text-xl sm:text-md font-bold hover:underline mt-2 mb-4">{title}</h3>
            <ul className="flex flex-col gap-y-2 items-center justify-center h-6 list-disc">
                {contents.map((content, i) => <li className='w-full sm:text-xs md:text-lg' key={i}>{content}</li> )}
            </ul>
        </div>
    )
}

export default Cards