"use client"
import styled from "@emotion/styled"
import Link from 'next/link'
import Meeting from '@/public/images/meeting.png'
import Image from "next/image"

import DataManagement from '@/public/images/datamgmt.png'
import ProjectManagement from '@/public/images/projectmgmt.png'
import BusinessProcessManagement from '@/public/images/businessprocessmgmt.png'
import FinancialManagement from '@/public/images/financialmgmt.png'
import WebDevelopment from '@/public/images/webdevelopment.png'
import BusinesService from '@/public/images/businesservice.png'
import { useState } from "react"

export const Nav = styled("div")`
  & > * {
        margin-left: 1em;
        color: white;
    }
    background: black;
    padding: 1em;
    height: 2em;
    display: flex;
    align-items: center;
`
export const PageBody = styled("div")`
    width: 100%;
    height: 100%;
    padding: 2em;
`

const NavBar = ({ name, number, setServiceCardProp }) => <div className="flex">
    <Link href="#services" className="h-10 w-[12em] col-span-1 mx-6 rounded-full text-center border border-solid border-black">
        <p className="py-[0.35em] text-[1.1em] text-black font-bold font-mono" onClick={() => setServiceCardProp(number)}>{name}</p>
    </Link> 
</div>

const Layout = ({ children, setServiceCardProp }) => {
    return(
        <div>
            <div className="flex">
                {ServiceCardsNav.map(({ name, number }) => <NavBar key={number} name={name} number={number} setServiceCardProp={setServiceCardProp} />)}
            </div>
            <PageBody>{children}</PageBody>
        </div>
    );
}

const ServiceCardsNav = [
    {
        id:1,
        desc: "DATA MANAGEMENT"
    },
    {
        id:2,
        desc: "BUSINESS PROCESS MANAGEMENT"
    },
    {
        id:3,
        desc: "FINANCIAL MANAGEMENT"
    },
    {
        id:4,
        desc: "PROJECT MANAGEMENT"
    },
    {
        id:5,
        desc: "WEBSITE DEVELOPMENT"
    },
    {
        id:6,
        desc: "BUSINESS SERVICES"
    },
];
const ServicesDesc = [
    {
        id:1,
        desc: "DATA MANAGEMENT"
    },
    {
        id:2,
        desc: "BUSINESS PROCESS MANAGEMENT"
    },
    {
        id:3,
        desc: "FINANCIAL MANAGEMENT"
    },
    {
        id:4,
        desc: "PROJECT MANAGEMENT"
    },
    {
        id:5,
        desc: "WEBSITE DEVELOPMENT"
    },
    {
        id:6,
        desc: "BUSINESS SERVICES"
    },
];

const ServiceCardProps =[
    {
        id: 1,
        title: "DATA MANAGEMENT",
        desc: "Data management courses and specializations teach database administration, cloud computing, data governance, and more. Learn skills such as applied machine learning, big data analysis, and data warehousing to propel your career in the IT industry.",
        points: [
            "Mathematics & Statistics Essentials",
            "Data Analytics",
            "Data Management",
            "Data Viszualizaiton with Tableau",
            "Applied Data Science with Python",
            "Machine Learning"
        ],
        image: DataManagement
    },
    {
        id: 2,
        title: "BUSINESS PROCESS MANAGEMENT",
        desc: "Business process management helps organizations leverage processes to achieve their goals and be successful. Once processes are implemented, they must be monitored, evaluated, and optimized to make sure they are still meeting the goals that they were designed to accomplish. ",
        points: [
            "Defining Business Process Management",
            "Reflecting on Processes",
            "Vision Phase",
            "Modeling Phase",
            "Execution Phase",
            "Optimizing Phase"
        ],
        image: ProjectManagement
    },
    {
        id: 3,
        title: "FINANCIAL MANAGEMENT",
        desc: "Finance management merges management and accounting, using the financial management cycle to create strategic plans for clients. Learn about this growing field, the education requirements, and different career paths. ",
        points: [
            "Planning and budgeting",
            "Resource allocation",
            "Operations and monitoring",
            "Evaluation and reporting",
        ],
        image: BusinessProcessManagement
    },
    {
        id: 4,
        title: "PROJECT MANAGEMENT",
        desc: "Get started in the high-growth field of project management with a professional certificate developed by Google. Discover how to manage projects efficiently and effectively, using traditional and agile methods.",
        points: [
            "Foundations of Project Management",
            "Project Initiation: Starting a Successful Project",
            "Project Planning: Putting It All Together",
            "Project Execution: Running the Project",
            "Agile Project Management",
            "Applying Project Management in the Real World",
        ],
        image: FinancialManagement
    },
    {
        id: 5,
        title: "WEB DEVELOPMENT",
        desc: "As a practice, user interface design involves equal parts psychology and programming. UI designers use tools like Sketch and Adobe Illustrator to design web applications that can easily interact with. ",
        points: [
            "Programming with JavaScript",
            "Diving into the world of DOM",
            "Client and the Server",
            "UI Strategies",
            "Responsive Design",
            "UI Frameworks",
        ],
        image: WebDevelopment
    },
    {
        id: 6,
        title: "BUSINESS SERVICES",
        desc: "Learn very personal considerations related to getting to better know yourself better so as to decide if you are ready for the multiple challenges of entrepreneurship. It then deals with creativity in order to provide the right set of tools to find an idea with the right",
        points: [
            "Concept of Scarcity",
            "Specialization & Trade",
            "Supply & Demand",
            "Understanding Markets",
            "When Governance Intervenes",
        ],
        image: BusinesService
    },
];

const ServiceCard = (serviceCardProp) => {
    return(
        <div className="grid grid-cols-2 border border-solid border-black">
            <div className="col-span-1">
                <div className="flex flex-col">
                    <h3 className="font-mono font-bold text-[2.2em] mb-4">{serviceCardProp.title}</h3>
                    <p className="font-mono text-gray-500 text-[0.8em]">{serviceCardProp.desc}</p>
                    <div className="py-6 px-8">
                        <ul className="@apply columns-[2_auto] pt-6">
                            {serviceCardProp.points.map(({ id, desc }) => <li key={id} className="font-mono mb-8  list-disc">{desc}</li>)}
                        </ul>
                    </div>
                </div>
            </div>
            <div className="col-span-1">
                <div className="flex flex-col h-full w-full pl-[5%]">
                    <Image src={serviceCardProp.image} alt="FinancialManagement" layout="contain" className="w-[64em] h-[28em]" height={1520} width={1280} />
                </div>
            </div>
        </div>
    );
}

const OurServices = () => {

    const [serviceCardProp, setServiceCardProp] = useState(ServiceCardProps["datamanagement"]);

    console.log("ServiceCardProps:\t", ServiceCardProps[1]);

    return (
        <div id="services" className="w-full h-auto py-[6em] px-[8em] -mt-[24em] bg-gray-100">
            <div className="grid grid-cols-2 mb-4 border border-solid border-black">
                <div className="flex flex-col">
                    <div className="row-span-1 font-mono text-lg text-red-600">Our Service</div>
                    <div className="row-span-4 h-full font-mono font-bold text-4xl">The Service You Want	</div>
                </div>

                <div className="w-full border border-solid border-black grid grid-cols-4">
                    <div className="col-span-4">
                        <p className="font-mono text-[1.5em] text-start text-gray-500">We don&apos;t want to push our ideas on to customers, we simply want to make what they want.</p>
                    </div>
                </div>
            </div>
            <Layout setServiceCardProp={setServiceCardProp}>
            <div className="grid grid-cols-3 my-6">
                
            </div>
            {/*ServiceCardProps.map(({ id, title, desc, points, image }) => <ServiceCard key={id} title={title}desc={desc}points={points}image ={image }/>)*/}
            </Layout>
        </div>
    )   
}

export default OurServices