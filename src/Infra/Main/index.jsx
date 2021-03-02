import React from 'react';
import styles from './styles.module.css';
import TopSection from '../../Components/TopSection';
import NotificationComponent from '../../Components/NotificationComponent';
import SecondSection from '../../Components/SecondSection';
import ThirdSection from '../../Components/ThirdSection';

function Main() {
    return (
        <>
          <TopSection/>
          <NotificationComponent/>
          <SecondSection/>
          <ThirdSection/>
        </>
    )
}


export default Main;