import React from 'react';
import styles from './styles.module.css';
import ImageComponent from '../ImageComponent';

function SixthSection() {
   
    return (
        <>
            <div className={styles.sixth_section}>
                <div> <ImageComponent src='/ImageSection5.png' height='96px' alt='Tablet draw image' width='216px'/></div>
                <section>
                    <h1>Coming soon: Nanny Share Daily Diary!</h1>
                    <p>
                        With the Hapu daily diary your nanny will be able to update you and your sharers with photos and commentary of the day. 
                        You and sharers will receive notifications and you’ll be able to login to view the daily adventures fo your little ones. We can’t wait!
                    </p>
                </section>
            </div>
        </>
    )
}



export default SixthSection;