import React from 'react';
import styles from './styles.module.css';
import ImageComponent from '../ImageComponent';

function TopSection() {
   

    return (
        <>
          <section className={styles.top_section}>
            <div className={styles.text_container}>
                <h1>Easily create or join a local nanny share with Hapu</h1>
                <p>Hapu is Airbnb for nanny share. Share your home, nanny and costs and create new flexible, affordable solutions in childcare.</p>
                <a rel="noreferrer" className={styles.external_link} target="_blank" href="https://www.youtube.com/">
                  <ImageComponent src='/PlayButton.svg' height='48px' alt='Button to open video in Youtube' width='48px'/>
                  <span>
                    See hapu in action (27 seconds)
                  </span>
                </a>
            </div>
            <div className={styles.image_top}>
              <ImageComponent src='/ImageHeader.png' height='290px' alt='Image from our application' width='316px'/>
            </div>
          </section>
        </>
    )
}



export default TopSection;