"use client";

import { Mail, Phone, MapPin } from 'lucide-react';
import { useMediaQuery } from "react-responsive";

import { Wrapper } from "@/components/wrapper";
import { minWidth } from "@/utils/media-query";


interface FooterProps {}

export const Footer: React.FC<FooterProps> = ({}) => {
  const isMobile = useMediaQuery({ query: minWidth(500) });

  return (
    <footer className="bg-[#8b182a] text-white">
    <Wrapper>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-8">
        {/* Contact Information */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Contact Us</h3>
          <div className="space-y-3">
            <div className="flex items-center space-x-3">
              <div className="bg-white/10 p-1.5 rounded">
                <Mail size={16} />
              </div>
              <div>
                <p className="font-medium">Dr. Sanjay Kataria</p>
                <p className="text-sm text-white/80">Librarian, Head of LRC</p>
                <a 
                  href="mailto:sanjay.kataria@bennett.edu.in" 
                  className="text-sm hover:text-white/90 transition-colors"
                >
                  sanjay.kataria@bennett.edu.in
                </a>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <div className="bg-white/10 p-1.5 rounded">
                <Phone size={16} />
              </div>
              <a 
                href="tel:+919810503341" 
                className="hover:text-white/90 transition-colors text-sm"
              >
                +91 98105 03341
              </a>
            </div>

            <div className="flex items-center space-x-3">
              <div className="bg-white/10 p-1.5 rounded">
                <MapPin size={16} />
              </div>
              <p className="text-sm leading-snug">
                Plot Nos 8-11, TechZone II,
                Greater Noida 201310,
                UP. India
              </p>
            </div>
          </div>
        </div>

        {/* Map */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Location</h3>
          <div className="rounded-md overflow-hidden">
            <iframe
              title="Bennett University Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.9590369267953!2d77.58162287495004!3d28.450651192317874!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cbf94deb6bc39%3A0x7ba6bedc9a2b537f!2sBennett%20University%20(Times%20of%20India%20Group)!5e0!3m2!1sen!2sin!4v1707510126183!5m2!1sen!2sin"
              width="100%"
              height="180"
              style={{ border: 0 }}
              loading="lazy"
              className="w-full"
            />
          </div>
        </div>
      </div>
    </Wrapper>

    {/* Copyright Bar */}
    <div className="bg-[#6b1220]">
      <Wrapper>
        <div className="py-2 text-center text-sm">
          <span>
            © {new Date().getFullYear()} Aalekh 2k25. All rights reserved.
          </span>
        </div>
      </Wrapper>
    </div>
  </footer>
  );
};
