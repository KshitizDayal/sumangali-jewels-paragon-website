import React from "react";
import phone from "../assets/phone.png";
import email from "../assets/email.png";

const Contact = () => {
  return (
    <section className="bg-white">
      <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center uppercase text-gray-900">
          Contact Us
        </h2>
        <p className="mb-8 lg:mb-16 font-light text-center text-gray-500  sm:text-xl">
          # 45, 3rd Main Road, 4th Cross, Chamarajpet, Diagonally Opposite
          Corporation Bank, Bangalore - 560018
        </p>

        <div className="font-light text-center text-gray-500 w-fit mx-auto">
          <div className="flex gap-5 items-center mb-2">
            <img src={phone} alt="" className="w-5 aspect-square" />
            <p>+91 9886563433</p>
          </div>
          <div className="flex gap-5 items-center mb-2">
            <img src={phone} alt="" className="w-5 aspect-square" />
            <p>+91 8026620074</p>
          </div>
          <div className="flex gap-5 items-center mb-2">
            <img src={email} alt="" className="w-5 aspect-square" />
            <p>sumangalijewelsparagon@gmail.com</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
