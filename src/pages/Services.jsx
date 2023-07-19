import React from 'react'
import '../styles/Services.css'
import markhorlogo from '../static/images/Markhorblack.png'
import api from '../static/images/api.png'
import api2 from '../static/images/api2.png'
import web from '../static/images/web.png'
import web2 from '../static/images/web2.png'
import android2 from '../static/images/android2.png'
import desktop from '../static/images/desktop.jpg'

const Services = () => {
  return (
    <div className='Services_box' id='services'>
      <div className="services_internal">
        <div className="left">
          <div className="text_box">
            <p className="services_text">My SErvices</p>
            <p className="bold_text">Here are my<span>Services</span> that helps you.</p>
            <p className="small_text">
              I am developing the Software Products with Quality Asurance, High quality code, full Commented and properly documented.
            </p>
          </div>
        </div>
        <div className="right">
          <div className='column' style={{ marginTop: '20px' }}>
            <div className='row'>
              <div className="service_item">
                <div className="icon_box">
                  <img src={web2} alt="" />
                </div>
                <h4>Website Development</h4>
                <p>
                  I am developing the web applications with Python django, React JS, Node JS, Mongo DB and Express JS.
                </p>
              </div>
            </div>
            <div className='row'>
              <div className="service_item">
                <div className="icon_box">
                  <img src={android2} alt="" />
                </div>
                <h4>Mobile Development</h4>
                <p>

                  I am developing the mobile application with the React Native and Firebase, Django, Node JS for backend.
                  </p>
              </div>
            </div>
          </div>
          <div className='column' style={{ marginTop: '-20px' }} >
            <div className='row'>
              <div className="service_item">
                <div className="icon_box">
                  <img src={api2} alt="" />
                </div>
                <h4>Backend Enigineeing</h4>
                <p>
                  I have been developing the backend with Python django, Fast API, Node and Express js.
                  </p>
              </div>
            </div>
            <div className='row'>
              <div className="service_item">
                <div className="icon_box">
                  <img src={desktop} alt="" />
                </div>
                <h4>Dekstop Development</h4>
                <p>
                  I am developing the Desktop application with React Js,React Native and Electron JS.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services
