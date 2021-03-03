import React, { useState } from 'react';
import styles from './styles.module.css';
import ImageComponent from '../ImageComponent';

function ThirdSection() {
    const [ name, setName] = useState('test');
    const [ email, setEmail] = useState('test@');
    const [ success, setSuccess ] = useState('none');
    const [ alertMessage, setAlertMessage] = useState('Sent with success!')
    const [ loader, setLoader] = useState(false);
   async function handleLogin(e){
        e.preventDefault();
        setLoader(true)
        try { 
              fetch('https://api.jungledevs.com/api/v1/challenge-newsletter/', {
                    method: 'post',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                      },
                    body: JSON.stringify({
                        "name": name,
                        "email": email
                      })
                }).then((response) => {
                    if(response.status === 200){
                        setSuccess(true)
                        setAlertMessage('Sent with success!')
                    } else {
                        setSuccess(false);
                    }
                    return response.json();
                }).then((data) => {
                    data.email ? setAlertMessage(data.email[0]) : '';
                    data.error ? setAlertMessage(data.error) : '';
                    setLoader(false)
                });
        } catch(err) {
            alert('Error to send the data')
        }
    }

    return (
        <>
            <div className={styles.third_section}>
                <section>
                    <h1>Are you a parent without a nanny and looking to share?</h1>
                    <p>Leave us your name and email and we’ll update you as soon as a share becomes available in your area!</p>
                    
                </section>
                <div className={styles.custom_form}>
                    <form onSubmit={handleLogin}>
                        <label for="name" className={styles.visuallyhidden}>Your name: </label>
                        <input id="name" className={styles.input_button} type='text' onChange={e => setName(e.target.value)} placeholder="Your name"></input>
                        <label for="email" className={styles.visuallyhidden}>Your email: </label>
                        <input id="email" className={styles.input_button}  type='text' onChange={e => setEmail(e.target.value)} placeholder="Your email"></input>
                        <button className={styles.submit_button} type="submit">Send</button>
                    </form>
                    {success !== 'none' ? <div className={styles.alert} role="alert">
                        {alertMessage}
                    </div> : ''}
                    {loader ? <div aria-live="polite" className={styles.loader_}>
                        <ImageComponent src='/Reload-1s-200px.gif' height='50px' alt='Loader image' width='50px'/>
                    </div> : ''}
                </div>
            </div>
            <div className={styles.styled_line}>

            </div>
           
        </>
    )
}



export default ThirdSection;