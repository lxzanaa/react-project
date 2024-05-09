import React, { useState } from 'react'
import logo from '../img/logo.png'

function Header() {
    let [toggle, setToggle] = useState(false)
    return (
        <>
            <header className='header' >
                <div className='header__container padd-20' >
                    <a className='header__logo' href="#"><img src={logo} alt="logo" /></a>
                    <div>
                        <ul className='header__list' >
                            <li className='header__item' ><a className='header__link active' href="#">Home</a></li>
                            <li className='header__item' ><a className='header__link' href="#">About</a></li>
                            <li className='header__item' ><a className='header__link' href="#">Guru</a></li>
                            <li className='header__item' ><a className='header__link' href="#">Siswa</a></li>
                            <li className='header__item' ><a className='header__link' href="#">Pendaftaran</a></li>
                            <li className='header__item' ><a className='header__link' href="#">lainya</a></li>
                            <li className='header__item' ><a className='header__link' href="#">Kontak</a></li>
                        </ul>
                    </div>
                    <i onClick={() => setToggle(true)} className="fa-solid fa-bars bars"></i>
                </div>

                {
                    toggle ? <div className="header__mobile">
                        <div className="header__mobile-container padd-20">
                            <div className='header__con' >
                                <a className='header__mobile-logo' href="#"><img src={logo} alt="logo" /></a>
                                <i onClick={() => setToggle(false)} className="fa-solid fa-x x"></i>
                            </div>
                            <div>
                                <ul className='header__mobile-list' >
                                    <li className='header__mobile-item' ><a className='header__mobile-link active' href="#">Home</a></li>
                                    <li className='header__mobile-item' ><a className='header__mobile-link' href="#">About</a></li>
                                    <li className='header__mobile-item' ><a className='header__mobile-link' href="#">Guru</a></li>
                                    <li className='header__mobile-item' ><a className='header__mobile-link' href="#">Siswa</a></li>
                                    <li className='header__mobile-item' ><a className='header__mobile-link' href="#">Pendaftaran</a></li>
                                    <li className='header__mobile-item' ><a className='header__mobile-link' href="#">lainya</a></li>
                                    <li className='header__mobile-item' ><a className='header__mobile-link' href="#">Kontak</a></li>
                                </ul>
                            </div>
                        </div>
                    </div> : null
             }
            </header>
        </>
    )
}

export default Header