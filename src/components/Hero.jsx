import React from "react";

const Hero = () => {
  return (
    <div className="max-w-[1640ppx] mx-auto p-4">
      <div className="max-h-[500px] relative">
        {/* `Overlay */}
        <div className="absolute w-full h-full text-white max-h-[500px] bg-black/40 flex flex-col justify-center">
          <h1 className="px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
            Restuarant food,
          </h1>
          <h1 className="px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
            takeaway <span className="text-orange-600">Delivered.</span>
          </h1>
        </div>
        <img
          className="w-full max-h-[500px] object-cover"
          src="https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
        />
      </div>
    </div>
  );
};

export default Hero;
