import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

const EmptyStack = () => {
  return (
    <div className='flex flex-col items-center mt-10 p-5 py-24 border-2 border-dotted'>
      <h2>Your dont have any short video</h2>
      <Link href={'/dashboard/create-new'}>
      <Button className='bg-purple-400 hover:bg-purple-500 text-white'>Create New Short Video</Button>
      </Link>
    </div>
  )
}

export default EmptyStack
