"use client"
import Image from "next/image"

const CircleImage = () => {
  return (
    <div className='bottom-0 right-0 hidden md:inline-block md:absolute'>
        <Image src='/circles.png' width={300} height={300} alt="" className="mix-blend-lighten rounded-2xl"></Image>
      
    </div>
  )
}

export default CircleImage
