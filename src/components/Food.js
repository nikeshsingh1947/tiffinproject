import React, {useEffect, useState } from 'react'

import { motion, AnimatePresence } from "framer-motion"
import { Fetchdata } from "../Redux/action.jsx";
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
const Food = () => {
    const navigate = useNavigate();
    const red = useSelector((store) => store.imageData.pictures);
    const dispatch = useDispatch();
    const [num, setNum] = useState(0);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        if (red.length === 0) {
          dispatch(Fetchdata());
          setLoading(false);
         
        }
        if (num === 0) {
          dispatch(Fetchdata());
          setNum((num) => num + 1);
          
          setLoading(false);
          
        }
    
      },[num,red.length,dispatch]);    
      console.log(red)
    

    // const filterType = (category) => {
    //     console.log(Food)
    //     setFoods(           
    //         red.data.filter((item) => {
    //             return item.category === category;
    //         })
    //     )
    // }
    // const filterPrice = (price) => {
    //     setFoods(
    //         red.data.filter((item) => {
    //             return item.price === price;
    //         })
    //     )
    // }
    const setlocal=(el)=>{
        console.log(el)
        localStorage.removeItem('prdc');
        let dta=[];
        dta.push(el);
        localStorage.setItem("prdc",JSON.stringify(el));
        navigate("/product",{replace:true})
    }


    return (
        <div className='max-w-[1240px] m-auto px-4 py-12'>
            <h1 className='text-orange-600 font-bold text-4xl text-center'>
                Top Rated Menu Items
            </h1>
            <div className='flex flex-col lg:flex-row justify-between'>
                {/* Filter Type */}
                {/* <div>
                    <p className='font-bold text-gray-700'>Filter Type</p>
                    <div className='flex justify-between flex-wrap'>
                        <button onClick={() => setFoods(data)} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white border rounded-xl px-5 py-1'>All</button>
                        <button onClick={() => filterType("breakfast")} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white border rounded-xl px-5 py-1'>Breakfast</button>
                        <button onClick={() => filterType("lunch & dinner")} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white border rounded-xl px-5 py-1'>Lunch & Dinner</button>
                        <button onClick={() => filterType('salad')} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white border rounded-xl px-5 py-1'>Salads</button>
                        <button onClick={() => filterType('chicken')} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white border rounded-xl px-5 py-1'>Chicken</button>
                    </div>
                </div>
  
                {/* Filter Price */}
                {/* <div>
                    <p className='font-bold text-gray-700'>Filter Price</p>
                    <div className='flex justify-between flex-wrap max-w-[390px] w-full'>
                        <button onClick={() => filterPrice(90)} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white border rounded-xl px-5 py-1'>$</button>
                        <button onClick={() => filterPrice(150)} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white border rounded-xl px-5 py-1'>$$</button>
                        <button onClick={() => filterPrice(120)} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white border rounded-xl px-5 py-1'>$$$</button>
                        <button onClick={() => filterPrice(100)} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white border rounded-xl px-5 py-1'>$$$$</button>
                    </div>
                </div> } */}
            </div>

            {/* diplay food */}
            <AnimatePresence>
            <div>
      {loading ? (
        <p>Loading...</p>
      ) :red.data ? (
                <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4'>
                    {red.data.map((item, index) => (
                        <motion.div
                            layout
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.1 }}
                            key={item.id}
                            onClick={()=>(setlocal(item))}
                            className="border shadow-lg rounded-lg hover:scale-105 duration-500 cursor-pointer">
                            <img className='w-full h-[150px] md:h-[200px] object-cover rounded-t-lg' src={item.foodimage} alt={item.foodname} />
                            <div className='flex justify-between px-2 py-4'>
                                <p>{item.foodname}</p>
                                <p>
                                    <span className='bg-orange-500 text-white p-1 rounded-md'>₹{item.foodprice}</span>
                                </p>
                            </div>
                        </motion.div>
                    ))}
                    
                </div>
                 ) : (
                    <p>No food data available.</p>
                  )}
                </div>
            </AnimatePresence>
        </div>
    )
}
 
export default Food