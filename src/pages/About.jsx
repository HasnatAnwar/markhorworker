import React from 'react'
import '../styles/About.css'
import markhorlogo from '../static/images/Markhorblack.png'
import hasnat2 from '../static/images/hasnatImg.jpg'


const About = () => {
    return (
        <div className='About_box' id='about'>
            <div className='about_internal'>
                <div className="left">
                    <div className="text_box">
                        <p className="services_text">About Me</p>
                        <p className="bold_text">I am <span>Engineer</span> Hasnat Anwar.</p>
                        <p className="small_text">

                            I am a Full stack Web and mobile app developer with the experience of more then two years.
                        </p>
                        <p className='edu_heading'>Education</p>
                        <p className='edu_text'> I have completed my graduation in BS Computer Engineering from BZU Multan.</p>
                        <p className='edu_heading'>Expertise</p>
                        <div className='expertise_tags'>
                            <p className='expertise_tag' >Python</p>
                            <p className='expertise_tag' >Django</p>
                            <p className='expertise_tag' >Django Rest Framework</p>
                            <p className='expertise_tag' >Fast API</p>
                            <p className='expertise_tag' >Pandas</p>
                            <p className='expertise_tag' >Matplotlib</p>

                            <p className='expertise_tag' >JavaScript</p>
                            <p className='expertise_tag' >React Js</p>
                            <p className='expertise_tag' >Node JS</p>
                            <p className='expertise_tag' >React Native</p>
                            <p className='expertise_tag' >Express JS</p>
                            <p className='expertise_tag' >Mongo DB</p>
                            <p className='expertise_tag' >Postgres</p>
                            <p className='expertise_tag' >Adobe XD</p>
                            <p className='expertise_tag' >Figma</p>
                            <p className='expertise_tag' >Adobe Illustrator</p>

                            <p className='expertise_tag' >Wordpress</p>
                           
                        </div>

                    </div>
                </div>
                <div className="right">

                    <div className='front_img'>
                        <img src={hasnat2} alt="" />

                    </div>
                </div>

            </div>
        </div>
    )
}

export default About
