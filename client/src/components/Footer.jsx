import { FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='bg-gray-800 p-10 text-white text-xl'>
      <div className='flex justify-between'>
        <p>ESTTE</p>
        <div className='flex items-end text-2xl space-x-5'>
          <div><FaTwitter /></div>
          <div><FaLinkedin /></div>
          <div><FaInstagram /></div>
        </div>
      </div>
      <hr className='w-full my-6 ' />
      <div className='flex items-center justify-between text-sm font-semibold'>
        <div className='flex items-center'>
          <p>Privacy Policy</p>
          <div className='h-5 w-0.05rem mx-5 bg-gray-600' />
          <p>Disclaimer</p>
        </div>
        <p>&copy; 2023 All Rights Reserved Estte Group</p>
      </div>
    </div>
  );
}

export default Footer;
