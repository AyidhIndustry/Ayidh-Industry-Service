"use client"
import React from 'react'

const MarginedComponent = ({children, style} : {children: React.ReactNode, style?: string}) => {
  return (
    <div className={`max-w-screen-xl mx-auto px-4 ${style}`}>
        {children}
    </div>
  )
}

export default MarginedComponent