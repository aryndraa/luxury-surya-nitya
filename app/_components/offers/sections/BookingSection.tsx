"use client";
import AboutRightDecor from "@/public/assets/home/faq-flower-r.svg";
import AboutLeftDecor from "@/public/assets/home/faq-flower-l.svg";
import Image from "next/image";
import HeadingLine from "../../HeadingLine";
import { useBooking } from "@/lib/store/booking";

export default function BookingSection() {
  const { data, setData, submitBooking } = useBooking();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setData({
      [name]: name === "guest" ? Number(value) : value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    submitBooking();
  };

  return (
    <section id="booking" className="relative">
      <div className=" absolute  bottom-0 top-0 h-full w-full  overflow-hidden  right-0 bg-white ">
        <div className="relative h-full">
          <Image
            src={AboutRightDecor}
            alt="about-bg"
            className="absolute saturate-0 w-52 md:w-64 lg:w-96 top-36 lg:top-auto   lg:bottom-0 -right-20 lg:-right-28 2xl:-right-8   opacity-40"
          />
          <Image
            src={AboutLeftDecor}
            alt="about-bg"
            className="absolute saturate-0 w-52 md:w-64 lg:w-96 top-36 lg:top-auto  lg:bottom-0  -left-20 2xl:-left-24  opacity-40"
          />
        </div>
      </div>

      <div className="2xl:container mx-auto px-4 md:px-8 lg:px-12 py-12 md:py-18 lg:py-24 relative z-1 flex flex-col items-center justify-center ">
        <div className="mb-8 md:mb-12">
          <HeadingLine>
            <div className="flex flex-col items-center text-center">
              <h1 className=" text-center text-3xl md:text-5xl font-playfair-display font-semibold mb-4 lg:mb-6 lg:text-nowrap">
                Book Your Private Escape
              </h1>
              <p className="text-sm md:text-base font-medium lg:font-normal">
                Reserve your stay at our exclusive villa and experience privacy,
                comfort, and timeless serenity in Karangasem.
              </p>
            </div>
          </HeadingLine>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-text-dark shadow-lg p-6 md:p-8 w-full lg:w-[60%] "
        >
          <h1 className="md:col-span-2 text-center text-3xl md:text-5xl font-playfair-display text-text-light font-semibold mb-8 md:mb-14 ">
            Check Availability
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 text-sm md:text-base">
            <input
              type="text"
              name="name"
              value={data.name}
              onChange={handleChange}
              required
              className="border-b border-text-light/40 focus:border-text-light pb-4  text-text-light placeholder:text-text-light/70 bg-transparent focus:outline-none transition ease-in-out"
              placeholder="Your name"
            />

            <input
              type="tel"
              name="phone"
              value={data.phone}
              onChange={handleChange}
              required
              className="border-b border-text-light/40 focus:border-text-light pb-4  text-text-light placeholder:text-text-light/70 bg-transparent focus:outline-none transition ease-in-out"
              placeholder="Phone Number"
            />

            <select
              name="package"
              value={data.package}
              onChange={handleChange}
              required
              className={`border-b pb-4 bg-transparent focus:outline-none transition ease-in-out
                ${
                  data.package
                    ? "text-text-light border-text-light"
                    : "text-text-light/70 border-text-light/40"
                }
            `}
            >
              <option value="" disabled>
                Select package
              </option>
              <option value="romantic" className="text-text-dark">
                Romantic Escape
              </option>
              <option value="family" className="text-text-dark">
                Family Getaway
              </option>
              <option value="honeymoon" className="text-text-dark">
                Honeymoon Package
              </option>
            </select>

            <div className="flex border-b pb-4 border-text-light/40 focus-within:border-text-light transition-colors duration-300">
              <label className="text-text-light/70 mr-2">Guests :</label>

              <input
                type="number"
                name="guest"
                value={data.guest}
                min={1}
                onChange={handleChange}
                required
                className="text-text-light placeholder:text-text-light/70 bg-transparent focus:outline-none"
              />
            </div>

            <div className="flex items-center gap-2 border-b pb-4 border-text-light/40 focus-within:border-text-light transition-colors duration-300 md:col-span-2">
              <label className="text-text-light/70 whitespace-nowrap">
                Reservation Date :
              </label>
              <input
                type="date"
                name="reservationDate"
                value={data.reservationDate}
                onChange={handleChange}
                required
                className="w-full text-text-light bg-transparent placeholder:text-text-light/70 focus:outline-none"
              />
            </div>

            <button
              type="submit"
              className="md:col-span-2 mt-4 bg-primary text-white py-3 font-semibold font-playfair-display text-lg rounded hover:opacity-90 transition"
            >
              Check Availability
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
