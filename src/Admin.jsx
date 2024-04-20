import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

function AdminPage() {
  const [scannedData, setScannedData] = useState([]);

  useEffect(() => {
    const data = localStorage.getItem('scannedData');
    if (data) {
      setScannedData(JSON.parse(data));
     
    }
  }, []);
 
  return (
    <div className="container mx-auto ">
      <Navbar/>
      <div className="border border-gray-300 rounded-md p-4">
        <h2 className="font-bold mb-2 text-2xl  md:text-4xl flex justify-center text-orange-600">Student Status</h2>
        <div className="space-y-4">
          {scannedData.map((item, index) => (
            <div key={index} className="scanned-item bg-gray-100 p-6 rounded-md flex gap-4 flex-col">
              <p><strong className="text-lg md:text-2xl">Student Details: {convertToPlainText(item.content)}</strong> </p>
              <p><strong className={`text-base md:text-xl ${item.status === 'DROPPED' ? 'text-green-500' : item.status === 'ON THE BUS' ? 'text-blue-500' : ''}`}>Status: {item.status}</strong></p>
              <p><strong className="text-sm md:text-base text-gray-500">Picked Time: {item.dateTime}</strong> </p>
              {item.status === 'DROPPED' && <p><strong className="text-sm md:text-base text-red-500">Dropped Time: {item.droppedDateTime}</strong></p>}

            </div>
          ))}
        </div>
      </div>
      <Footer/>
    </div>
  );
}

function convertToPlainText(data) {
  try {
    // Attempt to parse the JSON string
    const parsedData = JSON.parse(data);

    // Initialize an empty string to store the plain text
    let plainText = '';

    // Iterate over the key-value pairs of the parsed data and append them to the plain text
    for (const [key, value] of Object.entries(parsedData)) {
      plainText += ` ${value},\n`;
    }

    return plainText;
  } catch (error) {
    // If parsing fails, return the original data
    return data;
  }
}

export default AdminPage;
