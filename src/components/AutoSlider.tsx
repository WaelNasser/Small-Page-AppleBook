/** @format */

import Image from "next/image";

interface ImageProps {
  src: string;
  title: string;
  author: string;
  id: string | number;
}

interface AutoSliderProps {
  images: ImageProps[];
  duration: number;
}

const AutoSlider: React.FC<AutoSliderProps> = ({ images, duration }) => {
  return (
    <>
      <div className="slider h-72 mt-10 overflow-hidden flex">
        <div
          className="flex gap-5 cursor-pointer animate-swipe hover:[animation-play-state:paused]"
          style={{ animationDuration: `${duration}s` }}>
          {[...images, ...images, ...images].map(
            ({ src, title, author, id }) => (
              <div key={id} className="flex flex-col items-start flex-shrink-0">
                <Image
                  src={src}
                  alt={title}
                  width={195}
                  height={195}
                  className="w-52 h-52 object-cover rounded-md"
                />
                <span className="pt-2">{title}</span>
                <span className="text-gray-400">{author}</span>
              </div>
            )
          )}
        </div>
      </div>
    </>
  );
};

export default AutoSlider;
