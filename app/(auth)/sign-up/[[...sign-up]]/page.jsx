import { SignUp } from '@clerk/nextjs'
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
          className='shadow-gray-700 rounded-2xl w-[350px] h-[555px]'
        />
      </div>
      <div>
        <SignUp />
      </div>
    </div>
  )
}