"use client"

import Image from 'next/image'
import Link from 'next/link'
interface PortfolioProps{
    data:{
        id:number,
        title:string,
        image:string,
        urlGithub:string,
        urlDemo:string

    }
}
const PortfolioBox = (props:PortfolioProps) => {
    const {data}=props
    const {id,title,image,urlGithub,urlDemo }=data

  return (
    <div className='p-4 border boder-teal-50 rounded-xl'>
      <h3 className='mb-4 text-xl'>
      {title}
      <Image src={image} alt='Image product' width={200} height={200} className='w-full md:w-[200px] rounded-2xl h-auto'/>
      
      <div className='flex gap-5 mt-5'>
      <Link href={urlGithub} target='_blank' className='p-2 transition duration-150 rounded-lg bg-slate-500 hover:bg-slate-500/80'>
      Github
      </Link>

      <Link href={urlDemo} target='_blank' className='p-2 transition duration-150 rounded-lg bg-secondary-500 hover:bg-secondary-500/80'>
      Github
      </Link>
      </div>



      </h3>
      
    </div>
  )
}

export default PortfolioBox
