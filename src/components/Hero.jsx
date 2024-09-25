/** @format */

import { FaBookOpen } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";

const title = (
  <>
    Read, discover, set goals.
    <br /> All in one place.
  </>
);
const description =
  " Apple Books is the single destination for all the books you love—and all the ones you’ll love next. Browse the Book Store to find the perfect book to read. Track what you’ve read and want to read, and set your own Reading Goals—all in one app and across all your Apple devices.";

const Hero = () => {
  return (
    <div>
      <section className="text-gray-900 dark:text-white dark:bg-gray-800">
        <div className="px-4 mx-auto max-w-screen-xl text-center py-14 lg:py-36">
          <FaBookOpen className="mx-auto my-2 p-2 text-white text-7xl bg-orange-400 dark:bg-gray-800 dark:border dark:border-white rounded-md" />
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="mb-8 text-lg font-normal lg:text-xl sm:px-16 lg:px-48">
            {description}
          </p>
          <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
            <a
              href="#"
              className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
              Get started
              <FaArrowRightLong className="ml-3" />
            </a>
            <a
              href="#"
              className="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 sm:ms-4 text-base font-medium text-center rounded-lg border border-gray-800 dark:border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400">
              Learn more
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
