'use client'

import Image from 'next/image'
import React, { useState } from 'react'

const SelectStyle = ( onUserSelect) => {
  const StyleOption = [
    {
      name: 'Realistic',
      image: '/real.jpg'
    },
    {
      name: 'Cartoon',
      image: '/cartoon.jpg'
    },
    {
      name: 'Cinematic',
      image: '/cinematic.jpeg'
    },
    {
      name: 'Comic',
      image: '/comic.jpeg'
    },
    {
      name: 'Watercolor',
      image: '/watercolor.jpeg'
    }
  ]

  const [selectedOption, setSelectedOption] = useState();

  return (
    <div className='mt-10'>
      <h2 className='font-bold text-purple-700 text-2xl '>Style</h2>
      <p className='text-gray-500 mb-8'>Select your video style</p>
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4'>
        {StyleOption.map((item, index) => (
          <div key={index} className='flex flex-col items-center'>
            <div className={`w-full aspect-[2/3] relative rounded-md overflow-hidden shadow  hover:scale-105 transition-all cursor-pointer
              ${selectedOption === item.name ? 'border-8 border-purple-800' : ''}`}>
              <Image
                src={item.image}
                alt={item.name}
                fill
                className='object-cover'
                onClick={() => {setSelectedOption(item.name)
                  onUserSelect('imageStyle', item.name) 

                }}
              />
            </div>
            <span className='mt-2 text-sm font-medium text-center'>{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SelectStyle
