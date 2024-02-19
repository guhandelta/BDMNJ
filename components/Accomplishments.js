import Image from 'next/image'
import Meeting from '@/public/images/meeting.png'
import DataManagement from '@/public/images/datamgmt.png'
import ProjectManagement from '@/public/images/projectmgmt.png'
import BusinessProcessManagement from '@/public/images/businessprocessmgmt.png'
import FinancialManagement from '@/public/images/financialmgmt.png'
import WebDevelopment from '@/public/images/webdevelopment.png'
import BusinesService from '@/public/images/businesservice.png'
import { DOPCardData1, DOPCardData2 } from '@/constants'

// <a href="https://www.flaticon.com/free-icons/process" title="process icons">Process icons created by netscript - Flaticon</a>


// ]


const DOPCard = ({ title, src }) => <div className="w-full h-32 text-center mb-16 flex flex-col">
{title}
    
    <Image src={src} alt='Data Management' height={108} width={72} className='mx-[37%] my-[5%]'  />
</div>



const Accomplishments = () => {
    return (

        <div className="grid grid-cols-2 gap-20 w-full h-auto justify-between px-8 -mb-[36em]">

                <Image 
                    src={Meeting}
                    height={0}
                    width={0}
                    alt='meeting'
                    className=''
                />

            <div className="">
                <div className="flex flex-col -pt-8">
                    <h6 className="text-base text-red-500">What We Do</h6>
                    <div className="flex">
                        <h1 className='text-5xl font-bold first-letter:text-7xl first-letter:text-red-500'>Develop</h1>
                        <h1 className='text-5xl font-bold first-letter:text-7xl first-letter:text-red-500'>Your</h1> &emsp;
                        <h1 className='text-5xl font-bold first-letter:text-7xl first-letter:text-red-500'>Business</h1>
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
        </div>
    )
}

export default Accomplishments