import React from 'react'
import Right from './Right'
import { ScrollProgressDemo } from './Scroll'

const Navbar = () => {
  return (
    <div className='w-full sticky top-0 z-20 backdrop-blur-md bg-background/70 flex  justify-center pt-4 '>
      <div className='w-full max-w-[1280px] flex justify-between'>
        <Right/>
        
      </div>
      <ScrollProgressDemo/>
    </div>
  )
}

export default Navbar
