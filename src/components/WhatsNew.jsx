import React from "react";
import img1 from "../assets/digital_gold.webp";
import img2 from "../assets/gold_investment.jpeg";
import img3 from "../assets/diamond_jewellery.jpeg";

const WhatsNew = () => {
  const pageData = [
    {
      id: 1,
      img: img1,
      name: "Digital Gold",
    },
    {
      id: 2,
      img: img2,
      name: "Investment Plan",
    },
    {
      id: 3,
      img: img3,
      name: "Diamond Jewellery",
    },
  ];
  return (
    <div className="">
      <h1 className="mb-4 text-4xl tracking-tight font-extrabold text-center uppercase text-gray-900 py-10">
        What&apos;s New
      </h1>
      <div className="grid grid-cols-3  gap-2 w-[80vw] mx-auto">
        {pageData?.map((data) => {
          return (
            <div key={data?.id} className="h-full aspect-video relative">
              <div
                style={{ backgroundImage: `url(${data?.img})` }}
                className=" h-full bg-cover bg-center"
              >
                <h1 className=" top-5 right-5 font-semibold italic text-xl absolute text-white">
                  {data?.name}
                </h1>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WhatsNew;
