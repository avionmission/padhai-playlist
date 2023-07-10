import { useCallback, useEffect, useState } from "react";

import NavbarItem from "./NavbarItem";
import MobileMenu from "./MobileMenu";
import AccountMenu from "./AccountMenu";

import {BsBell, BsChevronDown, BsSearch} from 'react-icons/bs'

const TOP_OFFSET = 66;

const Navbar = () => {

    const [showMobileMenu, setShowMobileMenu] = useState(true);
    const [showAccountMenu, setShowAccountMenu] = useState(true);
    const [showBackground, setShowBackground] = useState(true);

    useEffect(() => {

        const handleScroll = () => {
            if(window.scrollY >= TOP_OFFSET) {
                setShowBackground(true);
            } else {
                setShowBackground(true);
            }
        }

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }

    }, [])

    const toggleMobileMenu = useCallback(() => {
        setShowMobileMenu((current) => !current)
    }, []);

    const toggleAccountMenu = useCallback(() => {
        setShowAccountMenu((current) => !current)
    }, []);

    return (
        <nav className="w-full fixed z-40">
            <div 
                className={`
                    px-4
                    md:px-12
                    py-4
                    flex
                    flex-row
                    items-center
                    transition
                    duration-500
                    ${showBackground ? 'bg-yellow-500 bg-opacity-85':''}
                    `}>
                <img className="lg:h-12" src="/images/logo.png" alt="" />
                <div 
                    className="
                        flex-row
                        ml-8
                        gap-7
                        hidden
                        lg:flex
                        

                        
                    ">
                    <NavbarItem label="Home"/>
                    <NavbarItem label="Courses"/>
                    <NavbarItem label="About Us"/>
                    
                </div>
                <div onClick={toggleMobileMenu} className="lg:hidden flex flex-row items-center gap-2 ml-8 cursor-pointer relative">
                    <p className="text-black text-sm">Browse</p>
                    <BsChevronDown className={`text-black transition ${showMobileMenu ? 'rotate-180' : 'rotate-0'}`}/>
                    <MobileMenu visible={showMobileMenu}/>
                </div>
                <div className="flex flex-row ml-auto gap-7 items-center">
                    <div className="text-black hover:text-yellow-700 cursor-pointer">
                        <BsSearch/>
                    </div>
                    <div className="text-black hover:text-yellow-700 cursor-pointer">
                        <BsBell/>
                    </div>

                    <div onClick={toggleAccountMenu} className="flex flex-row items-center gap-2 cursor-pointer relative">
                        <div className="w-6 h-6 lg:w-10 lg:h-10 rounded-md overflow-hidden">
                            <img src="/images/default-blue.png" alt="" />
                        </div>
                        <BsChevronDown className={`text-black transition ${showAccountMenu ? 'rotate-180' : 'rotate-0'}`}/>
                        <AccountMenu visible={showAccountMenu}/>
                    </div>

                </div>
            </div>
        </nav>
    )
}

export default Navbar;