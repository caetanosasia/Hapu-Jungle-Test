import React from 'react';
import styles from './styles.module.css';
import ImageComponent from '../../Components/ImageComponent';
import Link from 'next/link';

function Main() {
    return (
        <>
            <footer className={styles.footer}>
                <div>
                    <section className={styles.footer_section}>
                        <h1>Become a nanny share host</h1>
                        <p>Takes less than 5 minutes to get started</p>

                        <a href="/" className={styles.button_link}>
                            <div> <ImageComponent src='/GridIcon.svg' height='30px' alt='Grid icon' width='30px'/></div>
                            <div className={styles.double_label_link}>
                                <p>Create Your Nanny Share</p>
                                <span>Takes less than 5 minutes</span>
                            </div>
                        </a>
                        <a href="/" className={styles.regular_link}>
                            Or browse local nanny-shares
                        </a>
                    </section>
                </div>
                <div className={styles.logo_content}>
                    <div className={styles.hapu_logo_container}> <ImageComponent src='/HapuFooter.svg' height='24px' alt='Hapu logo' width='64px'/></div>
                    <div className={styles.link_container}>
                        <Link href="/">Share Your Nanny</Link>
                        <Link href="/">Our Story</Link>
                        <Link href="/">Blog</Link>
                        <Link href="/">Terms & Privacy</Link>
                    </div>
                    <div className={styles.medias_logo}> 
                        <div><ImageComponent src='/Facebook.svg' height='45px' alt='Facebook logo' width='45px'/></div>
                        <div><ImageComponent src='/Twitter.svg' height='45px' alt='Twitter logo' width='45px'/></div>
                        <div><ImageComponent src='/Instagram.svg' height='45px' alt='Instagram logo' width='45px'/></div>
                    </div>

                </div>
                <div className={styles.copyright_content}>
                    <p>
                        Copyright © 2017 Hapu PTY Limited All rights reserved
                    </p>
                </div>
            </footer>
        </>
    )
}


export default Main;