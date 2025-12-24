import { React } from "react"

const BrandTitle = () => {
    return (
        <div className="BrandTitle" style={{
            display: "flex",
            justifyContent: "center",
            borderRadius: "16px",
            paddingTop: "10px",
        }}>
            <img src="./assets/zoav_title.svg" alt="logo zoav" style={{transform: "scale(4)", display: "block", backgroundColor: "transparent", height: "50px" }} />
        </div>
    )
}

export default BrandTitle
