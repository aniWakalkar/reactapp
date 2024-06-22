// // src/Build.js
// import { PDFDownloadLink, PDFViewer } from '@react-pdf/renderer';
// import React from 'react';
// import MyDocument from './MyDocument';

// const Build = () => (
//   <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
//     <h1>React PDF Example</h1>
//     <PDFViewer style={{ width: '100%', height: '500px', border: 'none' }}>
//       <MyDocument />
//     </PDFViewer>
//     <p>
//       <PDFDownloadLink document={<MyDocument />} fileName="document.pdf">
//         {({ blob, url, loading, error }) => (loading ? 'Loading document...' : 'Download now!')}
//       </PDFDownloadLink>
//     </p>
//   </div>
// );

// export default Build;


import React from 'react'
import profile from "./img/profile.png"
function Build() {
  return (
    <div className="main border border-black p-2 my-10 h-[100vh] ">
      <div className="top flex items-start justify-around py-2 border border-black">
        <img className='border border-black w-[12%] p-1' style={{height:"80px"}} src={profile} alt="user_profile" />
        <div className='border border-black w-[50%] p-1'>
            <h4 className="name">name</h4>
            <h4 className="post">post</h4>
        </div>
        <div className='border border-black w-[35%] p-1'>
            <h5 className="post">address</h5>
            <h4 className="post">number</h4>
            <h4 className="post">email</h4>
            <h4 className="post">github link</h4>
        </div>
      </div>
      <div className='border border-black p-2 flex items-start justify-start'>
        <div className="left border border-green bg-blue-gray-500 w-[300px]">
          <div className="skills my-5">
            <h4 className='font-bold'>SKILLS</h4>
              <ol className='ml-5'>
                <li>1. text</li>
                <li>1. text</li>
                <li>1. text</li>
                <li>1. text</li>
                <li>1. text</li>
              </ol>
          </div>
          <div className="languages my-5">
            <h4 className='font-bold'>LANGUAGES</h4>
              <ol className='ml-5'>
                <li>1. text</li>
                <li>1. text</li>
                <li>1. text</li>
                <li>1. text</li>
                <li>1. text</li>
              </ol>
          </div>
        </div>
        <div className="right border border-green bg-blue-gray-500 w-[100%]">
          <h4>RIGHT</h4>
        </div>
      </div>
    </div>
  )
}

export default Build
