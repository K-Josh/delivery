// import food from './Daata';
import burger from "../assets/burger (1).jpg"

const Hero = () => {
  return (
    <div className="max-w-[1640px] mx-auto p-4">
        <div className="max-h-[500px] relative ">
            {/* overlay */}
            <div className=' text-gray-200 absolute w-full h-full max-h-[500px] bg-black/40 flex flex-col justify-center  '>
                <h1 className="px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">The <span className="text-secondary">Best</span></h1>
                <h1 className="px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold"><span className="text-secondary">Foods</span> <span className="">Delivery</span></h1>
            </div>
            <img src={burger} alt='' className="max-h-[500px] object-cover w-full "/>
        </div>
    </div>
  )
}

export default Hero