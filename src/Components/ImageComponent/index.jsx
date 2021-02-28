import React from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';

function ImageComponent(props) {
    return (
        <>
            <Image {...props}/>
        </>
    )
}

ImageComponent.propTypes = {
    src: PropTypes.string.isRequired
}

export default ImageComponent;