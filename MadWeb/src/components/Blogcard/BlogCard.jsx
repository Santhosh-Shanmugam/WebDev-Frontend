import React from 'react'

const BlogCard = ({img}) => {
  return (
    <div className='p-4 shadow-lg transition-all duration-500 hover:shadow-xl dark:bg-slate-950 dark:text-white'>
        <div className='overflow-hidden'>
            <img src={img}
                 alt="no img"
                 className='mx-auto h-[250] w-full object-cover transition duration-700 hover:skew-x-2 hover:scale-110' 
            />
        </div>
        <div className='flex justify-between pt-2 text-slate-600'>
            <p>April 22,2022</p>
            <p className='line-clamp-1'>By Archer</p>
        </div>
        <div className='space-y-2 py-3'>
            <h1 className='line-clamp-1 font-bold'>How to concentrate on focus</h1>
            <p className='line-clamp-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, quo ipsam aut expedita fugiat illum animi et modi architecto voluptates eius nobis neque corporis, esse qui nam soluta distinctio reprehenderit.</p>
        </div>
    </div>
  )
}

export default BlogCard