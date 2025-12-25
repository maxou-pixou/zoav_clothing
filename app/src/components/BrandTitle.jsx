import React from "react"
import BrandLogo from "@/components/BrandLogo"

const BrandTitle = () => {

    const compiledStyle = {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "20px",

    }
    const rowStyle = {
        display: "flex",
        flexDirection: "row", 
        alignItems: "center",
        gap: "25%", 
        justifyContent: "center",
        }

    const titleStyle = {
        width: "20%",
        display: "block",
        backgroundColor: "transparent",
        transform: "translateY(-40%) scale(1.5)",
    }

    const lineStyle = {
        marginBot: "10px", 
        width: "100%",     
        height: "2px",     
        backgroundColor: "black",
        borderRadius: "1px",
    }

    return (
        <div className="BrandTitle" style={compiledStyle}>
            <div style={rowStyle}>
                <img
                    src="./assets/zoav_title.svg"
                    alt="logo zoav"
                    style={titleStyle}
                
                />
                <div style={{ transform: "translateY(-100%)" }}>
                    <BrandLogo scale="2.5"/>
                </div>
            </div>
            <div style={lineStyle} />
        </div>
    )
}

export default BrandTitle
