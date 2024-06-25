import React from 'react';
import { FaRegUser } from "react-icons/fa";

function ResumeLeft() {

    const contacts = ["Shaniwari cotton market near udapure jewellers, Nagpur 440018", "7448208699", "aniketwakalkar23@gmail.com", "aniketwakalkar23@gmail.com"]
    const skills = ["c++", "python", "java", "javascript", "mongodb", "postgresql", "flask", "react.js", "php"]
    const languages = ["Marathi", "Hindi", "English"]

  return (
    <div className="resumeLeft w-[35%] h-[1052px] bg-[#1b3048] flex items-start justify-evenly flex-col text-white font-bold text-xl p-2" style={{fontFamily:"Cambria"}}>
    {/* <div className='left-top'> */}
      <FaRegUser className='bg-white h-[100px] w-[100px] rounded-md mx-auto' />
    {/* </div> */}
    {/* <div className='left-bottom'> */}
      <div className="contacts w-full ml-2">
        <p style={{borderBottom:"1px solid black"}} className="pb-2">Contacts</p>
        <hr />
        {/* <ul className='my-1 font-normal ml-2' style={{fontFamily:"Cambria", fontSize:"16px"}}> */}
        <ul className='my-1 font-normal ml-2' style={{fontFamily:"Cambria", fontSize:"16px"}}>
          {contacts.map((value, i)=>{
            return <li className='flex justify-start'><span className="mr-2">&bull;	</span> {value}</li> }
          )}
        </ul>
      </div>
      {/* <div className="education w-full ml-2">
        <p style={{borderBottom:"1px solid black"}} className="pb-2">Education</p>
        <hr />
        <ul className='my-1 ml-3' style={{fontFamily:"Cambria", fontSize:"16px"}}>
          <li>B.E.</li>
          <li>POLY</li>
        </ul>
      </div> */}
      <div className="skills w-full ml-2">
        <p style={{borderBottom:"1px solid black"}} className="pb-2">Skills</p>
        <hr />
        <ul className='my-1 font-normal ml-2' style={{fontFamily:"Cambria", fontSize:"16px"}}>
          {skills.map((value, i)=>{
            return i<=10 && <li className='flex justify-start'><span className="mr-2">&bull;	</span> {value}</li>
          })}
        </ul>
      </div>
      <div className="languages w-full ml-2">
        <p style={{borderBottom:"1px solid black"}} className="pb-2">Languages</p>
        <hr />
        <ul className='my-1 font-normal ml-2' style={{fontFamily:"Cambria", fontSize:"16px"}}>
          {languages.map((value, i)=>{
              return <li className='flex justify-start'><span className="mr-2">&bull;	</span> {value}</li>
            })}
        </ul>
      </div>
    {/* </div> */}
  </div>
  )
}

export default ResumeLeft