import React from 'react'
import CertifiedImage from '../../assets/images/cmyk_logo.png';

const ExporeHero = () => {
  return (
    <div className='max-w-4xl mt-12 mx-auto text-center py-16 px-4'>
      <img 
      className='w-36 mx-auto mb-6'
      src={CertifiedImage} 
      alt="Certified Image" />
      <h1 className='font-secondary text-4xl my-6'>What is Certified Humane®?</h1>
      <p className='font-primary w-5/6 mx-auto'>In the world of ethical dairy, Certified Humane® isn’t just a badge it’s a global promise. Established by the nonprofit Humane Farm Animal Care (HFAC), this voluntary certification sets meticulously high standards for how animals used for food are raised from their birthing to their day-to-day life at the farm. It’s an international hallmark of integrity and compassion.</p>
    </div>
  )
}

export default ExporeHero
