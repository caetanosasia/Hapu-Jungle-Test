import React from 'react';

function Navigation(props) {
    console.log(props)
    return (
        <>
            <nav {...props}>
                {props.children}
            </nav>
        </>
    )
}

export default Navigation;