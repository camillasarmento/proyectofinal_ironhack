// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {logo, whatsapp} from '../assets'
import {Contacto} from "../pages/index.js";


const Navbar = () => {

    const [toggle,setToggle]=useState(false)
    const handleClick = ()=> setToggle(!toggle)

    return (
        <div className='w-full h-[80px] bg-white border-b'>
            <div className='md:max-w-[1480px] max-w-[600px] m-auto w-full h-full flex justify-between items-center md:px-0 px-4'>

                <img src={logo} alt="Logo" className="h-[79px]" />

                <div className='hidden md:flex items-center text-2xl font-semibold '>
                    <ul className='flex gap-10'>
                        <li>Inicio</li>
                        <li>Nosotros</li>
                        <a href="/contacto">Contacto</a>
                    </ul>
                </div>


                <div className='hidden md:flex'>
                    <button className='flex justify-between items-center  bg-transparent  px-6 gap-2 text-2xl'>
                        Pedidos <img src={whatsapp} alt={"WhatsApp"} className="h-[79px]"  />
                    </button>

                </div>

                <div className='md:hidden'  onClick={handleClick}>
                    <img src={toggle?close:logo} />
                </div>


            </div>

            <div className={toggle?'absolute z-10 p-4  bg-white w-full px-8 md:hidden border-b':'hidden'}>
                <ul>
                    <li className='p-4 hover:bg-gray-100'>Inicio</li>
                    <li className='p-4 hover:bg-gray-100'>Nosotros</li>
                    <li className='p-4 hover:bg-gray-100'>Contacto</li>
                    <div className='flex flex-col my-4 gap-4'>
                        <a href="https://wa.me/+34619196205" target="_blank" rel="noopener noreferrer"
                           className='border border-[20B486] flex justify-center items-center bg-transparent px-6 gap-2 py-4'>
                            Pedidos <img src={whatsapp} alt="WhatsApp" className="h-[24px]"/>
                        </a>
                    </div>
                </ul>
            </div>


        </div>
)
}

export default Navbar;