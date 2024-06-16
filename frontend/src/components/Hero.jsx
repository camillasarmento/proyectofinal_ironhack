// eslint-disable-next-line no-unused-vars
import React from 'react';
import { hero } from '../assets';


const Hero = () => {
    return (
        <div className='w-full bg-white py-24'>
            <div className='md:max-w-[1480px] m-auto grid md:grid-cols-2 max-w-[600px]  px-4 md:px-0'>

                <div className='flex flex-col justify-start gap-4'>
                    <h1 className='md:leading-[72px] py-2 md:text-6xl text-5xl font-semibold'>
                            <span className='text-[#0096FF] block'>ICE ICE BABY</span>
                            <span className='block mt-6'>Cubitos de Hielo, varios tipos de hielo picado y esculturas</span>

                    </h1>
                    <p className='py-2 text-lg text-gray-600 mt-4'>FABRICACIÓN & DISTRIBUCIÓN DE HIELO</p>


                </div>

                <img src={hero} className="md:order-last  order-first"/>


            </div>


        </div>
    )
}

export default Hero