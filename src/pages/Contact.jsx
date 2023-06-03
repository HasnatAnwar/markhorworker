import React from 'react'
import '../styles/Contact.css'
import markhorlogo from '../static/images/Markhorblack.png'
import emailjs from 'emailjs-com'


const Contact = () => {
  
  // function sendEmail(e){

  // }
  const sendEmail = (e) => {
    e.preventDefault();
    console.log('heelo')

    emailjs.sendForm('service_74y4wl6', 'template_w40g1z2', e.target, 'ik4EMsF4XCr0Z5g9d')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };

  return (
    <div className='Contact_box' id='contact'>
      <div className='contact_internal'>
        <div className="left">
          <div className="text_box">
            <p className="services_text">Contact Me</p>
            <p className="bold_text">Lorem ipsum <span>dolor</span> sit amet consectetur.</p>
            <p className="small_text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi illo accusamus, deserunt laborum eos provident hic blanditiis dolorem, magnam perferendis corrupti, beatae velit vero quos? Magnam rerum aut earum tempore.</p>
          </div>
        </div>
        <div className='right'>
          <form onSubmit={sendEmail} className='contact_form'>
            <h5>Get in touch</h5>
            <div className='name_email'>
              <div className='contact_name'>
                <p>Full Name</p>
                <input type="text" name="name" id="" />
              </div>
              <div className='contact_email'>
                <p>Email Address</p>
                <input type="text" name="email" id="" />
              </div>

            </div>
            <div className='contact_subject'>
              <p>Subject</p>
              <input type="text" name="subject" id="" />
            </div>
            <div className='contact_compose'>
              <p>Compose</p>
              {/* <input type="text" name="message" id="" /> */}
              <textarea  name="message" id="" cols="30" rows="5"></textarea>
            </div>
            {/* <button className='submit_btn' type="submit">Send</button> */}
            <input type="submit" className='submit_btn' value='Send Message' />
            </form>
        </div>
      </div>

    </div>
  )
}

export default Contact
