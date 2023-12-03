"use client"

import React from 'react'
import Image from 'next/image'
import { FEATURES } from '@/constants'
const Features = () => {
  return (
    <section className='flex-col flexCenter overflow-hidden bg-feature-bg max-container
    bg-center bg-no-repeat py-24'>
      <div className="max-conatiner padding-container flex
      relative w-full justify-end 
      ">
        <div className=" flex flex-1 lg:min-h-[900px] ">
          <Image 
          className='feature-phone pl'
          src="/phone.png"
          alt="phone"
          width={440}
          height={1000}
          />
        </div>
        <div className="z-20 flex w-full flex-col lg:w-[60%]">
          <div className="relative">
            <Image
            className='absolute left-[-5px] top-[-28px] 
            w-10 lg:w-[50px]'
            src="/camp.svg"
            alt="camp"
            width={50}
            height={50}
            />
            <h2 className='bold-40 lg:bold-64'>Our Features</h2>
          </div>
          <ul className='mt-10 grid gap-10 md:grid-cols-2 lg:mg-2-
          lg:gap-20'>
            {FEATURES.map((feature)=>(
              <FeatureIteam title={feature.title} description={feature.description}
              icon={feature.icon} variant={feature.variant} />
            ))  }
          </ul>
        </div>
      </div>
    </section>
  )
}

type FeatureIteamProps = {
      title: string;
      description: string;
      icon: string;
      variant: string;
}


const FeatureIteam =({title , description ,icon ,variant  }:FeatureIteamProps)=>{
  return(
    <li className='flex w-full flex-1 flex-col items-start'>
      <div className="rounded-full p-4 lg:p-7 bg-green-50 mt-5">
        <Image
        
        src={icon}
        alt="map"
        width={28}
        height={28}
        />
      </div>
      <div className="">
        <h2 className='bold-20 lg:bold-32 mt-5 capitalize mb-3'>{title}</h2>
        <p className=' regular-16 mt-5 bg-white/80 text-gray-30 lg:mt-[30px] lg:bg-none'>{description}</p>

      </div>
    </li>
  )

}


export default Features
