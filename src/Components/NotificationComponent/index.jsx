import React from 'react';
import styles from './styles.module.css';
import ImageComponent from '../ImageComponent';

function NotificationComponent() {
   

    return (
        <>
            <div className={styles.notification}>
                <ImageComponent src='/ProfileImage.png' height='56px' alt='User image' width='56px'/>
                <a href="/">Sarah’s day care available now in North Sydney</a>
                <span>Wednesday, Thursday, Friday - 7:30 - 5:30</span>
            </div>
        </>
    )
}



export default NotificationComponent;