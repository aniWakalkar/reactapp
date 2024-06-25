import html2pdf from 'html2pdf.js';
import React, { useRef, useState } from 'react';
// import profile from "./img/profile.png";
import ResumeLeft from './ResumeLeft';
import ResumeRight from "./ResumeRight";

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
      <div className='w-[820px] bg-[#f5f5f5] flex items-start justify-start'  style={{fontFamily:"Cambria"}}>
        <ResumeLeft/>
        <ResumeRight/>
      </div>
    </div>
  </>
  );
};

export default Preview;
