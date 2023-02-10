import React from 'react'
import "./Contact.css"

function Contact() {
  return (
    <div id='contact'>
        <h1>Contact Us</h1>
        <form>
            <input type = 'text' placeholder='Full Name' required></input>
            <input type = 'email' placeholder='Type your E-mail' required></input>
            <textarea placeholder='Write here......' name></textarea>
            <input type='submit' value= 'send'></input>
        </form>
    </div>
  )
}

export default Contact;