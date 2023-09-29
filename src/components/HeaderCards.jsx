import burger from '../assets/hambug2.jpg'
import burger_2 from '../assets/hambug3.jpg'
import burger_3 from '../assets/hambug4.jpg'

const HeaderCards = () => {
  return (
    <div className='max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6 '>
        {/*card */}
      <div className='rounded-xl relative cursor-pointer hover:scale-95'>
        {/* overlay */}
            <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
              <p className='font-bold text-2xl px-2 pt-4'>Sun&apos;s Out, BOGO&apos;s Out</p>
              <p className='px-2'>Through 8/26</p>
              <button className='mx-2 absolute border-0 bg-secondary hover:bg-orange-700 bottom-4'>Order Now</button>
            </div>
            <img src={burger} alt="" className="max-h-[160px] w-full md:max-h-[200px] object-cover rounded-xl  " />
      </div>
       {/*card */}
       <div className='rounded-xl relative cursor-pointer hover:scale-95'>
        {/* overlay */}
            <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
              <p className='font-bold text-2xl px-2 pt-4'>Sun&apos;s Out, BOGO&apos;s Out</p>
              <p className='px-2'>Through 8/26</p>
              <button className='mx-2 absolute border-0 bg-secondary hover:bg-orange-700 bottom-4'>Order Now</button>
            </div>
            <img src={burger_2} alt="" className="max-h-[160px] w-full md:max-h-[200px] object-cover rounded-xl  " />
      </div>
       {/*card */}
       <div className='rounded-xl relative cursor-pointer hover:scale-95'>
        {/* overlay */}
            <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
              <p className='font-bold text-2xl px-2 pt-4'>Sun&apos;s Out, BOGO&apos;s Out</p>
              <p className='px-2'>Through 8/26</p>
              <button className='mx-2 absolute border-0 bg-secondary hover:bg-orange-700 bottom-4'>Order Now</button>
            </div>
            <img src={burger_3} alt="" className="max-h-[160px] w-full md:max-h-[200px] object-cover rounded-xl  " />
      </div>
    </div>
  )
}

export default HeaderCards