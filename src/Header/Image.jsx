import React, { useEffect, useState } from 'react';
import pic from '../assets/photoid.png';

const Image = () => {
  const [slideIn, setSlideIn] = useState(false);

  useEffect(() => {
    setSlideIn(true);
  }, []);

  return (
    <div className=' justify-center items-center'>
      <div className={`w-[240px] h-[300px] ml-3  transform transition-transform duration-[2000ms] ease-in-out ${slideIn ? 'translate-x-0' : '-translate-x-full'}`}>
        <img src={pic} alt='Image' className='shadow-xl shadow-gray-900 rounded'/>
      </div>
    </div>
  );
}

export default Image;
