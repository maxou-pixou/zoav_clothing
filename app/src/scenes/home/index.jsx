import React from "react"
import BrandTitle from "@/components/BrandTitle"

export default function Home() {
    const styles = {
    minHeight: "140vh",
    backgroundImage: "url('./assets/diary.svg')", 
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "contain",
    
    };
  return (
    <div>
      <div className="p-8">
        <div>
        <BrandTitle />
        </div>
        <div className="flex flex-col justify-center items-center" style={styles}></div>
        
      
      </div>
      
    </div>
  )
}
