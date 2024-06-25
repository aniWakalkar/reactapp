import React from 'react';
import { FaRegUser } from "react-icons/fa";

function ResumeLeft() {

    const contacts = ["Shaniwari cotton market near udapure jewellers, Nagpur 440018", "7448208699", "aniketwakalkar23@gmail.com", "aniketwakalkar23@gmail.com"]
    const skills = ["c++", "python", "java", "javascript", "mongodb", "postgresql", "flask", "react.js", "php"]
    const languages = ["Marathi", "Hindi", "English"]

    const firstLetterCapitalization = (str)=>{
      // const text = str.split('').toLowerCase();
      // text = text.map((word)=> word[0].toUpperCase() + word.substring(1)).join(' ');
      console.log(str)
    }
    // 1b3048
  return (
    <div className="resumeLeft w-[35%] h-[1055px] bg-[#c8ddf1] flex items-center justify-start flex-col text-gray-900 text-xl p-2 font-bold">
    <div className='left-top border border-white flex items-center justify-center h-[110px] w-[100px] rounded-3xl' style={{marginTop:"25px"}}>
      <FaRegUser className='h-[60px] w-[60px]' />
    </div>
    <div className='left-bottom p-2 flex items-start justify-around flex-col h-[955px]'>
      <div className="contacts w-full ml-6">
        <p style={{borderBottom:"1px solid white"}} className="pb-2 text-xl">Contacts</p>
        <ul className='my-1 font-normal ml-2 pr-4' style={{fontSize:"16px"}}>
          {contacts.map((value, i)=>{
            return i === 0 
            ? <li key={i} className='flex justify-start'><span className="mr-2">&bull;	</span> {value.toLowerCase().split(' ').map((word)=> word[0].toUpperCase() + word.substring(1)).join(' ')}</li> 
            : <li key={i} className='flex justify-start'><span className="mr-2">&bull;	</span> {value}</li> 
          }
          )}
        </ul>
      </div>
      <div className="skills w-full ml-6">
        <p style={{borderBottom:"1px solid white"}} className="pb-2 text-xl">Skills</p>
        {/* <ul className=" my-1 font-normal ml-2 pr-4 text-base"> */}
        <ul className="container m-auto grid grid-cols-2 gap-[1px] my-1 font-normal ml-2 pr-4" style={{fontSize:"16px"}}>
          {skills.map((value, i)=>(
            <li key={i} className="flex items-center">
              <span className="mr-2">&bull;</span> {value.toUpperCase()}
            </li>
          ))}
        </ul>
      </div>
      <div className="languages w-full ml-6">
        <p style={{borderBottom:"1px solid white"}} className="pb-2 text-xl">Languages</p>
        <ul className="container m-auto grid grid-cols-2 gap-1 my-1 font-normal ml-2 pr-4" style={{fontSize:"16px"}}>
          {languages.map((value, i) => (
            <li key={i} className="flex items-center">
              <span className="mr-2">&bull;</span> {value[0].toUpperCase() + value.substring(1)}
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
  )
}

export default ResumeLeft