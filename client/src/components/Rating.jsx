import { BiSolidStar } from 'react-icons/bi';

const Rating = ({ name }) => {
  const stars = Array.from({ length: 5 }, (_, index) => (
    <BiSolidStar key={index} className='text-[#5CA500]' />
  ));

  return (
    <div className='flex items-center mb-3'>
      {stars}
      <p className='ml-2 text-[#919191] text-sm font-medium'>{name}</p>
    </div>
  );
};

export default Rating;
