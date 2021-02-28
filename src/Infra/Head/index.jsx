import React from 'react';
import PropTypes from 'prop-types';
import NextHead from 'next/head';

function Head({ title }) {
    return (
        <>
            <NextHead>
                <title>
                    {title}
                </title>
                <meta name="Description" content="Put your description here."></meta>
            </NextHead>
        </>
    )
}

Head.propTypes = {
    title: PropTypes.string.isRequired
}

export default Head;