import React from 'react';
import styles from './styles.module.css';
import ImageComponent from '../ImageComponent';

function SecondSection() {
   
    return (
        <>
            <div className={styles.fifth_section}>
                <section>
                    <h1>A framework built for the long term</h1>
                    <p>
                    Childcare is for the long term. 
                    And you need a framework you can count on that gives your share long term viability and success. 
                    That’s why we’ve defined Hapu around our three tribal principles; clearly defined process, transparency over money and equality of participation.
                    </p>
                    <a className={styles.styled_link} href="/">Read how Hapu’s tribal background defines our app</a>
                </section>
                
                <div> <ImageComponent src='/ImageSection4.png' height='392px' alt='Application usage image' width='984px'/></div>
            </div>
            <div className={styles.styled_line}>

            </div>
        </>
    )
}



export default SecondSection;