import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBus, faRoute, faUser, faUsers } from '@fortawesome/free-solid-svg-icons';

function BusDetails() {
  const buses = [
    {
      id: 1,
      location: 'Central Station',
      busNumber: 'ABC123',
      capacity: 50,
      passengers: 35,
      driver: 'John Doe',
      conductor: 'Jane Smith',
      route: 'Central Station to School',
    },
    {
      id: 2,
      location: 'Anna Nagar',
      busNumber: 'DEF456',
      capacity: 60,
      passengers: 40,
      driver: 'Michael Johnson',
      conductor: 'Emily Brown',
      route: 'Anna Nagar to School',
    },
    {
      id: 3,
      location: 'Adyar',
      busNumber: 'GHI789',
      capacity: 45,
      passengers: 30,
      driver: 'David Williams',
      conductor: 'Sophia Wilson',
      route: 'Adyar to School',
    },
  ];

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold text-center text-orange-500 mb-4">Bus Details</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {buses.map(bus => (
          <div key={bus.id} className="bg-gray-100 p-4 rounded-md shadow-md">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl text-blue-500 font-bold">{bus.location}</h2>
              <FontAwesomeIcon icon={faBus} className="text-xl text-red-500" />
            </div>
            <div className='flex flex-col gap-4'>
            <p><strong><FontAwesomeIcon icon={faBus} className="mr-2" />Bus Number:</strong> {bus.busNumber}</p>
            <p><strong><FontAwesomeIcon icon={faUsers} className="mr-2" />Capacity:</strong> {bus.capacity}</p>
            <p><strong><FontAwesomeIcon icon={faUsers} className="mr-2" />Passengers:</strong> {bus.passengers}</p>
            <p><strong><FontAwesomeIcon icon={faUser} className="mr-2" />Driver:</strong> {bus.driver}</p>
            <p><strong><FontAwesomeIcon icon={faUser} className="mr-2" />Conductor:</strong> {bus.conductor}</p>
            <p><strong><FontAwesomeIcon icon={faRoute} className="mr-2" />Route:</strong> {bus.route}</p>
            <p className='text-green-400 font-bold'>Status: {bus.passengers < bus.capacity ? 'Available' : 'Full'}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BusDetails;
