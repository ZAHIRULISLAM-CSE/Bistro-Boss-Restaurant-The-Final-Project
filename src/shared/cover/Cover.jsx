import React from "react";
import img1 from "../../assets/menu/banner3.jpg"

const Cover = ({img,title,subtitlte}) => {
  return (
    <div>
      <section  style={{ backgroundImage: `url(${img})`, opacity: 0.9 }} className="bg-center bg-no-repeat  bg-gray-700 bg-blend-multiply">
        <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
          {title}
          </h1>
          <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
           {subtitlte}
          </p>
        </div>
      </section>
    </div>
  );
};

export default Cover;
