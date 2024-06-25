import html2pdf from 'html2pdf.js';
import React, { useRef, useState } from 'react';
// import profile from "./img/profile.png";
import ResumeLeft from './ResumeLeft';

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
        <ResumeLeft/>
        <div className="resumeRight w-[65%] h-[1052px] bg-white flex items-start justify-start flex-col text-[#1b3048] font-bold text-xl p-2 pr-4" style={{fontFamily:"Cambria"}}>
          <div className="rightTop user w-full ml-2 mt-5">
            <h3>ANIKET WAKALKAR</h3>
            <h5 className='' style={{fontFamily:"Cambria", fontSize:"16px"}}>Software Developer</h5>
            <p className='mt-1 mb-3 font-normal' style={{fontFamily:"Cambria", fontSize:"16px"}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut voluptatum ab molestias dicta fuga inventore officiis delectus. Expedita, ab deleniti.</p>
          </div>
          <div className='rightBottom w-full'>
            <div className="education w-full ml-2">
              <h4 style={{borderBottom:"1px solid black"}} className="pb-2">Education</h4>
              <ul className='my-1 font-normal ml-2' style={{fontFamily:"Cambria", fontSize:"16px"}}>
                <li className='my-1'>
                  <h5>&#9702; Degree 2023 - 2025</h5>
                  <div className="content pl-4">
                    <h6>College Name | Location</h6>
                  </div>
                </li>
                <li className='my-1'>
                  <h5>&#9702; Degree 2023 - 2025</h5>
                  <div className="content pl-4">
                    <h6>College Name | Location</h6>
                  </div>
                </li>
                <li className='my-1'>
                  <h5>&#9702; Degree 2023 - 2025</h5>
                  <div className="content pl-4">
                    <h6>College Name | Location</h6>
                    <h5 className=''>Degree</h5>
                  </div>
                </li>
              </ul>
            </div>
            <div className="experience w-full ml-2">
              <h4 style={{borderBottom:"1px solid black"}} className="pb-2">Experience</h4>
              <ul className='my-1 font-normal ml-2' style={{fontFamily:"Cambria", fontSize:"16px"}}>
                <li className='my-5'>
                  <h5>&#9702; 2023 - 2025</h5>
                  <div className="content pl-4">
                    <h6>Company Name | Location</h6>
                    <h5 className=''>Web Developer</h5>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam commodi vero nesciunt inventore reiciendis sapiente porro laborum ab dolorum recusandae? Ipsum cum sit nulla a!</p>
                  </div>
                </li>
                <li className='my-5'>
                  <h5>&#9702; 2023 - 2025</h5>
                  <div className="content pl-4">
                    <h6>Company Name | Location</h6>
                    <h5 className=''>Web Developer</h5>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam commodi vero nesciunt inventore reiciendis sapiente porro laborum ab dolorum recusandae? Ipsum cum sit nulla a!</p>
                  </div>
                </li>
                <li className='my-5'>
                  <h5>&#9702; 2023 - 2025</h5>
                  <div className="content pl-4">
                    <h6>Company Name | Location</h6>
                    <h5 className=''>Web Developer</h5>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam commodi vero nesciunt inventore reiciendis sapiente porro laborum ab dolorum recusandae? Ipsum cum sit nulla a!</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
  );
};

export default Preview;
