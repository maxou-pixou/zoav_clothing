import React from "react"
import { Link } from "react-router-dom"

const ClothCategory = ({ image, categoryName, path }) => {
    return (
        <div className="flex flex-col items-center bg-white rounded-lg shadow-md overflow-hidden max-w-xs mx-auto">
            <div className="w-full">
                <img src={image} alt={categoryName} className="w-full aspect-square object-cover" />
            </div>

            <div className="w-full p-4 flex flex-col items-center gap-2">
                <Link to={path} className="bg-primary text-white px-4 py-2 rounded hover:bg-secondary transition-colors">
                    Catégorie {categoryName}
                </Link>
            </div>
        </div>
    )
}

export default ClothCategory
