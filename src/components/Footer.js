import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="font-montserrat bg-black text-white dark:bg-[#131518]">
      <div className="container mx-auto px-4 py-10">
        {/* Top Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {/* About Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <p className="text-sm text-gray-400">
              cropZy modern delivery services to bring you closer to the
              essentials you need every day.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="text-sm text-gray-400 space-y-2">
              <li>
                <Link to={"/"} className="hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link className="hover:text-white">Categories</Link>
              </li>
              <li>
                <Link className="hover:text-white">Offers</Link>
              </li>
              <li>
                <Link className="hover:text-white">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Support Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="text-sm text-gray-400 space-y-2">
              <li>
                <a href="#!" className="hover:text-white">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#!" className="hover:text-white">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#!" className="hover:text-white">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#!" className="hover:text-white">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <Link className="text-gray-400 hover:text-white">
                <Facebook />
              </Link>
              <Link className="text-gray-400 hover:text-white">
                <Instagram />
              </Link>
              <Link className="text-gray-400 hover:text-white">
                <Twitter />
              </Link>
              <Link className="text-gray-400 hover:text-white">
                <Linkedin />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-10 border-t border-gray-700 pt-6 flex flex-col md:flex-row items-center justify-between">
          {/* <div className="p-2">
            <p className="p-2 w-fit mx-auto text-transparent bg-clip-text bg-gradient-to-br from-white via-gray-400 to-gray-900 text-3xl font-bold text-center">
              cropZy
            </p>
            <p className="text-gray-400 text-sm text-center">
              Get farm fresh within seconds
            </p>
          </div> */}
          <p className="text-sm text-gray-400">
            © 2024 CropZy. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link className="text-gray-400 hover:text-white text-sm">
              Privacy Policy
            </Link>
            <Link className="text-gray-400 hover:text-white text-sm">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
