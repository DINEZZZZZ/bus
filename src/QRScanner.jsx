import React, { useRef, useState, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';

function QRScanner() {
  const videoRef = useRef(null);
  const [scannedData, setScannedData] = useState([]);
  const [showScannedData, setShowScannedData] = useState(false);
  const [scannedDataHistory, setScannedDataHistory] = useState([]);

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
    Instascan.Camera.getCameras().then((cameras) => {
      if (cameras.length > 0) {
        scanner.start(cameras[0]);
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

  return (
    <div  className="container mx-auto  ">
      <Header/>
      <h1 className="text-2xl flex justify-center font-bold mb-4">QR Scanner </h1>
      <div style={{backgroundImage: `url('https://png.pngtree.com/thumb_back/fh260/background/20200410/pngtree-creative-cartoon-hand-drawn-sky-clouds-image_333701.jpg')`, backgroundSize: 'cover', backgroundPosition: 'center'}} className="relative flex flex-col items-center mb-4">
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
<img  src="https://tse2.mm.bing.net/th?id=OIP.PvydeIECl6Ge30hjXP4BEwHaFX&pid=Api&P=0&h=180" alt="" />
</div>
     
      <div className="text-center text-gray-600 mt-8">
        <p>This QR scanner helps you track the status of students on the bus. Scan a student's QR code to update their status.</p>
        <p>Use the 'Scan' button to start scanning and the 'Stop' button to stop.</p>
      </div>
      <Footer/>
    </div>
  );
}

export default QRScanner;
