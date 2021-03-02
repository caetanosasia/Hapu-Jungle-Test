import React from 'react';
import styles from './styles.module.css';
import ImageComponent from '../ImageComponent';

function SecondSection() {
   
    return (
        <>
            <div className={styles.secondary_section}>
                <section>
                    <h1>Share your home, nanny and costs</h1>
                    <p>
                    You have a fantastic home, a fantastic nanny and wouldn’t cutting your costs in half be, well,
                     fantastic?! If only it was easy to connect with other parents to share your costs? Well now it is, 
                     with Hapu. <a className={styles.styled_link} href='/'>Hapu means tribe</a> and it’s our foundational 3 tribal principles that empowers you to create 
                     and manage your own tribe. A tribe that together has the power to create new affordable solutions in childcare 
                     that work for you and your community.
                    </p>
                    <a className={styles.styled_link} href="/">Ready to get started?</a>
                </section>
                <div> <ImageComponent src='/ImageSection1.png' height='392px' alt='Application image' width='584px'/></div>
                
            </div>
            <div className={styles.styled_line}>

            </div>
        </>
    )
}



export default SecondSection;