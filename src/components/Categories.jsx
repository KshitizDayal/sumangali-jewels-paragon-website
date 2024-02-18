import React from "react";
import bangles from "../assets/bangles.jpeg";
import bracelet from "../assets/bracelet.jpeg";
import chandbali from "../assets/chandbali.webp";
import choker from "../assets/choker.webp";
import earing from "../assets/earing.jpeg";
import haram from "../assets/Haram.jpg";
import jhumka from "../assets/Jhumka.webp";
import ring from "../assets/Ring.jpeg";

const Categories = () => {
  const pageData = [
    {
      id: 1,
      categoryName: "Rings",
      img: ring,
      price: 20000,
    },
    {
      id: 2,
      categoryName: "Earrings",
      img: earing,
      price: 15000,
    },
    {
      id: 3,
      categoryName: "Pendants",
      img: chandbali,
      price: 5000,
    },
    {
      id: 4,
      categoryName: "Bangels",
      img: bangles,
      price: 1000,
    },
    {
      id: 5,
      categoryName: "Bracelets",
      img: bracelet,
      price: 25000,
    },
    {
      id: 6,
      categoryName: "Haram",
      img: haram,
      price: 25000,
    },
    {
      id: 7,
      categoryName: "Jhumka",
      img: jhumka,
      price: 5000,
    },
    {
      id: 8,
      categoryName: "Choker",
      img: choker,
      price: 30000,
    },
  ];
  return (
    <div className="">
      <h1 className="mb-4 text-4xl tracking-tight font-extrabold text-center uppercase text-gray-900 py-10">
        Browse by Categories
      </h1>
      <div className="grid grid-cols-2  gap-2 w-[80vw] mx-auto">
        {pageData?.map((data) => {
          return (
            <div key={data?.id} className="h-full aspect-square relative">
              <div
                style={{ backgroundImage: `url(${data?.img})` }}
                className=" h-full bg-cover bg-center"
              >
                <h1 className=" top-5 left-5 font-semibold italic text-xl absolute">
                  {data?.categoryName}
                </h1>
                <h1 className=" bottom-5 right-5 font-normal italic text-l absolute">
                  Price starting from &#8377;{data?.price}
                </h1>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Categories;
