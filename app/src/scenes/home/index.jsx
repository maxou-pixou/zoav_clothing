import React from "react";
import BrandTitle from "@/components/BrandTitle";

export default function Home() {
  const mainPageWallpaper = {
    backgroundImage: "url('./assets/diary.svg')",
    backgroundRepeat: "repeat-y",
    backgroundPosition: "left top",
    width: "50vw", 
  };

  const photos = [
    "/assets/home_1.png",
    "/assets/home_2.png",
    "/assets/home_3.png",
    "/assets/home_4.png",
  ];

  return (
    <body>
      <div><BrandTitle /></div>

      <div className="flex bg-gray-200">
        
        <div style={mainPageWallpaper}></div>

        
        <div className="w-1/2 flex flex-wrap -mx-2">
          {photos.map((photo, index) => (
            <div
              key={index}
              className="w-1/2 mb-4" 
              style={{
                marginLeft: index % 2 !== 0 ? "275px" : 0, 
              }}
            >
              <img
                src={photo}
                alt={`homePagePhoto ${index + 1}`}
                className="w-full h-auto object-cover rounded scale-105 transition-transform duration-300 hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>

      
      <div className="mt-4 flex space-x-4">
        <a href="/buy" className="text-blue-500 hover:text-blue-700">Catalogue</a>
        <a href="/buy/jeans" className="text-blue-500 hover:text-blue-700">Jeans</a>
        <a href="/buy/chemises" className="text-blue-500 hover:text-blue-700">Chemises</a>
      </div>
    </body>
  );
}
