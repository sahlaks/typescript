import React, { useState, type ChangeEvent, type FormEvent } from 'react'

function ContactForm() {
    const [name,setName] = useState<string>('')
    const [email,setEmail] = useState<string>('')

    const handleNameChange = (e: ChangeEvent<HTMLInputElement>) =>{
        setName(e.target.value)
    }
    const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value)
    }
    const handleSubmit = (e: FormEvent<HTMLFormElement>) =>{
        e.preventDefault();
        console.log(name,email);
        
    }
  return (
    <div>
        <h1>ContactForm</h1>
        <form onSubmit={handleSubmit}>
            <input type='text' onChange={handleNameChange}/>
            <input type='text' onChange={handleEmailChange}/>
            <button>submit</button>
        </form>
    </div>
  )
}
export default ContactForm