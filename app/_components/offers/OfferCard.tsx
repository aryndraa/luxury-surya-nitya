"use client";
import Button from "../Button";
import Image, { StaticImageData } from "next/image";
import { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";

interface OfferCardProps {
  align?: "right" | "left";
  image: StaticImageData;
  title: string;
  description: string;
  inclusions: string[];
}

export default function OfferCard({
  align = "right",
  title,
  image,
  description,
  inclusions,
}: OfferCardProps) {
  const [openModal, setOpenModal] = useState<boolean>(false);

  useEffect(() => {
    if (openModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [openModal]);

  return (
    <>
      <div
        className={`flex flex-col md:flex-row relative w-full ${
          align === "right" ? "justify-start" : "justify-end"
        }`}
      >
        <Image
          src={image}
          alt="package-image"
          className="w-full lg:w-[50vw] lg:h-[70vh] object-cover "
        />
        <div
          className={`p-4 md:p-6 lg:p-8 bg-foreground flex flex-col gap-8 lg:gap-12 lg:absolute top-1/2 lg:-translate-y-1/2 lg:w-[60%] ${
            align === "right" ? " right-0" : "left-0"
          }`}
        >
          <div className="flex flex-col gap-5 ">
            <div>
              <h3 className="text-2xl lg:text-4xl  font-playfair-display font-semibold mb-2 md:mb-4">
                {title}
              </h3>
              <p className="text-sm lg:text-base">{description}</p>
            </div>
            <div>
              <h4 className="font-playfair-display text-xl md:text-2xl font-semibold mb-2 md:mb-4 ">
                Inclusions
              </h4>
              <ul className="text-sm lg:text-base list-disc pl-4 space-y-3 lg:space-y-2">
                {inclusions.slice(0, 3).map((value, index) => (
                  <li key={index}>
                    {value}
                    {index === 2 && "....."}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="flex flex-col gap-3 lg:flex-row justify-end">
            <Button
              onclick={() => setOpenModal(true)}
              type="button"
              style="secondary"
            >
              More Detail
            </Button>
            <Button type="button">Booking Package</Button>
          </div>
        </div>
      </div>

      {openModal && (
        <div className="fixed min-h-screen inset-0 bg-black/40 z-50 flex justify-center items-center ">
          <div className="2xl:container mx-auto md:px-8 lg:px-12">
            <div className=" bg-foreground p-4 md:p-6 lg:p-8 max-h-screen overflow-y-scroll lg:overflow-y-hidden flex flex-col lg:flex-row gap-4 md:gap-8 lg:gap-12  ">
              <Image
                src={image}
                alt="package-image"
                className="aspect-square w-full object-cover "
              />
              <div className="lg:py-4">
                <div className="mb-8 md:mb-8 flex flex-col gap-6 ">
                  <div>
                    <div>
                      <h3 className="text-2xl lg:text-4xl  font-playfair-display font-semibold mb-2 md:mb-4">
                        {title}
                      </h3>
                      <p className="text-sm lg:text-base">{description}</p>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-playfair-display text-xl md:text-2xl font-semibold mb-3 md:mb-4 ">
                      Inclusions
                    </h4>
                    <ul className="text-sm lg:text-base list-disc pl-4 space-y-3 lg:space-y-2">
                      {inclusions?.map((value, index) => (
                        <li key={index}>{value}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="flex flex-col lg:flex-row justify-between lg:items-end  gap-6  ">
                  <div>
                    <h5 className="font-playfair-display text-lg md:text-xl font-semibold mb-2s">
                      Start From
                    </h5>
                    <strong className="text-3xl font-playfair-display text-primary">
                      Rp. 12.000.000 /<span className="text-lg">Night</span>
                    </strong>
                  </div>
                  <div className="flex flex-col gap-3 lg:flex-row justify-end">
                    <Button type="button">Booking Package</Button>
                    <Button
                      onclick={() => setOpenModal(false)}
                      type="button"
                      style="secondary"
                    >
                      <div className="flex items-center justify-center gap-2">
                        <span className="text-xl">
                          <IoClose />
                        </span>
                        Close
                      </div>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
