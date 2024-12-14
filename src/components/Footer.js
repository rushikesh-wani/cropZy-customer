import React from "react";

const Footer = () => {
  return (
    <div className="bg-black text-white p-2">
      <div className="my-2 grid grid-flow-row grid-cols-2 gap-2">
        <div>
          <p className="text-lg">Category</p>
          <ul className="text-sm">
            <li>Fresh Fruits</li>
            <li>Vegetables</li>
            <li>Cereals</li>
            <li>Dairy Product</li>
          </ul>
        </div>
        <div>
          <p className="text-lg">Support</p>
          <p className="text-lg">Contact Us</p>
          <p className="text-lg">Follow Us</p>
        </div>
      </div>
      <hr className="text-gray-400" />
      <div className="p-2">
        <p className="p-2 w-fit mx-auto text-transparent bg-clip-text bg-gradient-to-br from-white via-gray-400 to-gray-900 text-5xl font-bold text-center">
          cropZy
        </p>
        <p className="text-gray-400 text-center">
          Get farm fresh within seconds
        </p>
      </div>
      <p className="text-sm text-center">Copyright @2024</p>
    </div>
  );
};

export default Footer;
