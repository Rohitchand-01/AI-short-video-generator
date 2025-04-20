import { Button } from "@/components/ui/button"
import { UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import React from 'react'

const Header = () => {
  return (
    <div className="flex justify-between items-center bg-white shadow-md px-8">
      <div className='flex items-center gap-3'>
        <Image
          src='/logo.png'
          alt='logo'
          width={100}
          height={100}
          className='w-25 h-20'
        />
        <h2 className='font-bold'>AI short Generator</h2>
      </div>
      <div className='flex items-center gap-12'>
        <Button> Dashboard</Button>
        <UserButton/>
      </div>
    </div>
  )
}

export default Header
