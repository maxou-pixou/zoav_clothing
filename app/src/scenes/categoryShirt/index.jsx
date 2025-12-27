import React from "react"
import ClothBox from "@/components/ClothBox"

export default function CategoryShirt() {
    return (
      <body>
        <div className="p-8">
          <h1 className="text-2xl text-center font-bold text-gray-900">Catégorie Chemises</h1>
          <div
            className="mt-6
          w-full
          max-w-5xl
          h-[3px] bg-black rounded mx-auto"
          />
        </div>
        <div className="p-8 mb-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <ClothBox image="/assets/category_shirt.png" name="Chemise Blanche" price="39.99€" inStock={true} />
          <ClothBox image="/assets/category_shirt.png" name="Chemise Blanche" price="49.99€" inStock={false} />
          <ClothBox image="/assets/category_shirt.png" name="Chemise Blanche" price="79.99€" inStock={true} />
        </div>
      </body>
    )
}
