import React from 'react'
import prisma  from '../lib/db'       

const Page = async() => {

  const users = await prisma.user.findMany()

  return (
    <>
      {JSON.stringify(users, null, 2)}  
    </>
  )
}

export default Page