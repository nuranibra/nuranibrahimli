import contactStyle from './contact.module.css'
import emailjs from '@emailjs/browser'
import { useRef, useState } from 'react';

export default function Contact () {

    const form = useRef()
    const [succesEmail, setSuccesEmail] = useState(false)
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const emailRegEx = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const emailSend = (e) => {
        e.preventDefault()
        if(emailRegEx.test(email) && message.length > 5){
            emailjs.sendForm('service_253avdm','template_h5fmiys',form.current,'GzIicysTa4EOY0gJs')
            .then(res => setSuccesEmail(true))
            .catch(error => console.log('email failed'))
        } else {
            alert('Yanlis email veya kisa metin')
        }
    }

    return(
        <section className={contactStyle.contactSection}>
            {succesEmail ? <div>
                <h1>succesEmail</h1>
                <button onClick={() => {
                    setSuccesEmail(false)
                }}>Close Tab</button>
            </div> : 
                <div className={contactStyle.emailForm}>
                    <div className={contactStyle.textBox}>
                        <h1>Contact Nuran Ibra</h1>
                        <h4>For any questions please mail me:</h4>
                    </div>
                    <div className={contactStyle.formBox}>
                        <form ref={form} onSubmit={emailSend} className={contactStyle.form}>
                            <label for='email'>Your Email Adress</label>
                            <input type='email' name='email' style={emailRegEx.test(email) ? {border:'1px solid green'} : {border:'1px solid red'}} placeholder='Your Email Adress' id='email' className={contactStyle.inp} onChange={(e)=>{
                                setEmail(e.target.value)
                            }}/>

                            <label for='message'>Message</label>
                            <textarea name='message' id='message' className={contactStyle.textArea} onChange={(e)=>{
                                setMessage(e.target.value)
                            }}></textarea>

                            <button type='submit' className={contactStyle.btn}>Send Email</button>
                        </form>
                    </div>
                </div>}
        </section>
    );
}