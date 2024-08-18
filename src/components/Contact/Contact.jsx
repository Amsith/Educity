import React from 'react'
import './contact.css'

import { IoIosMail } from "react-icons/io";
import { IoCallSharp } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";

const Contact = () => {

// Web3form 

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "acces Key");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Form Submitted Successfully");
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };

    return (
        <div id='contact-us' className='contact-main'>

            <div className='contact-col'>
                <h2>Send us a message</h2>
                <p>Lorem ipsum dolor sit amet amet consectetur, adipisicamet consectetur, adipisicconsectetur, adipisicing elit. Soluta labore praesentium magnam dolorem nisi fug consequuntur sed rem! Fugit, explic consequuntur sed rem! Fugit, explicit consequuntur sed rem! Fugit, explicabo. lorem </p>
                <div><span className='con-icon'><IoIosMail /></span>contactamsith@gmail.com</div>
                <div><span className='con-icon'><IoCallSharp /></span>+123-34-4545</div>
                <div><span className='con-icon'><FaLocationDot /></span>77, Manchester, United kingdom</div>

            </div>

            <div className='contact-form'>
                <form onSubmit={onSubmit} action="">
                    <div>
                        <label htmlFor="">Your Name</label>
                        <input type="text" name='name' placeholder='Enter Your Name' required />
                    </div>
                    <div>
                        <label htmlFor="">Phone Number</label>
                        <input type="tel" name='phone' placeholder='Enter Phone Number' required />
                    </div>
                    <div>
                        <label htmlFor="">Write Your Message</label>
                        <textarea name="message" rows="10" placeholder='Enter Your Message' required></textarea>
                    </div>
                    <div>
                        <button type='submit' className='cont-btn'>Submit Now <span><FaArrowRight /></span></button>
                    </div>
                    <div>
                        <p>{result}</p>
                    </div>
                </form>

            </div>


        </div >
    )
}

export default Contact