import {AiOutlineMessage} from 'react-icons/ai';
import {GiReceiveMoney} from 'react-icons/gi';
import {PiUsersFour} from 'react-icons/pi';
import {MdRestaurantMenu} from 'react-icons/md'

const Footer = () => {
  return (
    <div className="max-w-[1640px] h-[300px] mx-auto w-full p-4 py-12 grid md:flex md:items-center md:justify-evenly grid-cols-5 md:grid-cols-1 whitespace-nowrap bg-gray-100">
      
     <div className=" text-secondary -mt-6 lg:-mt-3">
      <MdRestaurantMenu className='hover:animate-ping text-5xl'/>
     </div>
        <div className='flex items-center gap-6  '>
         {/* icons */}
         <div className='flex items-center flex-col space-y-4'>
           <p className='font-semibold text-secondary text-md md:text-xl'>Contact </p>
           <a href="#" className='text-white rounded-full bg-secondary p-2'><AiOutlineMessage className='text-2xl cursor pointer hover:animate-spin' /></a> 
         </div>
         <div className='flex items-center flex-col space-y-4'>
           <p className='font-semibold text-md md:text-xl'>Support </p>
           <a href="#" className='text-white rounded-full bg-secondary p-2'><GiReceiveMoney className='text-2xl cursor pointer hover:animate-spin' /></a> 
         </div>
        <div className='flex items-center flex-col space-y-4'>
          <p className='font-semibold text-md md:text-xl '>Refer </p>
           <a href="#" className='text-white rounded-full bg-secondary p-2'><PiUsersFour className='text-2xl cursor pointer hover:animate-spin' /></a>
        </div> 
        </div>
    </div>
  )
}

export default Footer