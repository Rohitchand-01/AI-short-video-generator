'use client'
import { Button } from '@/components/ui/button'
import React, { useState } from 'react'
import EmptyStack from './_components/EmptyStack'
import Link from 'next/link'

const page = () => {
  const [videoList, setVideoList] = useState([])
  return (
    <div>
      <div className='flex justify-between items-center'>
        <h2 className='font-bold text-purple-400 text-4xl'>Dashboard</h2>
        <Link href={'/dashboard/create-new'}>
          <Button className=''>
            Create New Short Video
          </Button>
        </Link>
      </div>

      {videoList?.length == 0 && (
        <div>
          <EmptyStack />
        </div>
      )}
    </div>
  )
}

export default page
