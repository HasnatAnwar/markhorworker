import React from 'react'
import '../styles/Projects.css'
import markhorlogo from '../static/images/Markhorblack.png'

import adsWeb from '../static/images/adsWeb.png'
import chatWeb from '../static/images/chatWeb.png'
import foodWeb from '../static/images/foodWeb.png'
import twitterWeb from '../static/images/twitterWeb.png'
import youtubeWeb from '../static/images/youtubeWeb.png'
import rideWeb from '../static/images/rideWeb.png'



const Projects = () => {
  return (
    <div className='Projects_box' id='projects'>
      <div className='projects_internal'>
        <div className="left">
          <div className="text_box">
            <p className="services_text">See</p>
            <p className="bold_text">See my <span>Work</span> that surprise you.</p>
            <p className="small_text">
              I have been devloping the software application more then two years. I worked on realtime projects and dummy projects some of dummy projects are here to show. 
            </p>
          </div>
        </div>
        <div className="right">
          <div className='pro_items'>
            <div className="pro_item">
              <img src={youtubeWeb} alt="" />
              <h1>YouTube Clone</h1>
            </div>
            <div className="pro_item">
              <img src={twitterWeb} alt="" />
              <h1>Twitter Clone</h1>
            </div>
            <div className="pro_item">
              <img src={chatWeb} alt="" />
              <h1>Chat App</h1>
            </div>
            <div className="pro_item">
              <img src={adsWeb} alt="" />
              <h1>Ad Management Tool</h1>
            </div>
            <div className="pro_item">
              <img src={rideWeb} alt="" />
              <h1>Ride Sharing App</h1>
            </div>
            <div className="pro_item">
              <img src={foodWeb} alt="" />
              <h1>Food Delivery App</h1>
            </div>
          </div>

          {/* <div className='column' style={{ marginTop: '20px' }}>
            <div className='row'>
              <div className="project_item">
                <div className="icon_box">
                  <img src={markhorlogo} alt="" />
                </div>
                <h4>Website Development</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
              </div>
            </div>
            <div className='row'>
              <div className="project_item">
                <div className="icon_box">
                  <img src={markhorlogo} alt="" />
                </div>
                <h4>Website Development</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
              </div>
            </div>
          </div>
          <div className='column' style={{ marginTop: '-20px' }} >
            <div className='row'>
              <div className="project_item">
                <div className="icon_box">
                  <img src={markhorlogo} alt="" />
                </div>
                <h4>Website Development</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
              </div>
            </div>
            <div className='row'>
              <div className="project_item">
                <div className="icon_box">
                  <img src={markhorlogo} alt="" />
                </div>
                <h4>Website Development</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
              </div>
            </div>
          </div>
                    <div className='column' style={{ marginTop: '-20px' }} >
            <div className='row'>
              <div className="project_item">
                <div className="icon_box">
                  <img src={markhorlogo} alt="" />
                </div>
                <h4>Website Development</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
              </div>
            </div>
            <div className='row'>
              <div className="project_item">
                <div className="icon_box">
                  <img src={markhorlogo} alt="" />
                </div>
                <h4>Website Development</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  )

}

export default Projects
