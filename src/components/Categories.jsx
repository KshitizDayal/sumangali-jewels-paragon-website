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
    },
    {
      id: 2,
      categoryName: "Earrings",
      img: earing,
    },
    {
      id: 3,
      categoryName: "Pendants",
      img: chandbali,
    },
    {
      id: 4,
      categoryName: "Bangels",
      img: bangles,
    },
    {
      id: 5,
      categoryName: "Bracelets",
      img: bracelet,
    },
    {
      id: 6,
      categoryName: "Haram",
      img: haram,
    },
    {
      id: 7,
      categoryName: "Jhumka",
      img: jhumka,
    },
    {
      id: 8,
      categoryName: "Choker",
      img: choker,
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
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Categories;
