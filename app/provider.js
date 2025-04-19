"use client"
import { useUser } from '@clerk/nextjs'
import React, { useEffect } from 'react'

const Provider = ({children}) => {

  const {user}= useUser();

  useEffect(()=>{
    user&& isNewUser();  
  }
  ,[user]);

  const isNewUser=async()=>{
    const result = await db.select().from(User).where(eq(Users.email, user?.primaryEmailAddress?.emailAddress));

    console.log(result)
    if(!result[0]){
      await db.insert(Users).values({
        name: user?.fullName,
        email: user?.primaryEmailAddress?.emailAddress,
        image: user?.imageUrl,
      });
    }
  }

  return (
    <div>
      {children}
    </div>
  )
}

export default Provider
