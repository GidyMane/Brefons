"use client"
import { RootState } from '@/utils/Redux/Store'
import React, { ReactNode } from 'react'
import { useSelector } from 'react-redux'

const Layout = ({children}:{children:ReactNode}) => {
    const width =useSelector((state:RootState)=> state.width.width)
    console.log(width)
    
  return (
    <div className={`p-8 w-full max-h-screen`} style={{
        marginLeft:`${width}px`
    }}>{children}</div>
  )
}

export default Layout