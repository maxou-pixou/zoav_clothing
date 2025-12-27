import React from "react"

const ClothBox = ({ image, name, price, inStock }) => {
  return (
    <div className="flex flex-col items-center bg-white rounded-lg shadow-md overflow-hidden max-w-xs mx-auto">
     
      <div className="w-full">
        <img src={image} alt={name} className="w-full aspect-square object-cover" />
      </div>

      <div className="w-full p-4 flex flex-col items-center gap-2">
        <h3 className="text-lg font-bold text-gray-900 text-center">{name}</h3>
        <p className="text-gray-700 font-semibold">{price}</p>
        <p className={`text-sm ${inStock ? "text-green-600" : "text-red-600"}`}>{inStock ? "En stock" : "Rupture"}</p>
        <button className="bg-primary text-white px-4 py-2 rounded hover:bg-secondary transition-colors" disabled={!inStock}>
          Ajouter au panier
        </button>
      </div>
    </div>
  )
}

export default ClothBox
