import React from 'react'

const FilterSection = () => {
  return (
    <>
    <div className='bg-gray-100 mt-10 p-4 rounded-md h-max hidden md:block'>
        <input type="text" 
            placeholder='Search..' 
            // value={search}
            // onChange={(e)=>setSearch(e.target.value)} 
            className='bg-white p-2 rounded-md border-gray-400 border-2' 
            />
    </div>
    </>
  )
}

export default FilterSection