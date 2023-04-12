import React from "react";

const Footer = () => {
  return (
    <footer className="footer mt-10 p-10 bg-gray-900 text-white ">
      <div>
        <h3 className="text-2xl font-bold">Grow Jobs</h3>
        <p className="text-gray-300">
          Grow Jobs Ltd. Providing reliable job since 2110
        </p>
        <div className="w-20">
          <img
            className="w-full"
            src="/src/assets/Icons/Group9969.png"
            alt=""
          />
        </div>
      </div>
      <div>
        <span className="text-white font-semibold text-lg">Company</span>
        <a className="text-gray-300">About Us</a>
        <a className="text-gray-300">Work</a>
        <a className="text-gray-300">Latest News</a>
        <a className="text-gray-300">Careers</a>
      </div>
      <div>
        <span className="text-white font-semibold text-lg">Product</span>
        <a className="text-gray-300">Prototype</a>
        <a className="text-gray-300">Plans & Pricing</a>
        <a className="text-gray-300">Customers</a>
        <a className="text-gray-300">Integrations</a>
      </div>
      <div>
        <span className="text-white font-semibold text-lg">Support</span>
        <a className="text-gray-300">Help Desk</a>
        <a className="text-gray-300">Sales</a>
        <a className="text-gray-300">Become A Partner</a>
        <a className="text-gray-300">Developers</a>
      </div>
      <div>
        <span className="text-white font-semibold text-lg">Contact</span>
        <a className="text-gray-300">524 Broadway , NYC</a>
        <a className="text-gray-300">+1 777 - 978 - 5570</a>
      </div>
    </footer>
  );
};

export default Footer;
