/** @format */

"use client";

import Image from "next/image";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";

const mobileImages = [
  {
    index: 1,
    src: "/images/iphone_01.png",
    desc: "iphone_1",
    speed: 10,
  },
  {
    index: 2,
    src: "/images/iphone_02.png",
    desc: "iphone_2",
    speed: 20,
  },
  {
    index: 3,
    src: "/images/iphone_03.png",
    desc: "iphone_3",
    speed: 10,
  },
  {
    index: 4,
    src: "/images/iphone_04.png",
    desc: "iphone_4",
    speed: 20,
  },
  {
    index: 5,
    src: "/images/iphone_05.png",
    desc: "iphone_5",
    speed: 10,
  },
];

function MobileGallery() {
  return (
    <ParallaxProvider>
      <div className="flex gap-10 mx-auto justify-center align-middle overflow-hidden h-[38rem] max-w-[1600px]">
        {mobileImages.map((photo, index, speed) => {
          return (
            <Parallax speed={photo.speed} key={index}>
              <div key={photo.index}>
                <Image
                  src={photo.src}
                  width={279}
                  height={576}
                  alt={photo.desc}
                />
              </div>
            </Parallax>
          );
        })}
      </div>
    </ParallaxProvider>
  );
}

export default MobileGallery;
