import html2pdf from 'html2pdf.js';
import React, { useRef, useState } from 'react';
// import profile from "./img/profile.png";
import { FaRegUser } from "react-icons/fa";
import { IoMailOpenOutline } from "react-icons/io5";

const Preview = () => {
  const contentRef = useRef();
  const [pdfPreview, setPdfPreview] = useState(null);

  const handlePreviewPdf = () => {
    const element = contentRef.current;

    // // Define your custom margin values (in inches)
    // const marginLeft = 0.1; // Left margin
    // const marginRight = 0.1; // Right margin
    // const marginTop = 1; // Top margin
    // const marginBottom = 1; // Bottom margin

    const opt = {
      // margin: [marginTop, marginRight, marginBottom, marginLeft],
      margin: 0,
      filename: 'document.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    };

    html2pdf().from(element).set(opt).outputPdf('blob').then((pdfBlob) => {
      const url = URL.createObjectURL(pdfBlob);
      setPdfPreview(url);

      // Open the PDF in a new window
      const newWindow = window.open();
      if (newWindow) {
        newWindow.document.title = 'PDF Preview';
        const iframe = newWindow.document.createElement('iframe');
        iframe.style.width = '100%';
        iframe.style.height = '100%';
        iframe.src = url;
        newWindow.document.body.appendChild(iframe);
      }
    });
  };

  return (
  <>
    <button onClick={handlePreviewPdf} class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center mx-5 my-10">
      <span>Preview PDF</span>
    </button>

    <button onClick={() => {
      const link = document.createElement('a');
      link.href = pdfPreview;
      link.download = 'document.pdf';
      link.click();
    }} class="bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded inline-flex items-center mx-5 my-10">
      <span>Download</span>
    </button>
  
    <div ref={contentRef} className='flex items-center justify-center'>
      <div className='w-[820px] border border-black bg-[#f5f5f5] flex items-start justify-start'>
        <div className="left w-[30%] h-[1054px] bg-[#1b3048] flex items-start justify-evenly flex-col text-white font-bold text-xl p-2" style={{fontFamily:"Cambria"}}>
          {/* <div className='left-top'> */}
            <FaRegUser className='bg-white h-[100px] w-[100px] rounded-md mx-auto' />
          {/* </div> */}
          {/* <div className='left-bottom'> */}
            <div className="contacts w-full">
              <p style={{borderBottom:"1px solid black"}} className="pb-2">Contacts</p>
              <hr />
              {/* <SlSocialGithub className='w-[20px] h-[30px] mr-[10px]'/> */}
              <ul className='my-1 ml-2 font-normal' style={{fontFamily:"Cambria", fontSize:"16px"}}>
                <li className='flex items-start'> Shaniwari cotton market near udapure jewellers, Nagpur 440018 </li>
                <li className='flex items-start'>7448208699 </li>
                <li className='flex items-start'><IoMailOpenOutline className='' />aniketwakalkar23@gmail.com </li>
                <li className='flex items-start'>aniketwakalkar23@gmail.com </li>
              </ul>
            </div>
            <div className="education w-full">
              <p style={{borderBottom:"1px solid black"}} className="pb-2">Education</p>
              <hr />
              <ul className='my-1 ml-2' style={{fontFamily:"Cambria", fontSize:"16px"}}>
                <li>B.E.</li>
                <li>POLY</li>
              </ul>
            </div>
            <div className="skills w-full">
              <p style={{borderBottom:"1px solid black"}} className="pb-2">Skills</p>
              <hr />
              <ul className='my-1 ml-2' style={{fontFamily:"Cambria", fontSize:"16px"}}>
                <li>c++</li>
                <li>python</li>
                <li>java</li>
                <li>javascript</li>
                <li>mongodb</li>
                <li>postgresql</li>
                <li>flask</li>
                <li>react js</li>
                <li>php</li>
              </ul>
            </div>
            <div className="languages w-full">
              <p style={{borderBottom:"1px solid black"}} className="pb-2">Languages</p>
              <hr />
              <ul className='my-1 ml-2' style={{fontFamily:"Cambria", fontSize:"16px"}}>
                <li>marathi</li>
                <li>hindi</li>
                <li>english</li>
              </ul>
            </div>
          {/* </div> */}
        </div>
        <div className="right w-[70%] h-full bg-white"></div>
      </div>
    </div>
  </>
  );
};

export default Preview;
