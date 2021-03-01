import React, { useState, createRef  } from 'react';
import Navigation from '../Navigation'
import styles from './styles.module.css';
import ImageComponent from '../../Components/ImageComponent';
import Link from 'next/link';

function Header() {
    const [ mobileNavigationControl, setMobileNavigationControl] = useState(false);
    const navigationElement = createRef();
    console.log(navigationElement);


     const openSidebar = () => {
        setMobileNavigationControl(!mobileNavigationControl);
        navigationElement.current.focus();
    }

    return (
        <>
            <header className={styles.header}>
                <div className={styles.desktop_header}>
                    <div className={styles.link}>
                        <Link href='/'>
                            <ImageComponent src='/hapu.svg' height='64px' alt='Hapu logo' width='48px'/>
                        </Link>
                    </div>
                    <Navigation className={styles.navigation}>
                        <Link href='/'>Create Your Nanny Share</Link>
                        <Link href='/'>Browse Shares</Link>
                        <Link href='/'>Our Story</Link>
                    </Navigation>
                </div>
                <div className={styles.mobile_header}>
                    <div className={styles.menu_nav}>
                        <Link href='/'>
                            <ImageComponent src='/hapu.svg' height='64px' alt='Hapu logo' width='48px'/>
                        </Link>
                        <div>
                            <button onClick={openSidebar} className={styles.hamburguer_button}>
                                <ImageComponent src='/menu.png' height='16px' alt='Menu button' width='16px'/>
                            </button>
                        </div>
                    </div>

                    <div ref={navigationElement} className={mobileNavigationControl ? styles.mobile_navigation_active : styles.mobile_navigation}>
                        <button onClick={openSidebar} className={styles.close_menu_button}>
                            <ImageComponent src='/close.svg' height='16px' alt='Close menu button' width='16px'/>
                        </button>

                        <Navigation className={styles.mobile_nav}>
                            <Link href='/'>Create Your Nanny Share</Link>
                            <Link href='/'>Browse Shares</Link>
                            <Link href='/'>Our Story</Link>
                        </Navigation>
                        <button className={styles.mobile_sign_in_button}>Sign In</button>
                    </div>
                    <div onClick={openSidebar} className={mobileNavigationControl ? styles.close_navigation : ''}>
                    </div>
                </div>
                <div className={styles.right_buttons}>
                    <button className={styles.shares_button}>Become a Nanny Share Host</button>
                    <button className={styles.sign_in_button}>Sign In</button>
                </div>
            </header>
        </>
    )
}



export default Header;