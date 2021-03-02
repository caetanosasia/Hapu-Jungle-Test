import React, { useState } from 'react';
import styles from './styles.module.css';

function ThirdSection() {
    const [ name, setName] = useState('test');
    const [ email, setEmail] = useState('test@');
    const [ success, setSuccess ] = useState('none');
    const [ alertMessage, setAlertMessage] = useState('Sent with success!')
   async function handleLogin(e){
        e.preventDefault();

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
                    console.log(response)
                    if(response.status === 200){
                        setSuccess(true)
                        setAlertMessage('Sent with success!')
                    } else {
                        setSuccess(false);
                    }
                    return response.json();
                }).then((data) => {
                    console.log(data)
                    data.email ? setAlertMessage(data.email[0]) : '';
                    data.error ? setAlertMessage(data.error) : '';
                    
                });
                

        } catch(err) {
            alert('Error to send the data')
            console.log(err)
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
                        <input className={styles.input_button} type='text' onChange={e => setName(e.target.value)} placeholder="Your name"></input>
                        <input className={styles.input_button}  type='text' onChange={e => setEmail(e.target.value)} placeholder="Your email"></input>
                        <button className={styles.submit_button} type="submit">Send</button>
                    </form>
                    {success !== 'none' ? <div className={styles.alert} role="alert">
                        {alertMessage}
                    </div> : ''}
                </div>
            </div>
            <div className={styles.styled_line}>

            </div>
           
        </>
    )
}



export default ThirdSection;