import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faIdCard, faPhone, faBus, faRoute, faSchool, faClock } from '@fortawesome/free-solid-svg-icons';

function DriverDetails() {
  const drivers = [
    {
      id: 1,
      name: 'John Doe',
      age: 40,
      experience: '15 years',
      licenseNumber: 'DL123456',
      contactNumber: '+91 9876543210',
      busNumber: 'ABC123',
      route: 'Central Station to School',
      school: 'XYZ School',
    },
    {
      id: 2,
      name: 'Michael Johnson',
      age: 35,
      experience: '12 years',
      licenseNumber: 'DL789012',
      contactNumber: '+91 9876543211',
      busNumber: 'DEF456',
      route: 'Anna Nagar to School',
      school: 'ABC School',
    },
    {
      id: 3,
      name: 'David Williams',
      age: 38,
      experience: '14 years',
      licenseNumber: 'DL345678',
      contactNumber: '+91 9876543212',
      busNumber: 'GHI789',
      route: 'Adyar to School',
      school: 'PQR School',
    },
  ];

  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold text-center mb-4">School Bus Driver Details</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {drivers.map(driver => (
          <div key={driver.id} className="bg-gray-100 p-4 rounded-md shadow-md">
            <h2 className="text-2xl text-blue-500 font-bold mb-2"><FontAwesomeIcon icon={faUser} className="mr-2" />{driver.name}</h2>
            <div className='flex flex-col gap-2'>
            <p><FontAwesomeIcon icon={faClock} className="mr-2" /><strong>Age:</strong> {driver.age}</p>
            <p><FontAwesomeIcon icon={faClock} className="mr-2" /><strong>Experience:</strong> {driver.experience}</p>
            <p><FontAwesomeIcon icon={faIdCard} className="mr-2" /><strong>License Number:</strong> {driver.licenseNumber}</p>
            <p><FontAwesomeIcon icon={faPhone} className="mr-2" /><strong>Contact Number:</strong> {driver.contactNumber}</p>
            <p><FontAwesomeIcon icon={faBus} className="mr-2" /><strong>Bus Number:</strong> {driver.busNumber}</p>
            <p><FontAwesomeIcon icon={faRoute} className="mr-2" /><strong>Route:</strong> {driver.route}</p>
            <p><FontAwesomeIcon icon={faSchool} className="mr-2" /><strong>School:</strong> {driver.school}</p>

            </div>
       
          </div>
        ))}
      </div>
    </div>
  );
}

export default DriverDetails;
