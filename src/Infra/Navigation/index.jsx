import React from 'react';

function Navigation(props) {
    return (
        <>
            <nav {...props}>
                {props.children}
            </nav>
        </>
    )
}

export default Navigation;