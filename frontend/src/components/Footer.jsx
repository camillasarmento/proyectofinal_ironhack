import React from 'react';
import { logo } from '../assets';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='w-full bg-blue-200 py-12'>
            <div className='max-w-screen-lg mx-auto grid md:grid-cols-5 gap-8 px-4 md:px-0'>
                <div className='col-span-2'>
                    <img src={logo} className="h-20 mb-6" alt="Logo" />
                    <h3 className='text-xl font-bold mb-4'>Contactános</h3>
                    <p className='text-gray-700 mb-4'>+34 619 19 62 05</p>
                    <p className='text-gray-700 mb-4'> Somos tu fuente principal de productos de hielo premium, atendiendo a una amplia gama de necesidades en hoteles, restaurantes, fiestas, festivales y más en Palma de Mallorca, España.</p>
                    <p className='text-gray-700'>Email: info:@iceicebaby.es</p>
                    <div className='flex gap-4 mt-6'>
                        <div className='p-3 bg-gray-100 rounded-full'><FaFacebookF size={20} style={{ color:'#0047AB' }} /></div>
                       <div className='p-3 bg-gray-100 rounded-full'><FaInstagram size={20} style={{ color:'#0047AB' }} /></div>
                        </div>
                </div>
                <div>
                    <h3 className='text-xl font-bold mb-4'>Explore</h3>
                    <ul className='text-gray-700'>
                        <li className='py-1'>Inicio</li>
                        <li className='py-1'>Nosotros</li>
                        <li className='py-1'>Contacto</li>
                         </ul>
                </div>
                <div>
                    <h3 className='text-xl font-bold mb-4'>Dirección</h3>
                    <ul className='text-gray-700'>
                        c/ Setze de Juliol, 78 Pasaje 1 Puerta 4 07009 - Palma de Mallorca
                    </ul>
                </div>

            </div>
        </div>
    )
}

export default Footer;
