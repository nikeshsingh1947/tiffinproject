import React from 'react'
import Delux from "../delux toffin.png"
import Exclusive from "../exclusive tiffin.png";
import Nominal from "../nominal.png";
import { useNavigate } from "react-router-dom";
const Card = () => {
    const navigate = useNavigate();
 const firstsetdta=()=>{
    let dta={_id:"657c2637e57bf10b8b528a30",foodname:"delux tiffin",foodprice:4500,categorie:"Single",item:"Paneer sabji, Seasnol mix vej, Rice, 2pc Roti, Papad, Rayta, Salad, 1pc Sweet ",foodimage:"https://lh3.googleusercontent.com/pw/ADCreHdU8-p62eWvT_bGFZ4groBKGBiAhbFV1YiZ01qo6W59zM_lSIHXLQ8kW7B4ZBjbwwmneoJykKLPqZqQNczT6xffc6sSWNRnQZXPUFDN0fvlwUH3-w=w2400",veg:true,type:"Lunch & Dinner",Day:"all day",createdAt:"2023-11-26T08:25:15.357Z",updatedAt:"2023-11-26T08:25:15.357Z"}
    localStorage.removeItem('prdc');
    localStorage.setItem("prdc",JSON.stringify(dta));
    navigate("/product",{replace:true})
 }
 const secondsetdta=()=>{
    let dta={_id:"657c2f72e57bf10b8b528a34",foodname:"Exclusiv Tiffin",foodprice:3600,categorie:"Single",item:"Paneer Sabji, Seasonal mix Vej, 4pc Roti, Rice,Salad",foodimage:"https://lh3.googleusercontent.com/pw/ADCreHeibmRPlnKwnACEauaAvLxtlb1IF2MLNmt1E2fH_14gmMhU4tGkM-r8zWcauVHUSPK2qcwxwCMXqzKgNwH5WJDt5zExDfhxzyzRmnzaxJztyDd6IA=w2400",veg:true,type:"Lunch & Dinner",Day:"all day",createdAt:"2023-11-26T08:25:57.915Z",updatedAt:"2023-11-26T08:25:57.915Z"}
    localStorage.removeItem('prdc');
    localStorage.setItem("prdc",JSON.stringify(dta));
    navigate("/product",{replace:true})
}
 const thirdsetdta=()=>{
    let dta={_id:"657c2fefe57bf10b8b528a36",foodname:"Nominal Tiffin",foodprice:3000,categorie:"Single",item:"paneer Sabji/Seasonal mix vej, Daal,Rice,Roti,Salad",foodimage:"https://lh3.googleusercontent.com/pw/ADCreHdCPRrp522LK_p7oDrSjsg_4XITPWCx67ZQUJ0caF8llboLzF8uWSWgBYaUmgRtOfxPtqWFMZL01fTNvCiIvA7kge1ccL52PllelaeF8VgdM2Ov0g=w2400",veg:true,type:"Lunch & Dinner",Day:"all day",createdAt:"2023-11-26T08:26:32.687Z",updatedAt:"2023-11-26T08:26:32.687Z"}
    localStorage.removeItem('prdc');
    localStorage.setItem("prdc",JSON.stringify(dta));
    navigate("/product",{replace:true}) 
}
  return (
    <div className='max-w-[1240px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6'>
        <div className='rounded-xl relative hover:scale-105 duration-500 '>
            <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                <p className=' font-bold text-2xl px-2 pt-4'>Delux Tiffin</p>
                <p className='px-2'>₹4500/month || ₹150 Each</p>
                <button className='border border-white bg-white text-black mx-2 rounded-xl px-5 py-1 absolute bottom-4 shadow-md cursor-pointer' onClick={firstsetdta}>Order Now</button>
            </div>
            <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src={Delux} alt="" />
        </div>
        <div className='rounded-xl relative hover:scale-105 duration-500 '>
            <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                <p className=' font-bold text-2xl px-2 pt-4'>Exclusive Tiffin</p>
                <p className='px-2'>₹3600/month || ₹120 Each</p>
                <button className='border border-white bg-white text-black mx-2 rounded-xl px-5 py-1 absolute bottom-4 shadow-md cursor-pointer' onClick={secondsetdta}>Order Now</button>
            </div>
            <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src={Exclusive} alt="" />
        </div>
        <div className='rounded-xl relative hover:scale-105 duration-500 '>
            <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                <p className=' font-bold text-2xl px-2 pt-4'>Nominal Tiffin</p>
                <p className='px-2'>₹3000/month || ₹100 Each</p>
                <button className='border border-white bg-white text-black mx-2 rounded-xl px-5 py-1 absolute bottom-4 shadow-md cursor-pointer' onClick={thirdsetdta}>Order Now</button>
            </div>
            <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src={Nominal} alt="" />
        </div>
    </div>
  )
}

export default Card