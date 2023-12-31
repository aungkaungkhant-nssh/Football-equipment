
import React,{useRef, useState} from 'react'
import Add from '../assets/images/add.jpg'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Add2 from '../assets/images/add2.jpg'
const BestSeller = () => {
  return (
    <section className='md:w-10/12 md:mx-auto px-4 relative ' style={{marginTop:"100px"}}>
    <div className=' mb-6 w-full flex items-center justify-between'>
        <h3 className='text-xl tracking-wider uppercase font-thin '>Best Seller</h3>
        <div className='bg-gray-300 h-0.5 basis-5/12 md:basis-7/12 lg:basis-8/12 xl:basis-9/12'></div>
    
      
    </div>
    <div className=' py-4'>
      
        <div className='flex w-full ' >
            <Swiper
                   breakpoints={{
                    280:{
                        slidesPerView: 2,
                        spaceBetween: 0,
                    },
                    
                    768: {
                      slidesPerView: 2,
                      spaceBetween: 0,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                      },
                  }}
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={50}
                    slidesPerView={2}
                    navigation
                    // pagination={{ clickable: true }}
                    // scrollbar={{ draggable: true }}
                
                
            >
                
                <SwiperSlide>
                        <div className='border border-gray-200 p-2 mr-4 group cursor-pointer '>
                                <div className='inline-block relative w-full'>
                                    <img src={Add} alt=""  className='w-full'/>
                                    <img src={Add2} alt="" className='absolute z-20 top-0 left-0 opacity-0 group-hover:opacity-100 transition-all duration-500' />
                                    <div className='absolute z-50 absolute top-3 left-3  right-3'>
                                        <div className='flex justify-between items-center '>
                                            <div className='px-2 bg-amber-500 hover:bg-neutral-700 text-gray-100 py-1 rounded cursor-pointer  transition duration-300'>
                                            <p className='text-sm'>New Arrivals</p>
                                            </div>
                                            <div className='cursor-pointer'>
                                                <i className="fa-regular fa-heart text-xl text-gray-700 hover:text-amber-500 transition duration-300"></i>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='absolute z-50 right-2 top-10 translate-x-2 opacity-0 group-hover:-translate-x-1  group-hover:opacity-100 duration-300 transition-all '>
                                            <div className=' '>
                                                <div className='my-4 cursor-pointer'>
                                                    <i className="fa-solid fa-cart-shopping text-xl text-gray-700 hover:text-amber-500 transition duration-300"></i>
                                                </div>
                                                <div className='cursor-pointer'>
                                                    <i className="fa-solid fa-eye text-xl text-gray-700 hover:text-amber-500 transition duration-300"></i>
                                                </div>
                                                
                                            </div>
                                    </div>
                                    <div className='absolute z-50 bottom-0 left-0 right-0'>
                                        <div className='bg-gray-200 py-2 text-center'>
                                            <h3 className='uppercase text-slate-700'>13% off</h3>
                                        </div>
                                    </div>
                                </div>
                               
                                <div className='border border-gray-50  py-3  p-3'>
                                    <h3 className='text-xl text-slate-700 text-left'>Adidas</h3>
                                    <h2 className='text-neutral-500 text-sm my-3 uppercase tracking-wider'>adidas X Speedportal+SG</h2>
                                    <div className='my-4 text-amber-400'>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-regular fa-star"></i>
                                     </div>
                                    <div className='flex'>
                                        <p className='text-slate-700'>$10</p>
                                        <p className='ml-7 text-neutral-400 line-through '>12$</p>
                                    </div>
                                </div>
                             
                    
                        </div>
                    </SwiperSlide>
                             
                    <SwiperSlide>
                        <div className='border border-gray-200 p-2 mr-4 group cursor-pointer '>
                                <div className='inline-block relative w-full'>
                                    <img src={Add} alt="" className='w-full' />
                                    <img src={Add2} alt="" className='absolute z-20 top-0 left-0 opacity-0 group-hover:opacity-100 transition-all duration-500' />
                                    <div className='absolute z-50 absolute top-3 left-3  right-3'>
                                        <div className='flex justify-between items-center '>
                                            <div className='px-2 bg-amber-500 hover:bg-neutral-700 text-gray-100 py-1 rounded cursor-pointer  transition duration-300'>
                                            <p className='text-sm'>New Arrivals</p>
                                            </div>
                                            <div className='cursor-pointer'>
                                                <i className="fa-regular fa-heart text-xl text-gray-700 hover:text-amber-500 transition duration-300"></i>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='absolute z-50 right-2 top-10 translate-x-2 opacity-0 group-hover:-translate-x-1  group-hover:opacity-100 duration-300 transition-all '>
                                            <div className=' '>
                                                <div className='my-4 cursor-pointer'>
                                                    <i className="fa-solid fa-cart-shopping text-xl text-gray-700 hover:text-amber-500 transition duration-300"></i>
                                                </div>
                                                <div className='cursor-pointer'>
                                                    <i className="fa-solid fa-eye text-xl text-gray-700 hover:text-amber-500 transition duration-300"></i>
                                                </div>
                                                
                                            </div>
                                    </div>
                                    <div className='absolute z-50 bottom-0 left-0 right-0'>
                                        <div className='bg-gray-200 py-2 text-center'>
                                            <h3 className='uppercase text-slate-700'>13% off</h3>
                                        </div>
                                    </div>
                                </div>
                               
                                <div className='border border-gray-50  py-3  p-3'>
                                    <h3 className='text-xl text-slate-700 text-left'>Adidas</h3>
                                    <h2 className='text-neutral-500 text-sm my-3 uppercase tracking-wider'>adidas X Speedportal+SG</h2>
                                    <div className='my-4 text-amber-400'>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-regular fa-star"></i>
                                     </div>
                                    <div className='flex'>
                                        <p className='text-slate-700'>$10</p>
                                        <p className='ml-7 text-neutral-400 line-through '>12$</p>
                                    </div>
                                </div>
                             
                    
                        </div>
                    </SwiperSlide>
                             
                    <SwiperSlide>
                        <div className='border border-gray-200 p-2 mr-4 group cursor-pointer '>
                                <div className='inline-block relative w-full'>
                                    <img src={Add} alt=""  className='w-full'/>
                                    <img src={Add2} alt="" className='absolute z-20 top-0 left-0 opacity-0 group-hover:opacity-100 transition-all duration-500' />
                                    <div className='absolute z-50 absolute top-3 left-3  right-3'>
                                        <div className='flex justify-between items-center '>
                                            <div className='px-2 bg-amber-500 hover:bg-neutral-700 text-gray-100 py-1 rounded cursor-pointer  transition duration-300'>
                                            <p className='text-sm'>New Arrivals</p>
                                            </div>
                                            <div className='cursor-pointer'>
                                                <i className="fa-regular fa-heart text-xl text-gray-700 hover:text-amber-500 transition duration-300"></i>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='absolute z-50 right-2 top-10 translate-x-2 opacity-0 group-hover:-translate-x-1  group-hover:opacity-100 duration-300 transition-all '>
                                            <div className=' '>
                                                <div className='my-4 cursor-pointer'>
                                                    <i className="fa-solid fa-cart-shopping text-xl text-gray-700 hover:text-amber-500 transition duration-300"></i>
                                                </div>
                                                <div className='cursor-pointer'>
                                                    <i className="fa-solid fa-eye text-xl text-gray-700 hover:text-amber-500 transition duration-300"></i>
                                                </div>
                                                
                                            </div>
                                    </div>
                                    <div className='absolute z-50 bottom-0 left-0 right-0'>
                                        <div className='bg-gray-200 py-2 text-center'>
                                            <h3 className='uppercase text-slate-700'>13% off</h3>
                                        </div>
                                    </div>
                                </div>
                               
                                <div className='border border-gray-50  py-3  p-3'>
                                    <h3 className='text-xl text-slate-700 text-left'>Adidas</h3>
                                    <h2 className='text-neutral-500 text-sm my-3 uppercase tracking-wider'>adidas X Speedportal+SG</h2>
                                    <div className='my-4 text-amber-400'>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-regular fa-star"></i>
                                     </div>
                                    <div className='flex'>
                                        <p className='text-slate-700'>$10</p>
                                        <p className='ml-7 text-neutral-400 line-through '>12$</p>
                                    </div>
                                </div>
                             
                    
                        </div>
                    </SwiperSlide>
                             
                    <SwiperSlide>
                        <div className='border border-gray-200 p-2 mr-4 group cursor-pointer '>
                                <div className='inline-block relative w-full'>
                                    <img src={Add} alt="" className='w-full' />
                                    <img src={Add2} alt="" className='absolute z-20 top-0 left-0 opacity-0 group-hover:opacity-100 transition-all duration-500' />
                                    <div className='absolute z-50 absolute top-3 left-3  right-3'>
                                        <div className='flex justify-between items-center '>
                                            <div className='px-2 bg-amber-500 hover:bg-neutral-700 text-gray-100 py-1 rounded cursor-pointer  transition duration-300'>
                                            <p className='text-sm'>New Arrivals</p>
                                            </div>
                                            <div className='cursor-pointer'>
                                                <i className="fa-regular fa-heart text-xl text-gray-700 hover:text-amber-500 transition duration-300"></i>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='absolute z-50 right-2 top-10 translate-x-2 opacity-0 group-hover:-translate-x-1  group-hover:opacity-100 duration-300 transition-all '>
                                            <div className=' '>
                                                <div className='my-4 cursor-pointer'>
                                                    <i className="fa-solid fa-cart-shopping text-xl text-gray-700 hover:text-amber-500 transition duration-300"></i>
                                                </div>
                                                <div className='cursor-pointer'>
                                                    <i className="fa-solid fa-eye text-xl text-gray-700 hover:text-amber-500 transition duration-300"></i>
                                                </div>
                                                
                                            </div>
                                    </div>
                                    <div className='absolute z-50 bottom-0 left-0 right-0'>
                                        <div className='bg-gray-200 py-2 text-center'>
                                            <h3 className='uppercase text-slate-700'>13% off</h3>
                                        </div>
                                    </div>
                                </div>
                               
                                <div className='border border-gray-50  py-3  p-3'>
                                    <h3 className='text-xl text-slate-700 text-left'>Adidas</h3>
                                    <h2 className='text-neutral-500 text-sm my-3 uppercase tracking-wider'>adidas X Speedportal+SG</h2>
                                    <div className='my-4 text-amber-400'>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-regular fa-star"></i>
                                     </div>
                                    <div className='flex'>
                                        <p className='text-slate-700'>$10</p>
                                        <p className='ml-7 text-neutral-400 line-through '>12$</p>
                                    </div>
                                </div>
                             
                    
                        </div>
                    </SwiperSlide>

            </Swiper>
           
           

                
           

           
        </div>
       
      
    
       
    </div>
</section>
  )
}

export default BestSeller