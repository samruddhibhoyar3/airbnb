import React from 'react'
import Filter from './Filter'

const Filters = () => {
  const sorting = [
    {
      title: 'OMG',
      icon: (
        <img
          class='i1wps9q8 dir dir-ltr'
          src='https://a0.muscache.com/pictures/c5a4f6fc-c92c-4ae8-87dd-57f1ff1b89a6.jpg'
          alt=''
          width='24'
          height='24'
        />
      ),
    },
    {
      title: 'Beach',
      icon: (
        <img
          class='i1wps9q8 dir dir-ltr'
          src='https://a0.muscache.com/pictures/3b1eb541-46d9-4bef-abc4-c37d77e3c21b.jpg'
          alt=''
          width='24'
          height='24'
        />
      ),
    },
    {
      title: 'City',
      icon: (
        <img
          class='i1wps9q8 dir dir-ltr'
          src='https://a0.muscache.com/pictures/ed8b9e47-609b-44c2-9768-33e6a22eccb2.jpg'
          alt=''
          width='24'
          height='24'
        />
      ),
    },
    {
      title: 'Private',
      icon: (
        <img
          class='i1wps9q8 dir dir-ltr'
          src='https://a0.muscache.com/pictures/eb7ba4c0-ea38-4cbb-9db6-bdcc8baad585.jpg'
          alt=''
          width='24'
          height='24'
        />
      ),
    },
    {
      title: 'Windmill',
      icon: (
        <img
          class='i1wps9q8 dir dir-ltr'
          src='https://a0.muscache.com/pictures/5cdb8451-8f75-4c5f-a17d-33ee228e3db8.jpg'
          alt=''
          width='24'
          height='24'
        />
      ),
    },
  ]
  return (
    <div className='   '>
      <div className='flex justify-start  gap-3 sm:gap-4  mt-4  '>
        {sorting.map((obj) => (
          <Filter title={obj.title} icon={obj.icon} />
        ))}
      </div>
    </div>
  )
}

export default Filters
