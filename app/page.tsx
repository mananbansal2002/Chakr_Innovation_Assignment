"use client"
import React, { useEffect, useState } from 'react'
import "./tailwind.css";
// import {Button} from "@/components/Button";
import { LuDownload } from "react-icons/lu";
import { CiBookmark } from "react-icons/ci";
import { TbClock2 } from "react-icons/tb";
import { IoLanguage } from "react-icons/io5";
import { MdOutlineTableChart } from "react-icons/md";
import { PiChatCircleFill } from "react-icons/pi";
import { IoMdSearch } from "react-icons/io";
import { CiSettings } from "react-icons/ci";
import { MdTaskAlt } from "react-icons/md";
import { IoPersonOutline } from "react-icons/io5";
import { BsBuildings } from "react-icons/bs";
import { FaRegCalendarTimes } from "react-icons/fa";
import { TfiTicket } from "react-icons/tfi";
import { PiListBullets } from "react-icons/pi";
import { TbBadgeFilled } from "react-icons/tb";
import  {useRouter} from 'next/navigation'
import Allcompanies from '../components/Companies';
import Peoplepage from '../components/Peoplepage'; 


const Page  = () => {
  const router=useRouter();
  const [component,setComponent]=useState<React.ReactNode>(<div style={{width:"85vw",height:"85.5vh",overflowX:"scroll"}}><Allcompanies/></div>)
  const [componentHeading,setComponentHeading]=useState<React.ReactNode>(<div style={{display:"flex"}}><span><BsBuildings style={{marginTop:"0.2rem"}}/></span><span>Companies</span></div>);
  const changeComp=(componentValue:React.ReactNode)=>{
    setComponent(componentValue)
  }

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null; 
  }
  
  return (
    <div style={{display:"flex"}}>
      <div style={{display:"flex",marginTop:"1rem",flexDirection:"column",width:"3vw",height:"100vh",justifyContent:"space-between",borderRight:"0.1rem",borderStyle:"solid"}}>
        <div>
        <span><LuDownload style={{fontSize:"1.25rem",marginTop:"1rem",marginLeft:"0.5rem"}}/></span>
        <span><CiBookmark style={{fontSize:"1.25rem",marginTop:"1rem",marginLeft:"0.5rem"}}/></span>
        <span><TbClock2 style={{fontSize:"1.25rem",marginTop:"1rem",marginLeft:"0.5rem"}}/></span>
        <span><IoLanguage style={{fontSize:"1.25rem",marginTop:"1rem",marginLeft:"0.5rem"}}/></span>
        <span><MdOutlineTableChart style={{fontSize:"1.25rem",marginTop:"1rem",marginLeft:"0.5rem"}}/></span>
        <span><PiChatCircleFill style={{fontSize:"1.25rem",marginTop:"1rem",marginLeft:"0.5rem"}}/></span>
        </div>
      
        <div onClick={()=>router.push('/settings')} style={{cursor:"pointer"}}>
          <span><CiSettings style={{fontSize:"1.25rem",marginBottom:"2rem",marginLeft:"0.5rem"}}/></span>
        </div>
      </div>
      <div style={{width:"15vw",height:"95.5vh",marginTop:"1.5rem"}}>
       <aside style={{display:"flex",flexDirection:"column"}}>
         <div style={{display:"flex", width:"4rem",justifyContent:"space-between",marginLeft:"0.5rem"}}>
            <span><TbBadgeFilled style={{marginTop:"0.3rem"}}/></span>
           <span>Demo</span>
         </div>
         <div style={{display:"flex",flexDirection:"column",marginTop:"3rem"}}>
            <div style={{display:"flex", width:"4.5rem",justifyContent:"space-between",marginLeft:"0.5rem"}}>
            <span><IoMdSearch style={{marginTop:"0.3rem"}}/></span>
            <span>Search</span>
            </div>
            <div style={{display:"flex", width:"4.5rem",justifyContent:"space-between",marginLeft:"0.5rem"}}>
            <span><CiSettings style={{marginTop:"0.3rem"}}/></span>
            <span>Setting</span>
            </div>
            <div style={{display:"flex", width:"3.5rem",justifyContent:"space-between",marginLeft:"0.5rem"}}>
            <span><MdTaskAlt style={{marginTop:"0.3rem"}}/></span>
            <span>Task</span>
            </div>
         </div>
         <div style={{display:"flex",flexDirection:"column",marginTop:"3rem"}}>
          <div style={{display:"flex", width:"4.5rem",justifyContent:"space-between",marginLeft:"0.5rem",cursor:"pointer"}} onClick={()=>{changeComp(<div style={{width:"85vw",height:"85.5vh"}}><Peoplepage/></div>);setComponentHeading(<div style={{display:"flex"}}><span><IoPersonOutline style={{marginTop:"0.2rem"}}/></span><span>People</span></div>)}}>
          <span><IoPersonOutline style={{marginTop:"0.2rem"}}/></span>
          <span>People</span>
          </div>
          <div style={{display:"flex", width:"6.5rem",justifyContent:"space-between",marginLeft:"0.5rem",cursor:"pointer"}} onClick={()=>{changeComp(<div style={{width:"85vw",height:"85.5vh",overflowX:"scroll"}}><Allcompanies/></div>);setComponentHeading(<div style={{display:"flex"}}><span><BsBuildings style={{marginTop:"0.2rem"}}/></span><span>Companies</span></div>)}}>
          <span><BsBuildings style={{marginTop:"0.2rem"}}/></span>
          <span>Companies</span>
          </div>
          <div style={{display:"flex", width:"7.7rem",justifyContent:"space-between",marginLeft:"0.5rem"}}>
          <span><FaRegCalendarTimes style={{marginTop:"0.2rem"}}/></span>
          <span>Opportunities</span>
          </div>
          <div style={{display:"flex", width:"4.7rem",justifyContent:"space-between",marginLeft:"0.5rem"}}>
          <span><TfiTicket style={{marginTop:"0.3rem"}}/></span>
          <span>Tickets</span>
          </div>
          <div style={{display:"flex", width:"5.5rem",justifyContent:"space-between",marginLeft:"0.5rem"}}>
          <span><PiListBullets style={{marginTop:"0.2rem"}}/></span>
          <span>Products</span>
          </div>
          <div style={{display:"flex", width:"4.7rem",justifyContent:"space-between",marginLeft:"0.5rem"}}>
          <span><PiListBullets style={{marginTop:"0.3rem"}}/></span>
          <span>Quotes</span>
          </div>
         </div>
       </aside>
      </div>
        <div>
          <div style={{width:"85vw",height:"10vh"}}>
           {
             componentHeading
           }
          </div>
         {
             component
         }
        </div>
      
    </div>
  )
}

export default Page