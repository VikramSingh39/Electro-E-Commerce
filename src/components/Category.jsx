import React from 'react'
import { getData } from '../context/DataContext'

const Category = () => {
 const {data} = getData();

  const getUniqueCategory = (data, property)=>{
  let newVal = data?.map((curElem)=>{
    return curElem[property] 
  })
 newVal = [...new Set(newVal)];
 return newVal;
 }

 const categoryOnlyData = getUniqueCategory(data, "category")
 console.log(categoryOnlyData);

  return (
    <>
    <div className='mt-8 bg-gradient-to-r to-teal-400 from-yellow-200 px-4 '>
        <div className='max-w-7xl mx-auto flex flex-wrap gap-4 items-center justify-center md:justify-around py-7 px-4'>
            {
                categoryOnlyData.map((item, index)=>{
                    return <div key={index} >
                        <button type="button" class="focus:outline-none text-white  hover:bg-green-800 rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-500 dark:hover:bg-green-600 dark:focus:ring-green-800 uppercase cursor-pointer">{item}</button>
                    </div>
                })
            }
        </div>
    </div>
    </>
  )
}

export default Category;