"use client"
import React, { useState } from 'react'
import { FaUserCircle } from "react-icons/fa";
import { FaRegMap } from "react-icons/fa";
import { RiCalendarEventLine } from "react-icons/ri";
import { MdOutlineEmail } from "react-icons/md";
import { PiBagBold } from "react-icons/pi";
import { CiLinkedin } from "react-icons/ci";
import { FiPhone } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";
import { BsBuildings } from "react-icons/bs";
import { FaRegCalendarTimes } from "react-icons/fa";
import { FaTv } from "react-icons/fa6";
import { RiTaskLine } from "react-icons/ri";
import { TbNotes } from "react-icons/tb";
import { GoPaperclip } from "react-icons/go";
import { Input } from '@/components/input';
import { Button } from '@/components/button';
import './../app/tailwind.css';
interface Arrayobj{
    TaskTitle?:string;
    firstName?:string;
    secondName?:string;
}
const Peoplepage = () => {
   
    const [showComponent,setShowComponent]=useState<Boolean>(false);
    const [tasks,setTasks]=useState<Array<Arrayobj>>([]);
    const [firstname,setFirstname]=useState<String>('');
    const [secondname,setSecondname]=useState<String>('');
    const [taskTitle,setTasktitle]=useState<String>('')

    const toggleComponent=()=>{
        setShowComponent(!showComponent);
    }
   
    const addTask=()=>{
       let newObj={firstName:firstname,secondName:secondname,TaskTitle:taskTitle};
       let newArry=[];
       for(let i=0;i<tasks.length;i++){
          newArry.push(tasks[i]);
       }
       newArry.push(newObj);
       setTasks(newArry)
    }

    const deletetask=(index:string)=>{
        let filteredarray=tasks.filter((idx)=>idx?.TaskTitle!==index);
        setTasks(filteredarray)
    }
 
  return (
    <div>
        <div style={{display:"flex",border:"0.1rem",borderStyle:"solid",borderRadius:"0.5rem"}}>
            <div style={{height:"85.2vh",width:"20rem",display:"flex",flexDirection:"column",borderRight:"0.1rem",borderStyle:"solid"}}>
                <div  style={{height:"15rem",display:"flex",justifyContent:"center",alignItems:"center"}}>
                    <div>
                    <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}><FaUserCircle style={{fontSize:"2rem"}}/></div>
                    <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}><h2>Name Name</h2></div>
                    <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}><span>Added about 20 hours ago</span></div>
                    </div>
                </div>
                <div  style={{height:"15rem",fontSize:"0.8rem",borderTop:"0.1rem",borderStyle:"solid"}}>
                    <table>
                        <tbody>
                            <tr>
                                <th><div style={{display:"flex"}}><FaRegMap style={{marginTop:"0.3rem"}}/>City</div></th>
                                <td><div>West Justin</div></td>
                            </tr>
                            <tr>
                                <th><div style={{display:"flex"}}><RiCalendarEventLine style={{marginTop:"0.3rem"}}/>Creation Date</div></th>
                                <td>May 23,2024,6:00 PM</td>
                            </tr>
                            <tr>
                                <th><div style={{display:"flex"}}><MdOutlineEmail style={{marginTop:"0.2rem"}}/>Email</div></th>
                                <td>mark.young@example.com</td>
                            </tr>
                            <tr>
                                <th><div style={{display:"flex"}}><PiBagBold style={{marginTop:"0.2rem"}}/>Job Title</div></th>
                                <td>Surveyor, minerals</td>
                            </tr>
                            <tr>
                                <th><div style={{display:"flex"}}><CiLinkedin style={{marginTop:"0.2rem"}}/>LinkedIn</div></th>
                                <td>IN logo</td>
                            </tr>
                            <tr>
                                <th><div style={{display:"flex"}}><FiPhone style={{marginTop:"0.2rem"}}/>Phone</div></th>
                                <td>Empty</td>
                            </tr>
                            <tr>
                                <th><div style={{display:"flex"}}><FaXTwitter style={{marginTop:"0.2rem"}}/>X</div></th>
                                <td>Empty</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div  style={{height:"5rem",borderTop:"0.1rem",borderStyle:"solid"}}>
                    <div>Company</div>
                    <div style={{display:"flex",justifyContent:"center",alignItems:"center",fontSize:"0.7rem"}}>
                    <BsBuildings/> <span>No Company</span>
                    </div>
                </div>
                <div  style={{height:"20rem",borderTop:"0.1rem",borderStyle:"solid"}}>
                    <div>
                       POC of opportinites  
                    </div>
                    <div style={{display:"flex",justifyContent:"center",alignItems:"center",fontSize:"0.7rem"}}>
                    <FaRegCalendarTimes /> <span>No Opportinites</span>
                    </div>
                </div>
            </div>
            <div>
                <div style={{height:"3rem",width:"65vw",borderBottom:"0.1rem",borderStyle:"solid"}}>
                    <div style={{width:"55%",display:"flex",justifyContent:"space-evenly",alignItems:"center",paddingTop:"1rem"}}>
                        <div style={{display:"flex"}}><FaTv style={{marginTop:"0.3rem"}}/><span>Timeline</span></div>
                        <div style={{display:"flex"}}><RiTaskLine style={{marginTop:"0.3rem"}}/><span>Task</span></div>
                        <div style={{display:"flex"}}><TbNotes style={{marginTop:"0.3rem"}}/><span>Notes</span></div>
                        <div style={{display:"flex"}}><GoPaperclip style={{marginTop:"0.3rem"}}/><span>Files</span></div>
                        <div style={{display:"flex"}}><MdOutlineEmail style={{marginTop:"0.3rem"}}/><span>Emails</span></div>
                        <div style={{display:"flex"}}><FaRegCalendarTimes style={{marginTop:"0.2rem"}}/><span>Calender</span></div>
                    </div>
                </div>
                <div style={{height:"79vh",width:"65vw",zIndex:"-1"}}>
                    <div>
                        <div style={{display:"flex",justifyContent:"space-between",width:"60vw",paddingTop:"2rem",marginLeft:'2rem',height:"2rem",marginBottom:"2rem"}}>
                            <div style={{display:"flex", width:"8rem",justifyContent:"space-between"}}>
                            <div>Unscheduled</div>
                            <div>{tasks.length}</div>
                            </div>
                            <div style={{display:"flex",width:"6rem",justifyContent:"space-between",cursor:"pointer"}} onClick={()=>toggleComponent()}>
                                <div>
                               <span>+</span>
                               <span>Add task</span> 
                               </div>
                            </div>
                        </div>
                        { 
                          tasks.length>0 && 
                          <div style={{border:"0.1rem",borderStyle:"solid",marginLeft:"1rem",marginRight:"1rem",borderRadius:"0.5rem"}}>
                            {
                          tasks.map((value,idx)=>(
                            <div key={idx} style={{borderBottom:"0.1rem",borderStyle:"solid"}}>
                               <div style={{display:"flex",justifyContent:"space-between",width:"60vw",marginLeft:'2rem'}}>
                                   <div style={{marginLeft:"1rem"}}>
                                       <input type='checkbox'/>{value?.TaskTitle}
                                   </div>
                                   <div style={{display:"flex",marginRight:"1rem"}}>
                                       <div style={{display:"flex",justifyContent:"space-between",width:"10rem"}}><div style={{display:"flex",justifyContent:"space-between"}}><FaUserCircle style={{marginTop:"0.25rem"}}/><span>{value.firstName} {value.secondName}</span></div><FaRegCalendarTimes style={{marginTop:"0.25rem"}} onClick={()=>deletetask(value?.TaskTitle)}/></div>
                                   </div>
                               </div>
                           </div>
                        ))}
                         </div>
                        }
                    </div>
                </div>
            </div>
        </div>
        { showComponent &&
        <div style={{visibility:"visible",zIndex:'9999',marginTop:"-30rem",marginLeft:"30rem",marginRight:"20rem",width:'40vw',height:'30vh',border:"0.1rem",borderStyle:"solid",position:"relative",borderRadius:"0.5rem"}}>
            <div style={{width:"40vw",display:"flex",justifyContent:"center",gap:"1rem",marginTop:"1rem"}}>
                <div style={{width:"15vw"}}>
                <label htmlFor='firstname'>First Name</label>
                <Input type='text' id="firstname" placeholder='Noah' onChange={(e)=>setFirstname(e.target.value)}/>
                </div>
                <div style={{width:"15vw"}}>
                <label htmlFor='lastname'>Last Name</label>
                <Input type='text' id="lastname" placeholder='A' onChange={(e)=>setSecondname(e.target.value)}/>
                </div>
            </div>

            <div style={{width:"40vw",display:"flex",justifyContent:"center"}}>
                <div style={{width:"15vw"}}>
                <label htmlFor='firstname'>Task title</label>
                <Input type='text' id="firstname" placeholder='Task' onChange={(e)=>setTasktitle(e.target.value)}/>
                </div>
            </div>
            <div style={{width:"40vw",display:"flex",justifyContent:"center",alignItems:"center"}}>
            <div style={{width:"5rem",height:"3rem",borderRight:"0.5rem",cursor:"pointer"}}>
              <Button onClick={()=>addTask()}>Add</Button>
            </div>
            <div style={{width:"5rem",height:"3rem",borderRight:"0.5rem",cursor:"pointer"}}>
              <Button onClick={()=>toggleComponent()}>Done</Button>
            </div>
            </div>
        </div>
      }
    </div>
  )
}

export default Peoplepage