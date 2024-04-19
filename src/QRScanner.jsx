import React, { useRef, useState, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';

function QRScanner() {
  const videoRef = useRef(null);
  const [scannedData, setScannedData] = useState([]);
  const [showScannedData, setShowScannedData] = useState(false);
  const [scannedDataHistory, setScannedDataHistory] = useState([]);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  

  let scanner;

  useEffect(() => {
    const storedData = localStorage.getItem('scannedData');
    if (storedData) {
      setScannedData(JSON.parse(storedData));
    }
  }, []);

  const initScanner = () => {
    scanner = new Instascan.Scanner({ video: videoRef.current });
    scanner.addListener('scan', handleScan);
  
    // Get available cameras
    Instascan.Camera.getCameras().then(cameras => {
      // If there are cameras available
      if (cameras.length > 0) {
        // Find the back camera
        const backCamera = cameras.find(camera => camera.name.includes('back'));
        
        // If back camera is found, start scanner with it, else start with the first camera
        scanner.start(backCamera || cameras[0]);
      } else {
        console.error('No cameras found.');
      }
    }).catch(err => console.error(err));
  };

  const handleScan = (content) => {
    const dateTime = new Date().toLocaleString();
    const foundIndex = scannedData.findIndex(item => item.content === content);
    let status = 'ON THE BUS';

    if (foundIndex !== -1) {
      if (scannedData[foundIndex].status === 'ON THE BUS') {
        status = 'DROPPED';
        // Update the dropped time when changing status from 'On the Bus' to 'Dropped'
        scannedData[foundIndex].droppedDateTime = dateTime;
      }
      scannedData[foundIndex].status = status;
    } else {
      scannedData.push({ content, status, dateTime });
    }

    // Update scanned data state and store in localStorage
    setScannedData([...scannedData]);

    // Create a log entry
    const logEntry = { content, status, dateTime };
    setScannedDataHistory(prevState => [...prevState, logEntry]);

    // Update scanned data state and store in localStorage
    localStorage.setItem('scannedData', JSON.stringify(scannedData));
    localStorage.setItem('scannedDataHistory', JSON.stringify(scannedDataHistory));

    setShowScannedData(true);
    scanner.stop();

    // Show success message and blur background
    setShowSuccessMessage(true);
   

    // Clear success message and blur after 3 seconds
    setTimeout(() => {
      setShowSuccessMessage(false);
 
    }, 10000);
  };

  const startScanning = () => {
    if (!scanner) {
      initScanner();
    } else {
      scanner.start();
    }
  };

  const stopScanning = () => {
    if (scanner) {
      scanner.stop();
    }
  };

  const handleOkButtonClick = () => {
    // Hide success message and remove blur effect
    setShowSuccessMessage(false);

  };

  return (
    <div className={`container mx-auto`}>
      <Header />
      <h1 className="text-2xl flex justify-center font-bold mt-1 mb-4">QR Scanner for entry and exit </h1>
      <div style={{ backgroundImage: `url('https://www.pngmart.com/files/22/QR-Code-PNG-Background-Image.png')`, backgroundSize: 'cover', backgroundPosition: 'center' }} className="relative flex flex-col items-center mb-4">
        <video ref={videoRef} className="w-full max-w-md mx-auto mb-4" style={{ maxWidth: '100%' }} />
        <div className="">
          <button onClick={startScanning} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-4">Scan</button>
          <button onClick={stopScanning} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Stop</button>
        </div>
      </div>

      {showScannedData && (
        <div id="scannedData" className="border border-gray-300 rounded-md p-4">
          <h2 className="text-lg font-semibold mb-2">Scanned Data</h2>
          <div className="space-y-4">
            {scannedData.map((item, index) => (
              <div key={index} className="scanned-item bg-gray-100 p-4 rounded-md">
                {item.status} - {item.status === 'DROPPED' ? item.droppedDateTime : item.dateTime}
              </div>
            ))}
          </div>
        </div>
      )}
      <div className='flex justify-center'>
        <img src="https://tse2.mm.bing.net/th?id=OIP.PvydeIECl6Ge30hjXP4BEwHaFX&pid=Api&P=0&h=180" alt="" />
      </div>

      <div className="text-center font-semibold text-gray-600 mt-4">
        <p>This QR scanner helps you track the status of students on the bus. Scan a student's QR code to update their status.</p>
        <p>Use the 'Scan' button to start scanning and the 'Stop' button to stop.</p>
      </div>

      {showSuccessMessage && (
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-8 rounded-lg text-center">
          <div className="text-green-500 text-4xl font-extrabold mb-4">&#10003;</div>
          <p className="text-lg mb-4">Scanned successfully!</p>
          <button onClick={handleOkButtonClick} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">OK</button>
        </div>
      )}
      <img src='https://webstockreview.net/images/garden-clipart-front-yard-8.png' alt="" />
      <Footer />
    </div>
  );
}

export default QRScanner;
