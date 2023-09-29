
import {MdRestaurantMenu, MdFavorite} from 'react-icons/md';
import {AiOutlineSearch, AiOutlineCloseCircle, AiFillTag} from 'react-icons/ai';
import {BsFillCartFill} from 'react-icons/bs';
import {TbTruckDelivery} from 'react-icons/tb';
import {FaUserFriends} from 'react-icons/fa';
import {BiWallet, BiHelpCircle} from 'react-icons/bi';
import { useState } from 'react';
import { snacks } from '../Data/FoodData'; 

const Navbar = () => {
 const [nav, setNav] = useState(false);
 const [input, setInput] = useState('')

//  // Filter Type
//  const filterType = (category) => {
//      setFoods(snacks.filter((item)=> {
//          return item.category === category;
//      }))
//  };

  return (
    <div className='max-w-[1640px] mx-auto flex justify-between items-center p-4'>
        {/* left side */}
      <div className='flex items-center'>
        <div className='cursor-pointer'>
            <MdRestaurantMenu onClick={()=>{setNav(!nav)}} size={30}/>
        </div>
        <h1 className='text-2xl sm:text-3xl lg:text-4xl px-2'>
        Let&apos;s <span className='font-bold text-secondary'>Eat</span>
        </h1>
          <div className='hidden lg:flex items-center bg-primary rounded-full p-1 text-[14px]'>
            <p className='bg-secondary rounded-full p-2 text-white'>Delivery</p>
            <p className='p-2'>Pickup</p>
          </div>
      </div>

        {/* search input */}
      <div
        
        className='bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px] '>
        <AiOutlineSearch size={20}/>
        <input
          value={input}
         onChange={(e)=> setInput(e.target.value)}  
         className='bg-transparent p-2 focus:outline-none w-full'   
         type="text" 
        placeholder="Search food"/>
      </div>
       
        {/* cart button */}
        <button className='bg-secondary text-white hidden md:flex items-center py-2 rounded-full border-none'>
            <BsFillCartFill size={20} className='mr-2'/> Cart
        </button>

        {/* mobile Menu */}
        {/* overlay */}
        {nav ?  <div className='bg-black/80 fixed w-full h-screen z-10 top-0 left-0'></div> : ''}
  
        {/* slide drawer menu */}
      <div className={nav ? 'fixed top-0 left-0 w-[250px] h-screen bg-white z-10 duration-500 ' : 'fixed top-0 left-[-100%] w-[250px] h-screen bg-white z-10 duration-500 '}>
        <AiOutlineCloseCircle onClick={()=>{setNav(!nav)}} size={20} className='text-secondary absolute right-4 top-4 cursor-pointer'/>
        <h2 className='text-2xl p-3'>Let&apos;s <span className='font-bold'>Eat</span></h2>
        <nav>
            <ul className='flex flex-col p-3 text-gray-600'>
                <li className='text-xl mx-2 flex items-center py-3'><TbTruckDelivery size={20} className='text-secondary mr-3'/>Orders</li>
                <li className='text-xl mx-2 flex items-center py-3'><MdFavorite size={20} className='text-secondary mr-3'/>Favorites</li>
                <li className='text-xl mx-2 flex items-center py-3'><BiWallet size={20} className='text-secondary mr-3'/>Wallet</li>
                <li className='text-xl mx-2 flex items-center py-3'><BiHelpCircle size={20} className='text-secondary mr-3'/>Help</li>
                <li className='text-xl mx-2 flex items-center py-3'><AiFillTag size={20} className='text-secondary mr-3'/>Promotions</li>
                <li className='text-xl mx-2 flex items-center py-3'><FaUserFriends size={20} className='text-secondary mr-3'/>Link a Friend</li>
            </ul>
        </nav>
      </div>
    </div>
  )
}

export default Navbar