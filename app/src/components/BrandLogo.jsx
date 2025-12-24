import { React } from "react"

const BrandLogo = () => {
    return (
        <div className="BrandLogo" style={{ display: "flex", justifyContent: "center" }}>
            <img src="./assets/zoav_logo.png" alt="logo zoav" style={{ transform: "scale(0.8)", display: "block", backgroundColor: "transparent", maxHeight: "50px" }} />
        </div>
    )
}

export default BrandLogo
