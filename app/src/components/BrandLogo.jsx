import { React } from "react"

const BrandLogo = () => {
    return (
        <div className="BrandLogo" style={{ 
            display: "flex", 
            justifyContent: "center", 
            // background: "#ffffff",
            borderRadius: "16px",
            
            }}>
            <img src="./assets/zoav_logo.svg" alt="logo zoav" style={{  filter: "invert(1)", display: "block", backgroundColor: "transparent", maxHeight: "50px" }} />
        </div>
    )
}

export default BrandLogo
