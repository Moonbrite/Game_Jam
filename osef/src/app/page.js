'use client'
import html2pdf from 'html2pdf.js'
import PDFGen from './pdf-gen/page'

function handleOnClick() {
  const element = document.querySelector('#devis');//.innerHTML;
  // html2pdf().set().from(element).save();
  html2pdf(element);
}
export default function Home() {
  return (
    <>
      <PDFGen />
      <button onClick={handleOnClick} className="p-5 m-5 border-2 border-black">PDF</button>
    </>
  );
}
