import QRCode from 'qrcode.react';
import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './Navbar';
import Footer from './Footer';

function AddStudentDetails() {
  const [studentDetails, setStudentDetails] = useState({});
  const [showToaster, setShowToaster] = useState(false);
  const [showDownloadBtn, setShowDownloadBtn] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const details = {};
    formData.forEach((value, key) => {
      details[key] = value;
    });
    setStudentDetails(details);

    // Clear the input fields
    event.target.reset();

    // Show toaster
    setShowToaster(true);

    // Show download button
    setShowDownloadBtn(true);

    // Show success notification for form submission
    toast.success('Student ID created successfully!');
  };

  const handleDownload = () => {
    const canvas = document.getElementById('qrCode');
    const qrCodeSize = 200;
    const margin = 20;

    const downloadCanvas = document.createElement('canvas');
    downloadCanvas.width = qrCodeSize + 2 * margin;
    downloadCanvas.height = qrCodeSize + 2 * margin;

    const downloadContext = downloadCanvas.getContext('2d');

    downloadContext.fillStyle = 'white';
    downloadContext.fillRect(0, 0, downloadCanvas.width, downloadCanvas.height);

    downloadContext.drawImage(canvas, margin, margin, qrCodeSize, qrCodeSize);

    const downloadLink = document.createElement('a');
    downloadLink.href = downloadCanvas.toDataURL('image/png');
    downloadLink.download = 'student_id_qr_code.png';
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);

    // Show success notification for download
    toast.info('QR Code downloaded successfully!');
  };

  return (
    <div className="container mx-auto">
      <Navbar />
      <ToastContainer />
      <form onSubmit={handleSubmit} className="space-y-4 p-4">
        <h1 className="text-2xl font-bold mb-4">Add Student Details For Generate QR </h1>
        <div>
          <label htmlFor="studentName" className="block font-medium">
            Student Name
          </label>
          <input
            type="text"
            id="studentName"
            name="studentName"
            className="border border-gray-300 rounded-md px-4 py-2 w-full"
            placeholder="Enter student name"
            required
          />
        </div>
        <div>
          <label htmlFor="parentName" className="block font-medium">
            Parent Name
          </label>
          <input
            type="text"
            id="parentName"
            name="parentName"
            className="border border-gray-300 rounded-md px-4 py-2 w-full"
            placeholder="Enter parent name"
            required
          />
        </div>
        <div>
          <label htmlFor="age" className="block font-medium">
            Age
          </label>
          <input
            type="number"
            id="age"
            name="age"
            className="border border-gray-300 rounded-md px-4 py-2 w-full"
            placeholder="Enter age"
            required
          />
        </div>
        <div>
          <label htmlFor="location" className="block font-medium">
            Location
          </label>
          <input
            type="text"
            id="location"
            name="location"
            className="border border-gray-300 rounded-md px-4 py-2 w-full"
            placeholder="Enter location"
            required
          />
        </div>
        <div>
          <label htmlFor="bloodGroup" className="block font-medium">
            Blood Group
          </label>
          <input
            type="text"
            id="bloodGroup"
            name="bloodGroup"
            className="border border-gray-300 rounded-md px-4 py-2 w-full"
            placeholder="Enter blood group"
            required
          />
        </div>
        <div className="flex items-center justify-between">
          <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Submit
          </button>
          <button
            onClick={handleDownload}
            className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mb-10 rounded ${
              showDownloadBtn ? '' : 'hidden'
            }`}
          >
            Download QR Code
          </button>
        </div>
      </form>
      <div id="qrCodeContainer" className="rounded-md pl-6">
        {showToaster && <QRCode id="qrCode" value={JSON.stringify(studentDetails)} size={200} />}
      </div>
      <Footer />
    </div>
  );
}

export default AddStudentDetails;
