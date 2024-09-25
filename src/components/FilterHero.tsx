/** @format */

import React from "react";
import AutoSlider from "./AutoSlider";

// Added 'id' to each image object
const bestSelling = [
  {
    id: 1,
    src: "/images/book_01.jpg",
    title: "Nuclear War",
    author: "Rebecca Yarros",
  },
  {
    id: 2,
    src: "/images/book_02.jpg",
    title: "Convication",
    author: "Densia Mina",
  },
  {
    id: 3,
    src: "/images/book_03.jpg",
    title: "Hillbillty Elgey",
    author: "Sarah J.Maas",
  },
  {
    id: 4,
    src: "/images/book_04.jpg",
    title: "Harry Poter",
    author: "Liz Moore",
  },
  {
    id: 5,
    src: "/images/book_05.jpg",
    title: "Nuclear War",
    author: "Rebecca Yarros",
  },
  {
    id: 6,
    src: "/images/book_06.jpg",
    title: "Nuclear War",
    author: "Rebecca Yarros",
  },
  {
    id: 7,
    src: "/images/book_07.jpg",
    title: "Nuclear War",
    author: "Rebecca Yarros",
  },
];

const Trending = [
  {
    id: 1,
    src: "/images/book_08.jpg",
    title: "Nuclear War",
    author: "Rebecca Yarros",
  },
  {
    id: 2,
    src: "/images/book_09.jpg",
    title: "Convication",
    author: "Densia Mina",
  },
  {
    id: 3,
    src: "/images/book_10.jpg",
    title: "Hillbillty Elgey",
    author: "Sarah J.Maas",
  },
  {
    id: 4,
    src: "/images/book_11.jpg",
    title: "Harry Poter",
    author: "Liz Moore",
  },
  {
    id: 5,
    src: "/images/book_12.jpg",
    title: "Nuclear War",
    author: "Rebecca Yarros",
  },
  {
    id: 6,
    src: "/images/book_13.jpg",
    title: "Nuclear War",
    author: "Rebecca Yarros",
  },
  {
    id: 7,
    src: "/images/book_14.jpg",
    title: "Nuclear War",
    author: "Rebecca Yarros",
  },
];

const title = (
  <>
    Read, discover, set goals.
    <br /> All in one place.
  </>
);

const description =
  "Apple Books is the single destination for all the books you love—and all the ones you’ll love next. Browse the Book Store to find the perfect book to read. Track what you’ve read and want to read, and set your own Reading Goals—all in one app and across all your Apple devices.";

const FilterHero = () => {
  return (
    <div className="bg-center bg-no-repeat text-gray-800 dark:bg-gray-800 dark:text-white">
      <div className="px-4 mx-auto text-center pt-24 lg:pt-32">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl lg:text-6xl">
          {title}
        </h1>
        <p className="mb-8 text-lg font-normal lg:text-xl sm:px-16 lg:px-48">
          {description}
        </p>

        <div className="flex items-center justify-center">
          <div>
            <ul className="flex flex-col sm:flex-row rounded-xl sm:rounded-full justify-center align-middle gap-3 text-sm bg-gray-200 p-2">
              <li className="px-4 py-2 rounded-full cursor-pointer select-none dark:text-gray-800 hover:dark:text-white hover:bg-gray-800 hover:text-white transition-all">
                Bestselling Audiobooks
              </li>
              <li className="px-4 py-2 rounded-full cursor-pointer select-none bg-gray-800 text-white">
                New & Trending Ebooks
              </li>
              <li className="px-4 py-2 rounded-full cursor-pointer select-none dark:text-gray-800 hover:dark:text-white hover:bg-gray-800 hover:text-white transition-all">
                Fan-Favorite Audiobooks
              </li>
            </ul>
          </div>
        </div>

        {/* Passing updated 'bestSelling' and 'Trending' arrays */}
        <AutoSlider images={bestSelling} duration={20} />
        <AutoSlider images={Trending} duration={25} />
      </div>
    </div>
  );
};

export default FilterHero;
