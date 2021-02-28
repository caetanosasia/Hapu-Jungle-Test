import React from 'react';
import PropTypes from 'prop-types';
import Navigation from '../Navigation'

function Header() {
    return (
        <>
            <header>
                <Navigation>

                </Navigation>
            </header>
        </>
    )
}

Header.propTypes = {
    title: PropTypes.string.isRequired
}

export default Header;