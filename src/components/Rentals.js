import React from 'react'
import house1 from '../assets/house1.jpg'
import house2 from '../assets/house2.jpg'
import house3 from '../assets/house3.jpg'
import house4 from '../assets/house4.jpg'
import house5 from '../assets/house5.jpg'
import Rental from './Rental'

const Rentals = () => {
  const rentals = [
    { image: house1 },
    { image: house2 },
    { image: house3 },
    { image: house4 },
    { image: house5 },
    { image: house1 },
    { image: house2 },
    { image: house3 },
    { image: house4 },
    { image: house5 },
    { image: house1 },
    { image: house2 },
    { image: house3 },
    { image: house4 },
    { image: house5 },
  ]
  return (
    <div className='py-3 sm:py-5'>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4'>
        {rentals.map((rental) => (
          <Rental
            title={rental.title}
            image={rental.image}
            price={rental.price}
          />
        ))}
      </div>
    </div>
  )
}

export default Rentals
