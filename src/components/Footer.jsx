// src/components/Footer.jsx
import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaPinterestP } from 'react-icons/fa';
import logo from "../assets/images/ChatGPT Image Jun 25, 2025, 12_12_52 AM.png"

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = [
    {
      title: 'Destinations',
      links: [
        { name: 'London', href: '#' },
        { name: 'Canada', href: '#' },
        { name: 'United States of America ', href: '#' },
        { name: 'Turkey ', href: '#' },
        { name: 'South Africa', href: '#' },
        { name: 'Vietnam ', href: '#' },
        { name: 'Egypt ', href: '#' },
        { name: 'Morocco  ', href: '#' },
        
       
       
      ]
    },
    {
      title: '',
      links: [
        { name: 'France', href: '#' },
         { name: 'Lithuania ', href: '#' },
       { name: 'Japan ', href: '#' },
        { name: 'Tanzania ', href: '#' },
        { name: 'Spain', href: '#' },
        { name: 'Brazil', href: '#' },
        { name: 'Cameroon', href: '#' },
        { name: 'China', href: '#' },
        { name: 'Singapore', href: '#' },
      ]
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '#' },
        { name: 'Our Team', href: '#' },
        { name: 'Sustainability', href: '#' },
        { name: 'Careers', href: '#' },
        { name: 'Contact', href: '#' },
      ]
    },
    {
      title: 'Resources',
      links: [
        { name: 'Travel Guide', href: '#' },
        { name: 'Safari Blog', href: '#' },
        { name: 'Wildlife Guide', href: '#' },
        { name: 'Packing List', href: '#' },
        { name: 'FAQs', href: '#' },
      ]
    }
  ];

  const socialLinks = [
    { icon: <FaFacebookF />, href: '#' },
    { icon: <FaTwitter />, href: '#' },
    { icon: <FaInstagram />, href: '#' },
    { icon: <FaYoutube />, href: '#' },
    { icon: <FaPinterestP />, href: '#' },
  ];

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-16">
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
            {/* bg-gradient-to-r from-amber-500 to-orange-500 */}
              <div className=" rounded-xl w-14 h-14 flex items-center justify-center">
                <span className="text-white font-bold text-xl"><img src={logo}></img></span>
              </div>
              <span className="ml-3 text-2xl font-bold">Safari Trips</span>
            </div>
            <p className="text-gray-400 mb-6">
             Crafting memorable travel experiences with a focus on affordability and genuine connections.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a 
                  key={index}
                  href={social.href} 
                  className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-amber-600 transition-colors"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
          
          {footerLinks.map((section, index) => (
            <div key={index}>
              <h3 className="text-lg font-bold mb-6">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a 
                      href={link.href} 
                      className="text-gray-400 hover:text-amber-400 transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 mb-4 md:mb-0">
            &copy; {currentYear} Safari Trips. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-500 hover:text-amber-400 transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-500 hover:text-amber-400 transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-500 hover:text-amber-400 transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;