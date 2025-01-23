'use client';

import { Mail, Phone } from 'lucide-react';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-gray-300 py-8">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between gap-8">

          <div className="flex-1">
            <div className="flex items-center gap-2 mb-4">
              <img
                src="/logo.png"
                alt="Logo"
                className="h-14"
              />
            </div>
            <address className="text-base text-gray-600 not-italic space-y-2 font-taviraj">
              <p>196-A Howth Rd,</p>
              <p>The Demesne, </p>
              <p>Killester,</p>
              <p>Dublin 3, </p>
              <p>D03 C1P8</p>
            </address>
            <div className="flex items-center gap-6 mt-4">
              {/* Social Icons */}
              <a href="#" target="_blank" rel="noreferrer" aria-label="Instagram">
                <Image
                  src="/icons/Instagram.png"
                  alt="Instagram"
                  width={24}
                  height={24}
                  className="h-6"
                />
              </a>
              <a href="#" target="_blank" rel="noreferrer" aria-label="Facebook">
                <Image
                  src="/icons/Facebook.png"
                  alt="Facebook"
                  width={24}
                  height={24}
                  className="h-6"
                />
              </a>
              <a href="#" target="_blank" rel="noreferrer" aria-label="YouTube">
                <Image
                  src="/icons/Youtube.png"
                  alt="Youtube"
                  width={24}
                  height={24}
                  className="h-6"
                />
              </a>
            </div>
          </div>

          {/* Get in Touch Section */}
          <div className="flex-1 text-gray-800">
            <div className="relative w-fit">
              <h3 className="text-lg font-semibold leading-10 tracking-wide mb-4 font-taviraj">
                Get in touch
              </h3>
              <div className="absolute left-0 bottom-0 w-16 h-0.5 bg-gray-500"></div>
            </div>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-gray-800 font-taviraj text-base leading-8 tracking-wide" />
                <span>0863460414</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-gray-800" />
                <a href="mailto:ananathaimassage@gmail.com" className="hover:underline font-taviraj text-base leading-8 tracking-wide">
                  amarathaimassage@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Useful Links Section */}
          <div className="flex-1 text-gray-800">
            <div className="relative w-fit">
              <h3 className="text-lg font-semibold leading-10 tracking-wide mb-4 font-taviraj">
                Useful Link
              </h3>
              <div className="absolute left-0 bottom-0 w-16 h-0.5 bg-gray-500"></div>
            </div>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <a href="#services" className="hover:underline font-taviraj text-base leading-8 tracking-wide">
                  Services
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:underline font-taviraj text-base leading-8 tracking-wide">
                  Gallery
                </a>
              </li>
              <li>
                <a href="#booking" className="hover:underline font-taviraj text-base leading-8 tracking-wide">
                  Booking
                </a>
              </li>
              <li>
                <a href="#testimonials-section" className="hover:underline font-taviraj text-base leading-8 tracking-wide">
                  Feedback
                </a>
              </li>
            </ul>
          </div>

          {/* Working Hours Section */}
          <div className="text-gray-800">
            <div className="relative w-fit">
              <h3 className="text-lg font-semibold leading-10 tracking-wide mb-4 font-taviraj">
                Working hours
              </h3>
              <div className="absolute left-0 bottom-0 w-16 h-0.5 bg-gray-500"></div>
            </div>


            {/* Content */}
            <div className="grid grid-cols-2 gap-x-1">

              <div className="space-y-1">
                <p className="text-base font-taviraj">Monday</p>
                <p className="text-base font-taviraj">Tuesday</p>
                <p className="text-base font-taviraj">Wednesday</p>
                <p className="text-base font-taviraj">Thursday</p>
                <p className="text-base font-taviraj">Friday</p>
                <p className="text-base font-taviraj">Saturday</p>
                <p className="text-base font-taviraj">Sunday</p>
              </div>

              <div className="space-y-1 text-right">
                <p className="text-base font-taviraj">11:00 - 19:00</p>
                <p className="text-base font-taviraj">11:00 - 19:00</p>
                <p className="text-base font-taviraj">11:00 - 19:00</p>
                <p className="text-base font-taviraj">11:00 - 19:00</p>
                <p className="text-base font-taviraj">11:00 - 19:00</p>
                <p className="text-base font-taviraj">11:00 - 18:00</p>
                <p className="text-base font-taviraj md:text-left">Closed</p>
              </div>
            </div>
          </div>
        </div>


        <div className=" mt-8 pt-4 text-center">
          <p className="text-gray-600 font-inter text-base font-normal leading-5">
            Amara © 2025 |{' '}
            <a href="#" className="hover:underline">
              Privacy Policy
            </a>{' '}
            | Website designed by BuyEx
          </p>
        </div>
      </div>
    </footer>
  );
}
