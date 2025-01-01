import React from 'react'

const SkillText = () => {
  return (
    <div className='pt-3'>

     <div className='items-center flex justify-center font-semibold'>
     <h1 className="bg-blue-600 text-white w-[125px] h-[28px] justify-center items-center flex size-3 md:w-[200px] md:h-[50px] md:text-xl rounded-full shadow-lg transition-all duration-300 ease-in-out hover:bg-gradient-to-r hover:from-indigo-500 hover:to-purple-500 hover:text-white hover:scale-105 hover:shadow-xl">Skills</h1> 
     </div>
    <div className='text-lg font-semibold text-gray-600 pt-4'>
      <p>The skills, tools and technologies I am </p>
      <p className='flex items-center justify-center '>really good at:</p>
    </div>
    
    </div>
  )
}

export default SkillText
