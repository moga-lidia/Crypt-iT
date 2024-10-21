import React, { useState } from 'react';
import { HiMenuAlt4 } from 'react-icons/hi';
import { AiOutlineClose } from 'react-icons/ai';

import logo from '../../assets/logo.png';

const NavbarItem = ({ title, props }) => {
    return (
        <li className={`mx-4 cursor-pointer ${props}`}>
            {title}
        </li>
    )
}

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <nav className="w-full flex md:justify-center justify-between items-center p-4">
            <div className='md:flex-[0.7] flex flex-row flex-initial items-center'>
                <img src={logo} alt="logo" className='w-32 cursor-pointer' />
                <h1 className="text-3xl sm:text-5xl text-white">
                    CRYPT iT
                </h1>
            </div>
            
            <ul className='text-white md:flex hidden list-none flex-row justify-between items-center flex-initial'>
                {/* {["Market", "Exchange", " Tutorials", "Wallets"].map((item, index) => (
                    <NavbarItem key={item + index} title={item} />
                ))} */}
                <li>
                <a href={`https://ethereum.org/en/`} target="_blank" rel="noopener norefereer">
                    <p className='bg-[#E139EC] py-2 px-5 mx-4 rounded-full cursor-pointer hover:bg-[#6FC8E5]'>
                        Ethereum
                    </p>
                </a>
                </li>
            </ul>
            <div className='flex relative'>
                {toggleMenu ?
                    <AiOutlineClose fontSize={28} className="text-white md:hidden cursor-pointer" onClick={() => setToggleMenu(false)} /> :
                    <HiMenuAlt4 fontSize={28} className="text-white md:hidden cursor-pointer" onClick={() => setToggleMenu(true)} />}
                {toggleMenu && (
                    <ul
                        className='z-10 fixed top-0 right-2 p-3 w-[70vw] h-screen shadow-2xl md: hidden list-none
                        flex flex-cole justify-start items-end rounded-md blue-glassmorphism text-white animate-slide-in'>
                        <li className='text-xl w-full my-2'>
                            <AiOutlineClose onClick={() => setToggleMenu(false)} />
                        </li>
                        {["Market", "Exchange", " Tutorials", "Wallets"].map((item, index) => (
                            <NavbarItem key={item + index} title={item} props="my-2 text-lg" />
                        ))}
                    </ul>
                )}
            </div>
        </nav>
    )
}

export default Navbar;