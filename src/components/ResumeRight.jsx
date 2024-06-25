import React from 'react'

function ResumeRight() {
  return (
    <div className="resumeRight w-[65%] h-[1055px] bg-white flex items-start justify-start flex-col text-[#1b3048] font-bold text-xl p-2 pr-4">
    <div className="rightTop user w-full ml-2" style={{marginTop:"30px"}}>
      <p className='text-2xl'>ANIKET WAKALKAR</p>
      <p className='text-xl'>Software Developer</p>
      <p className='mt-1 mb-3 font-normal' style={{fontSize:"16px"}}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit eligendi blanditiis, aliquam impedit doloremque esse aliquid suscipit eius itaque laborum, libero saepe minima sit sunt hic . </p>
    </div>
    <div className='rightBottom w-full'>
      <div className="education w-full ml-2 mt-3">
        <p style={{borderBottom:"1px solid black"}} className="pb-2 text-xl">Education</p>
        <ul className='my-1 font-normal ml-2' style={{fontSize:"16px"}}>
          <li className='my-2'>
            <h5>
              <span className="mr-2" style={{fontSize:"18px"}}>&bull;</span>
              <span className='font-bold'>B.E. [2021 Aug - 2023 Feb]</span>
            </h5>
            <div className="content pl-4">
              <p className='font-bold'>Wainganga College of Engineering and Management</p>
              <p>Near Gumgaon Railway Station, Dongargaon, Post-Gumgaon, Wardha Road, Nagpur, Maharashtra 440012</p>
            </div>
          </li>
          <li className='my-2'>
            <h5>
              <span className="mr-2" style={{fontSize:"18px"}}>&bull;</span>
              <span className='font-bold'>Diploma [2017 Aug - 2020 Feb]</span>
            </h5>
            <div className="content pl-4">
              <p className='font-bold'>Shri Datta Meghe Polytechnic</p>
              <p>Hingna Rd, beside YCCE college, Wanadongri ct, Wanadongri, Maharashtra 441110</p>
            </div>
          </li>
          <li className='my-2'>
            <h5>
              <span className="mr-2" style={{fontSize:"18px"}}>&bull;</span>
              <span className='font-bold'>12th [2015 Aug - 2017 Feb]</span>
            </h5>
            <div className="content pl-4">
              <p className='font-bold'>Radha Mahavidyalaya</p>
              <p>Reshimbagh Rd, Reshim Bagh, Nagpur, Maharashtra 440009</p>
            </div>
          </li>
        </ul>
      </div>
      <div className="experience w-full ml-2 mt-3">
        <p style={{borderBottom:"1px solid black"}} className="pb-2 text-xl">Experience</p>
        <ul className='my-1 font-normal ml-2' style={{fontSize:"16px"}}>
          <li className='my-2'>
            <h5>
              <span className="mr-2" style={{fontSize:"18px"}}>&bull;</span>
              <span className='font-bold'>CAREDOSE [2023 Aug - 2024 Feb]</span>
            </h5>
            <div className="content pl-4">
              <p className='font-bold'>Software Developer</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat veniam sapiente molestias, necessitatibus reprehenderit dignissimos porro optio quidem fugit eveniet molestiae ducimus repudiandae fuga, labore distinctio voluptates minima eos assumenda.</p>
            </div>
          </li>
          <li className='my-2'>
            <h5>
              <span className="mr-2" style={{fontSize:"18px"}}>&bull;</span>
              <span className='font-bold'>CAREDOSE [2024 Feb - Present]</span>
            </h5>
            <div className="content pl-4">
              <p className='font-bold'>Software Developer</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat veniam sapiente molestias, necessitatibus reprehenderit dignissimos porro optio quidem fugit eveniet molestiae ducimus repudiandae fuga, labore distinctio voluptates minima eos assumenda.</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
  )
}

export default ResumeRight