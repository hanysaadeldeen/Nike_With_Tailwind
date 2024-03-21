
import { navLinks } from "../constants"
import { hamburger } from "../assets/icons"


import {headerLogo}from "../assets/images"

const NavBar = () => {
    return (
        <header className="py-4 absolute z-10 w-full  ">
            <nav className="padding-x flex py-3 justify-between  items-center  max-container ">
                
                <a href="/">
                    <img src={headerLogo}
                        width={130}
                        height={29}
                        alt="brandIMG" />  
                </a>
                <ul className="flex justify-center 
                items-center space-x-5 max-lg:hidden">
                    {
                        navLinks.map((e, index) => {
                            return (
                                <a className="cursor-pointer " href={e.href} key={index}>
                                    <li className="font-monts leading-normal text-lg text-slate-gray tracking-wider " >{e.label}</li>
                                </a>
                                )
                        })
                    }
                </ul>
                <div className="lg:hidden">
                    <img src={hamburger} width={30} height={30} alt="hamburger" />
                </div>
            </nav> 
            
        </header>)
}

export default NavBar