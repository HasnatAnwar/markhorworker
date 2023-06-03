import React from 'react'
import '../styles/Landing.css'
import markhorlogo from '../static/images/Markhorblack.png'
const Landing = () => {
    return (
        <div className='Landing_box'>
            <div className='landing_internal'>
                <div className="left">
                    <div className="text_box">
                        <p className='hey_text'>Hey I am </p>
                        <p className='name_text'>Hasnat <span>Anwar</span></p>
                        <p className='free_text'>Markhor Worker!</p>
                        <p className="desc_text">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus ad explicabo consectetur molestias numquam!
                        </p>
                        <button className='download_btn'>Download</button>
                    </div>
                </div>
                <div className="right">

                    <div className='front_img'>
                        <img src={markhorlogo} alt="" />

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Landing
