"use client"
import { Button } from '@/components/ui/button'
import React, { useState } from 'react'

const page = () => {
  const [videoList, setVideoList] = useState([])
  return (
    <div>
      <div className='flex justify-between items-center'>
        <h2 className='font-bold text-purple-600 text-2xl'>Dashboard</h2>
        <Button> + Create New</Button>
      </div>

      {videoList?.length == 0 && <div>
        </div>}
    </div>
  )
}

export default page
