import React from 'react'
import '../styles/Projects.css'
import markhorlogo from '../static/images/Markhorblack.png'

const Projects = () => {
  return (
    <div className='Projects_box' id='projects'>
      <div className='projects_internal'>
        <div className="left">
          <div className="text_box">
            <p className="services_text">See</p>
            <p className="bold_text">See my <span>Work</span> that surprise you.</p>
            <p className="small_text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi illo accusamus, deserunt laborum eos provident hic blanditiis dolorem, magnam perferendis corrupti, beatae velit vero quos? Magnam rerum aut earum tempore.</p>
          </div>
        </div>
        <div className="right">
          <div className='pro_items'>
          <div className="pro_item">
              <img src={markhorlogo} alt="" />
              <h1>Website Development</h1>
            </div>            <div className="pro_item">
              <img src={markhorlogo} alt="" />
              <h1>Website Development</h1>
            </div>            <div className="pro_item">
              <img src={markhorlogo} alt="" />
              <h1>Website Development</h1>
            </div>            <div className="pro_item">
              <img src={markhorlogo} alt="" />
              <h1>Website Development</h1>
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
