import React from 'react'

const BannerDetails = () => {
  return (
    <section className='bg-slate-100 dark:bg-slate-900 dark:text-white'>
        <div className='container flex flex-col items-center justify-center py-10 md:h-[500px]'>
            <div className='grid grid-cols-1 items-center gap-4 md:grid-cols-2'>
                <div>
                    <h1 className='text-2xl md:text-4xl'>
                        We Build Apps that Get Trending On Appworld
                    </h1>
                    <p className='text-sm text-slate-600 dark:text-slate-400 pt-4 pb-4'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, commodi officia natus excepturi laborum laboriosam exercitationem vel provident necessitatibus soluta officiis ad doloribus velit magnam at cupiditate quidem. Odio, placeat!
                    </p>
                    <div>
                        <ul className='flex list-inside list-disc flex-col gap-2 md:gap-4'>
                            <li className='font-medium'>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore itaque, placeat quis veniam tenetur magni eos. Sequi modi consequuntur expedita provident impedit placeat, quo fuga culpa quaerat laboriosam quasi in.
                            </li>
                            <li className='font-medium'>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore itaque, placeat quis veniam tenetur magni eos. Sequi modi consequuntur expedita provident impedit placeat, quo fuga culpa quaerat laboriosam quasi in.
                            </li>
                            <li className='font-medium'>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore itaque, placeat quis veniam tenetur magni eos. Sequi modi consequuntur expedita provident impedit placeat, quo fuga culpa quaerat laboriosam quasi in.
                            </li>
                        </ul>
                    </div>
                </div>
                <div className=''>
                    <img src="src\assets\1000_F_454498819_VTHYFq40dB3ur4fVGK2UdK5WeAXpch0r.jpg" alt="not found" className='mx-auto max-w-[400px]'/>
                </div>

            </div>
        </div>

    </section>
  )
}

export default BannerDetails