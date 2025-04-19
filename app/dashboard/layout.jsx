import React from 'react'
import Header from './_components/Header'
import SideNav from './_components/SideNav'

const DashboardLayout = ({ children }) => {
  return (
    <div>
      <div className='hidden md:block fixed bg-white mt-[81.5px] w-64 h-screen'>
        <SideNav />
      </div>
      <div>
        <Header />
        <div className='md:ml-64 p-10'>{children}</div>
      </div>
    </div>
  )
}

export default DashboardLayout
