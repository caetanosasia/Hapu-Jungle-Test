import React from 'react';
import PropTypes from 'prop-types';
import Navigation from '../Navigation'
import styles from './styles.module.css';
import ImageComponent from '../../Components/ImageComponent';

function Header() {

    return (
        <>
            <header className={styles.header}>
                <div className={styles.desktop_header}>
                    <ImageComponent src='/hapu.svg' height='64px' alt='Hapu logo' width='48px'/>
                    <Navigation>

                    </Navigation>
                </div>
                <div className={styles.mobile_header}>
                    <Navigation>

                    </Navigation>
                </div>
            </header>
        </>
    )
}

Header.propTypes = {
    title: PropTypes.string.isRequired
}

export default Header;