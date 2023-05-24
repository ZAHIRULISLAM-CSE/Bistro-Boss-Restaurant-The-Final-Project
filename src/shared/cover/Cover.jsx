import React from "react";
import { Parallax, Background } from "react-parallax";

const Cover = ({ img, title, subtitlte }) => {
  return (
    <div>
      <Parallax
        blur={{ min: -50, max: 50 }}
        bgImage={img}
        bgImageAlt="the cover"
        strength={-200}
      >
        <section
        >
          <div className="px-4 mx-auto bg-fixed max-w-screen-xl text-center py-24 lg:py-56">
            <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
              {title}
            </h1>
            <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
              {subtitlte}
            </p>
          </div>
        </section>
      </Parallax>
    </div>
  );
};

export default Cover;
