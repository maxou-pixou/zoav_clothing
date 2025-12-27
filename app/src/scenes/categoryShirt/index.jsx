import React from "react"
import ClothBox from "@/components/ClothBox"

export default function CategoryShirt() {
    return (
      <body>
        <div className="p-8">
          <h1 className="text-2xl text-center font-bold text-gray-900">Catégorie Chemises</h1>
                <div className="mt-6
          w-full
          max-w-5xl
          h-[3px] bg-black rounded mx-auto" />
        </div>
        <ClothBox image="/assets/home_1.png" name="Chemise Blanche" price="39.99€" inStock={true} />
      </body>
    )
}
