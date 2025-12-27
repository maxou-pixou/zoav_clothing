import React from "react"
import BrandTitle from "@/components/BrandTitle"
import ClothCategory from "@/components/ClothCategory"

export default function Home() {
  const photos = ["/assets/home_1.png", "/assets/home_3.png", "/assets/home_4.png", "/assets/home_2.png"]

  return (
    <div className="min-h-screen">
      <BrandTitle />

      <h1 className="text-2xl md:text-6xl font-bold text-center text-gray-900 py-2">Qui Sommes-Nous</h1>
      <p className="mt-4 text-center text-gray-700 max-w-2xl mx-auto py-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>

      <div className="flex flex-col md:flex-row relative">
        <div
          className="hidden md:flex md:flex-col md:w-1/2 bg-repeat-y"
          style={{
            backgroundImage: "url('./assets/diary.svg')"
          }}
        >
          <div className="p-8 flex flex-col gap-6" style={{ marginLeft: "15%" }}>
            <ClothCategory image="/assets/category_jean.png" categoryName="Jeans" path="/buy/jean" className="w-48 md:w-56 lg:w-60" />

            <ClothCategory image="/assets/category_shirt.png" categoryName="Chemises" path="/buy/shirt" className="w-48 md:w-56 lg:w-60" />
          </div>
        </div>

        <div className="w-full md:w-1/2 flex flex-wrap px-2 py-4">
          {photos.map((photo, index) => (
            <div key={index} className="w-full sm:w-1/2 p-2">
              <img src={photo} alt={`homePagePhoto ${index + 1}`} className="w-full h-auto object-cover rounded transition-transform duration-300 hover:scale-105" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
