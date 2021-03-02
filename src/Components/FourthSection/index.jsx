import React from 'react';
import styles from './styles.module.css';
import ImageComponent from '../ImageComponent';

function SecondSection() {
   
    return (
        <>
            <div className={styles.fourth_section}>
                <div> <ImageComponent src='/ImageSection3.png' height='336px' alt='Application usage image' width='456px'/></div>
                <section>
                    <h1>Shared payments made simple</h1>
                    <p>
                    Sometimes it’s hard enough just sharing a restaurant bill. 
                    Try sharing that bill week in, week out and you might encounter more than a few snares. But not with Hapu. 
                    Simply set your rates and our automated payment system takes care of the rest. You need never talk money or who owes what.
                    </p>
                    <a className={styles.styled_link} href="/">Read how Bridget’s share (without Hapu) ended over $15</a>
                </section>
                
            </div>
            <div className={styles.styled_line}>

            </div>
        </>
    )
}



export default SecondSection;