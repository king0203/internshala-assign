import React from 'react';
import PropertyCard from './PropertyCard';

const Property = ({ title, data }) => {
  return data?.length > 0 && (
    <div className='mt-10'>
      <div className='flex items-center justify-between mb-3'>
        <p className='text-2xl font-semibold mb-3'>{title}</p>
      </div>
      <div className='flex flex-wrap justify-between'>
        {data?.map((property, index) => (
          <PropertyCard key={index} data={property} />
        ))}
      </div>
    </div>
  );
};

export default Property;
