import {useState} from 'react'
import {snacks} from "../Data/FoodData";

const Food = () => {
    const [foods, setFoods] = useState(snacks)

    // Filter Type
    const filterType = (category) => {
        setFoods(snacks.filter((item)=> {
            return item.category === category;
        }))
    };

    // filter by price
    const filterPrice = (price) => {
        setFoods(snacks.filter((item)=> {
            return item.price === price;
        }))
    }

  return (
    <div className="max-w-[1640px] px-4 py-10 mx-auto">
       <h1 className="text-secondary font-bold text-4xl text-center">Top Menu Items</h1>

        {/*Filter Row */}
        <div className="flex flex-col lg:flex-row justify-between">
        {/* Filter Type */}
        <div >
            <p className="font-bold text-gray-600">Filter Type</p>
            <div className="flex space-x-6  flex-wrap">
                <button
                  onClick={()=> setFoods(snacks)} 
                  className="m-2 border-0 bg-secondary text-white hover:bg-white hover:border hover:border-secondary hover:text-black/75">All</button>
                <button
                  onClick={()=> filterType('burger')} 
                  className="m-2 border-0 bg-secondary text-white hover:bg-white hover:border hover:border-secondary hover:text-black/75">Burgers</button>
                <button 
                  onClick={()=> filterType('pizza')}
                  className="m-2 border-0 bg-secondary text-white hover:bg-white hover:border hover:border-secondary hover:text-black/75">Pizza</button>
                <button 
                  onClick={()=> filterType('fish roll')}
                 className="m-2 border-0 bg-secondary text-white hover:bg-white hover:border hover:border-secondary hover:text-black/75">Fish Roll</button>
                <button 
                  onClick={()=> filterType('fish pie')}
                 className="m-2 border-0 bg-secondary text-white hover:bg-white hover:border hover:border-secondary hover:text-black/75">Fish Pie</button>
                <button 
                  onClick={()=> filterType('biscuit')}
                  className="m-2 border-0 bg-secondary text-white hover:bg-white hover:border hover:border-secondary hover:text-black/75">Biscuits</button>
                <button 
                  onClick={()=> filterType('ice cream')}
                  className="m-2 border-0 bg-secondary text-white hover:bg-white hover:border hover:border-secondary hover:text-black/75">Ice cream</button>
                <button 
                   onClick={()=> filterType('fruit juice')}
                  className="m-2 border-0 bg-secondary text-white hover:bg-white hover:border hover:border-secondary hover:text-black/75">Fruit Juice</button>
                <button
                  onClick={()=> filterType('cake')} 
                  className="m-2 border-0 bg-secondary text-white hover:bg-white hover:border hover:border-secondary hover:text-black/75">Cakes</button>
            </div>
        </div>
         {/* Filter Price */}
         <div>
            <p className="font-bold text-gray-600">Filter Price</p>
            <div className="flex space-x-4 max-w-[390px] w-full">
            <button
              onClick={()=> filterPrice('500 FCFA')} 
              className="m-2 border-secondary bg-white hover:text-white hover: hover:bg-secondary text-secondary">500 FCFA</button>
            <button 
               onClick={()=> filterPrice('1000 FCFA')} 
              className="m-2 border-secondary bg-white hover:text-white hover: hover:bg-secondary text-secondary">1000 FCFA</button>
            <button
               onClick={()=> filterPrice('6000 FCFA')}  
              className="m-2 border-secondary bg-white hover:text-white hover: hover:bg-secondary text-secondary">6000 FCFA</button>
            </div>
         </div>
    </div>

    {/* Display food */}
    <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4'>
      {foods.map((item, index)=> (
        <div key={index}
        className='border shadow-lg rounded-lg hover:scale-105'>
            <img src={item.image} alt={item.name} className='w-full h-[200px] object-cover rounded-l-lg'/>
            <div className='flex justify-between px-2 py-4'>
                <p className='font-bold'>{item.name}</p>
                <p>
                    <span className='bg-secondary p-1 rounded-full text-white'>{item.price} </span>
                </p>
            </div>
        </div>
      ))}
    </div>
 </div>
  )
}

export default Food