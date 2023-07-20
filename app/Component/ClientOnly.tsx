'use client'
import React, { useEffect, useState } from 'react'

interface clientProps{
    children:React.ReactNode
}

const ClientOnly:React.FC<clientProps> = ({children}) => {
    const [hasMounted , setHasMounted] = useState(false);

    useEffect(()=>(
        setHasMounted(true)
    ),[]);

    if(!hasMounted){
        return null;
    }
  return (
    <>
    {children}
    </>
  )
}

export default ClientOnly
