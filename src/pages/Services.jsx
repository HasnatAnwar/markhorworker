import React from 'react'
import '../styles/Services.css'
import markhorlogo from '../static/images/Markhorblack.png'


const Services = () => {
  return (
    <div className='Services_box' id='services'>
      <div className="services_internal">
        <div className="left">
          <div className="text_box">
            <p className="services_text">My SErvices</p>
            <p className="bold_text">Lorem ipsum <span>dolor</span> sit amet consectetur.</p>
            <p className="small_text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi illo accusamus, deserunt laborum eos provident hic blanditiis dolorem, magnam perferendis corrupti, beatae velit vero quos? Magnam rerum aut earum tempore.</p>
          </div>
        </div>
        <div className="right">
          <div className='column' style={{ marginTop: '20px' }}>
            <div className='row'>
              <div className="service_item">
                <div className="icon_box">
                  <img src={markhorlogo} alt="" />
                </div>
                <h4>Website Development</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
              </div>
            </div>
            <div className='row'>
              <div className="service_item">
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
              <div className="service_item">
                <div className="icon_box">
                  <img src={markhorlogo} alt="" />
                </div>
                <h4>Website Development</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
              </div>
            </div>
            <div className='row'>
              <div className="service_item">
                <div className="icon_box">
                  <img src={markhorlogo} alt="" />
                </div>
                <h4>Website Development</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services
