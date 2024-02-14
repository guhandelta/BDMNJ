import React from 'react'

const OurServices = () => {
    return (
        <div className="w-full h-full p-[6em] bordder border-solid border-black">
            <div className="flex flex-row">
                <div className="flex flex-col">
                    <div className="row-span-1 border border-solid border-green-700">Our Service</div>
                    <div className="row-span-4 h-full border border-dotted border-red-700">The Service You Want	</div>
                </div>
            </div>
            <div className="flex flex-col">
                <div className="flex flex-row gap-4">
                    <div className="row-span-1/4">
                        <hr className='rotate-90 w-24 h-4 bl' />
                    </div>
                    <div className="row-span-5/4">TWe don&apos;t want to push our ideas on to customers, we simply want to make what they want.</div>
                </div>
            </div>
        </div>
    )   
}

export default OurServices