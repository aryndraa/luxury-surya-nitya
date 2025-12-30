import React from "react";

export default function MapSection() {
  return (
    <section id="map">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31572.04222394793!2d115.5862558608064!3d-8.450143561740008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dcdff54a5a9ceed%3A0x158d2198ae21cbf0!2sAmlapura%2C%20Kec.%20Karangasem%2C%20Kabupaten%20Karangasem%2C%20Bali!5e0!3m2!1sid!2sid!4v1767084640989!5m2!1sid!2sid"
        loading="lazy"
        className="w-full h-64 md:h-82 lg:h-96"
      ></iframe>
    </section>
  );
}
