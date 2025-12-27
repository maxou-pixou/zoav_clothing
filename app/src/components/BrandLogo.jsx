import React from "react"

const BrandLogo = ({ variant = "black", scale = 1 }) => {
    const filterStyle = variant === "white" ? "invert(1)" : "invert(0)"

    return (
        <div className="flex justify-center rounded-lg">
            <img
                src="./assets/zoav_logo.svg"
                alt="logo zoav"
                className={`
                    h-10         /* mobile */
                    sm:h-12      /* small screens */
                    md:h-14      /* medium screens */
                    lg:h-14      /* large screens */
                    2xl:h-18     /* extra large screens */
        `}
                style={{
                    filter: filterStyle,
                    transform: `scale(${scale})`,
                    display: "block",
                    backgroundColor: "transparent"
                }}
            />
        </div>
    )
}

export default BrandLogo
