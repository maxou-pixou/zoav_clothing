import React from "react"

const BrandLogo = ({ variant = "black", scale = "1"}) => {
    const filterStyle = variant === "white" ? "invert(1)" : "invert(0)"

    return (
        <div
            className="BrandLogo"
            style={{
                display: "flex",
                justifyContent: "center",
                borderRadius: "16px",
            }}
        >
            <img
                src="./assets/zoav_logo.svg"
                alt="logo zoav"
                style={{
                    display: "block",
                    backgroundColor: "transparent",
                    maxHeight: "50px",
                    filter: filterStyle,
                    transform: `scale(${scale})`
                }}
            />
        </div>
    )
}

export default BrandLogo
