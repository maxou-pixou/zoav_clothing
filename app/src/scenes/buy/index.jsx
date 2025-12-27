import React from "react"
import ClothCategory from "@/components/ClothCategory"

export default function Buy() {
  return (
    <div>
      <div className="p-8">
        <h1 className="text-2xl text-center font-bold text-gray-900">Catalogue</h1>
        <div className="mt-6 w-full max-w-5xl h-[3px] bg-black rounded mx-auto" />
      </div>

      <div className="p-8 mb-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <ClothCategory image="/assets/category_jean.png" categoryName="Jeans" path="jean" />
        <ClothCategory image="/assets/category_shirt.png" categoryName="Chemises" path="shirt" />
      </div>
    </div>
  )
}
