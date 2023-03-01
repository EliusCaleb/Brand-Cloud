import React from "react";
import { FaFacebook, FaGithub, FaTwitter,  FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <div className="w-full mt-24 bg-slate-900 text-gray-300 py-8 px-2">
      <div className="max-w-[1240px] mx-auto grid grid-cols-2 md:grid-cols-6 border-b-2  border-gray-600 py-8">
        <div>
          <h1 className="font-bold pt-2 uppercase">Solutions</h1>
          <ul>
            <li className="py-1">Marketing</li>
            <li className="py-1">Analytics</li>
            <li className="py-1">Commerce</li>
            <li className="py-1">Data</li>
            <li className="py-1">Cloud</li>
          </ul>
        </div>
        <div>
          <h1 className="font-bold pt-2 uppercase">Support</h1>
          <ul>
            <li className="py-1">Pricing</li>
            <li className="py-1">API status</li>
            <li className="py-1">Documentation</li>
            <li className="py-1">Guides</li>
            <li className="py-1">Security</li>
          </ul>
        </div>
        <div>
          <h1 className="font-bold pt-2 uppercase">Company</h1>
          <ul>
            <li className="py-1">About</li>
            <li className="py-1">Careers</li>
            <li className="py-1">Partners</li>
            <li className="py-1">Blog</li>
          </ul>
        </div>
        <div>
          <h1 className="font-bold pt-2 uppercase">Legal</h1>
          <ul>
            <li className="py-1">Claims</li>
            <li className="py-1">Privacy</li>
            <li className="py-1">Terms</li>
            <li className="py-1">Policies</li>
            <li className="py-1">Conditions</li>
          </ul>
        </div>

        <div className="col-span-2 pt-8 md:pt-2">
             <p className="font-bold uppercase">Subscribe to our newsletter</p>
             <p className="py-4">The latest news, articles, and resources, sent to your inbox weekly.</p>
             <form className="flex flex-col sm:flex-row">
                <input  className= 'w-full p-2 mr-4 rounded-md mb-4'type='email' placeholder="enter email"/>
                <button className="mb-4 p-2">Subscribe</button>
             </form>
        </div>
      </div>

      <div className=" flex flex-col max-w-[1240px] px-2 py-4  justify-between m-auto  sm:flex-row text-gray-500 text-center">
        <p className="py-4"> 2022 Workflo w, LLC. All rights reserved </p>
        <div className="flex justify-between sm:w-[300px] pt-4 text-2xl">
            <FaFacebook />
            <FaInstagram />
            <FaTwitter />
            <FaGithub />
        </div>
      </div>
    </div>
  );
}

export default Footer;
