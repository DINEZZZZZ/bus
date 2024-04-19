import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-4 mt-10 ">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} Bus QR Scanner. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
