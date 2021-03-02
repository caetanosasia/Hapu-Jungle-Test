import React from 'react';
import styles from './styles.module.css';
import TopSection from '../../Components/TopSection';
import NotificationComponent from '../../Components/NotificationComponent';
import SecondSection from '../../Components/SecondSection';
import ThirdSection from '../../Components/ThirdSection';
import FourthSection from '../../Components/FourthSection';
import FifthSection from '../../Components/FifthSection';

function Main() {
    return (
        <>
          <TopSection/>
          <NotificationComponent/>
          <SecondSection/>
          <ThirdSection/>
          <FourthSection/>
          <FifthSection/>
        </>
    )
}


export default Main;