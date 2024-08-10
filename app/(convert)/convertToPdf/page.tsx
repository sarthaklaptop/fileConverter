"use client";

import { ChangeEvent, useState } from 'react';
import jsPDF from 'jspdf';

export const runtime = "edge"; 

export default function ImageToPDFConverter() {
  const [images, setImages] = useState<File[]>([]);
  const [imagePreviews, setImagePreviews] = useState<string[]>([]); // New state for image previews
  const [pdf, setPdf] = useState<jsPDF | null>(null);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const selectedImages = e.target.files ? Array.from(e.target.files) : [];
    setImages(selectedImages);

    const previews = selectedImages.map(image => {
      return URL.createObjectURL(image); // Create URL for each selected image
    });
    setImagePreviews(previews);
  };

  const generatePDF = () => {
    const doc = new jsPDF();
    images.forEach((image, index) => {
      if (index !== 0) {
        doc.addPage();
      }
      const reader = new FileReader();
      reader.readAsDataURL(image);
      reader.onload = () => {
        doc.addImage(reader.result as string, 'JPEG', 10, 10, 190, 0);
        if (index === images.length - 1) {
          setPdf(doc);
        }
      };
    });
  };

  const downloadPDF = () => {
    if (pdf) {
      pdf.save('converted.pdf');
    }
  };

  return (
    <div className='w-full min-h-screen flex justify-center items-center'>
      <div className='w-5/6 h-auto'>
        <h1 className='w-100% flex justify-center mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white'>
          <span className='text-blue-600 dark:text-blue-500'>Image &nbsp;</span> to &nbsp;<span className='text-blue-600 dark:text-blue-500'>PDF&nbsp;</span> Converter
        </h1>
          <div className='flex items-center justify-center m-10'>
            <input
                type="file"
                accept=".jpg, .jpeg, .png"
                multiple
                onChange={handleFileChange}
                className='file-input w-full max-w-xs'
            />
          </div>
        {/* Image Preview Section */}
        <div className='w-full flex flex-wrap justify-center mt-8'>
          {imagePreviews.map((src, index) => (
            <div key={index} className='m-2'>
              <img
                src={src}
                alt={`Preview ${index + 1}`}
                className='w-32 h-32 object-cover rounded-lg shadow-lg'
              />
            </div>
          ))}
        </div>

        <div className='w-full flex justify-center font-extrabold'>
          <button
            onClick={generatePDF}
            className='w-96 h-16 bg-sky-500 rounded-lg mt-8 text-white font-serif'
          >
            Generate PDF
          </button>
        </div>

        {pdf && (
          <div className='w-full flex justify-center font-extrabold mt-6'>
            <button
              onClick={downloadPDF}
              className='w-96 h-16 bg-sky-500 rounded-lg text-white font-serif'
            >
              Download
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
