import React from 'react'
import Right from './Right'

const Navbar = () => {
  return (
    <div className='w-full flex bg-background  justify-center pt-4 '>
      <div className='w-full max-w-[1280px] flex justify-between'>
        <Right/>
      </div>
    </div>
  )
}

export default Navbar
