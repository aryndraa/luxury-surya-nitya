import Image from "next/image";
import Link from "next/link";
import React from "react";
import FooterLink from "../FooterLink";

export default function Footer() {
  return (
    <footer>
      <div className="min-h-[35vh] lg:min-h-[50vh] cta-bg bg-center bg-cover bg-no-repeat bg-blend-multiply bg-text-dark/80 flex items-center justify-center">
        <div className="text-center flex flex-col items-center gap-6 md:gap-8 lg:gap-12">
          <strong className="font-playfair-display text-3xl md:text-6xl tracking-wider text-white">
            Get Up to 30% off <br />
            Your First Stay!
          </strong>
          <button className="bg-primary font-playfair-display px-4 py-2 text-base md:text-lg text-white  tracking-wider font-medium">
            Booking Now
          </button>
        </div>
      </div>
      <div className="bg-background 2xl:container mx-auto px-4 md:px-8 lg:px-12 py-8 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-8 pb-8 border-b border-primary">
          <div>
            <Image
              src="/logo-2.svg"
              alt="logo"
              width={100}
              height={100}
              className="w-40 md:w-48 lg:w-52"
            />
            <p className="font-medium w-[80%]">
              Experience luxury hotel and get unforgettable memories.
            </p>
          </div>
          <FooterLink
            title="Quick Links"
            links={[
              { name: "Overview", href: "/" },
              { name: "About Us", href: "/about" },
              { name: "Facilities", href: "/facilities" },
              { name: "Offers", href: "/offers" },
            ]}
          />
          <FooterLink
            title="Our Social Media"
            links={[
              { name: "Facebook", href: "/" },
              { name: "Instagram", href: "/" },
              { name: "Tik Tok", href: "/" },
            ]}
          />
          <FooterLink
            title="Reach Out"
            links={[
              {
                name: "A: Jln. Mulyani No. 2, Desa Manggis, Karangasem, Bali",
                href: "/",
              },
              { name: "P: +62 895-2800-5812", href: "/" },
              { name: "E: devcupsite@gmail.com", href: "/" },
            ]}
          />
        </div>
        <div>
          <p className="font-medium">Copyright © All Right Reserved</p>
        </div>
      </div>
    </footer>
  );
}
