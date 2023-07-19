import React from 'react'
import '../styles/Landing.css'
import markhorlogo from '../static/images/Markhorblack.png'
import hasnat from '../static/images/hasnatpic.png'
import hasnat2 from '../static/images/hasnatImg.jpg'

const Landing = () => {
  return (
    <div className='Landing_box'>
      <div className='landing_internal'>
        <div className="left">
          <div className="text_box">
            <p className='hey_text'>Hey I am </p>
            <p className='name_text'>Engr. <span>Hasnat Anwar</span></p>
            <p className='free_text'>Markhor Worker!</p>
            <p className="desc_text">

              I am a <b> Full Stack Web and Mobile Developer </b> with more then two years of experirence in Python, Django, Django Rest Framework, React JS, Node JS, Express JS, React native, Mongo DB, Postgres and dbsqlite3.
            </p>
            <button className='download_btn'><a href="https://drive.google.com/file/d/1ib2SmfyEAsLdeFl35gaof_598vRNMx-v/view?usp=sharing">Download</a></button>
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

export default Landing
