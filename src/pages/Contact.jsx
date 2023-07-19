import React from 'react'
import '../styles/Contact.css'
import markhorlogo from '../static/images/Markhorblack.png'
import fiverr from '../static/images/fiverr.png'
import freelancer from '../static/images/freeelancer.svg'
import upwork from '../static/images/upwork.png'
import github from '../static/images/github.png'
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
            <p className="bold_text">To Get  <span>Help or Hire me</span> Just inbox me.</p>
            <p className="small_text">
              I have uploaded my work at github repository. <br />
              And I am selling my services at these freelancer sites. So please visit them. 
              
              </p>
            <div className="social_icon">
              <a href="https://github.com/HasnatAnwar"><img src={github} alt="" /></a>
              <a href="https://www.fiverr.com/markhorworker?up_rollout=true"><img src={fiverr} alt="" /></a>
              <a href="https://www.freelancer.com/hireme/markhorworker"><img src={freelancer} alt="" /></a>
              <a href="https://www.upwork.com/freelancers/~01554bb98da4f7ad0f"><img src={upwork} alt="" /></a>
            </div>

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
              <textarea name="message" id="" cols="30" rows="5"></textarea>
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
