import { SignIn } from '@clerk/nextjs'
import Image from 'next/image'

export default function Page () {
  return (
    <div className='flex justify-center items-center bg-gray-100 h-screen'>
      <div >
        <Image
          src='/login.png'
          alt='Login Illustration'
          width={400}
          height={200}
          className='rounded-2xl w-[300px] h-[480px]'
        />
      </div>
      <div>
        <SignIn />
      </div>
    </div>
  )
}
