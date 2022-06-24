import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';
import githubIcon from '../../assets/icons/GH-64.png';
import linkedInIcon from '../../assets/icons/linkedin-official.png';

function Contact() {

    const [formState, setFormState] = useState({name: '', email: '', message: ''});
    const [errorMessage, setErrorMessage] = useState('');
    const { name, email, message } = formState;

    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
    }

    function handleChange(e) {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            console.log(isValid);

            if (!isValid) {
                setErrorMessage('Your Email is invalid!');
            }
            else {
                setErrorMessage('');
            }
        }
        else {
            if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required`)
            }
            else {
                setErrorMessage('');
            }
        }

        if(!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value})
        }

        console.log('errorMessage:', errorMessage);

    }

    return(
        <section>
            <h1 id='form-greet'>Let's Get In Touch!</h1>
            <form id='contact-form' onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='name'>Name:</label>
                    <input type='text' defaultValue={name} onBlur={handleChange} name='name' />
                </div>
                <div>
                    <label htmlFor='email'>Email:</label>
                    <input type='email' defaultValue={email} onBlur={handleChange} name='email' />
                </div>
                <div>
                    <label htmlFor='message' className='textarea-label'>Message:</label>
                    <textarea name='message' defaultValue={message} onBlur={handleChange} rows='5' cols='30' />
                </div>
                {errorMessage && (
                    <div>
                        <p className='error-text'>{errorMessage}</p>
                    </div>
                )}
                <button type='submit' data-testid='submit-button' className='button-submit'>Submit</button>
                <div>
                    <a href='https://github.com/jared-ruiz' target='_blank'>
                        <img src={githubIcon}></img>
                    </a>
                    <a href='https://www.linkedin.com/in/jaredruiz/' target='_blank'>
                        <img src={linkedInIcon} className='linkedIn-icon'></img>
                    </a>
                </div>
                <div>

                </div>

            </form>
        </section>
    )
}

export default Contact;