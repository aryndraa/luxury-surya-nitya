import { create } from "zustand";

export interface BookingData {
  name: string;
  phone: string;
  package: string;
  guest: number;
  reservationDate: string;
}

interface BookingState {
  data: BookingData;
  isFormFilled: boolean;

  setData: (data: Partial<BookingData>) => void;
  setPackage: (pkg: string) => void;
  setFormFilled: (value: boolean) => void;
  submitBooking: () => void;
}

const isFormReady = (data: BookingData) =>
  !!data.name || !!data.phone || !!data.package || !!data.reservationDate;

export const useBooking = create<BookingState>((set, get) => ({
  data: {
    name: "",
    phone: "",
    package: "",
    guest: 1,
    reservationDate: "",
  },

  isFormFilled: false,

  setData: (data) =>
    set((state) => {
      const updatedData = { ...state.data, ...data };

      return {
        data: updatedData,
        isFormFilled: isFormReady(updatedData),
      };
    }),

  setPackage: (pkg) =>
    set((state) => {
      const updatedData = { ...state.data, package: pkg };

      const isFilled =
        !!updatedData.name ||
        !!updatedData.phone ||
        !!updatedData.package ||
        updatedData.guest > 0 ||
        !!updatedData.reservationDate;

      return {
        data: updatedData,
        isFormFilled: isFilled,
      };
    }),

  setFormFilled: (value) => set({ isFormFilled: value }),

  submitBooking: () => {
    const { data, isFormFilled } = get();

    if (!isFormFilled) {
      alert("Please complete all booking fields");
      return;
    }

    const message = `
        New Booking Request:
        Name: ${data.name}
        Phone: ${data.phone}
        Package: ${data.package}
        Guests: ${data.guest}
        Date: ${data.reservationDate}
    `;

    const whatsappUrl = `https://wa.me/62XXXXXXXXXX?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappUrl, "_blank");
  },
}));
