import React from "react"
import BrandLogo from "@/components/BrandLogo"

const BrandTitle = () => {
    return (
        <div className="flex flex-col items-center mt-8 px-4">
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-16">
                <img
                    src="./assets/zoav_title.svg"
                    alt="logo zoav"
                    className="
                        w-56   
                        sm:w-64
                        md:w-72
                        lg:w-80"/>
                
                <div className="">
                    <BrandLogo scale="2"/>  
                </div>
            </div>
            <div className="mt-6 w-full max-w-5xl h-[3px] bg-black rounded" />
        </div>
    )
}

export default BrandTitle
