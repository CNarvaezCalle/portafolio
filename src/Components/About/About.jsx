import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
//import profile_img from '../../assets/about_profile.svg'

const About = () => {
  return (
    <div id='about' className='about'>
      <div className="about-title">
        <h1>About me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left">
          {/*<img src={profile_img} alt="" />*/}
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>I am a passionate web developer committed to expanding my knowledge and expertise.</p>
            <p>Driven by a curiosity to explore new technologies and improve my craft.</p>
          </div>
          <div className="about-skills">
            <div className="about-skill"><p>HTML & CSS</p><hr style={{width: "50%"}} /></div>
            <div className="about-skill"><p>React JS</p><hr style={{width: "70%"}} /></div>
            <div className="about-skill"><p>JavaScript</p><hr style={{width: "60%"}} /></div>
            <div className="about-skill"><p>Node JS</p><hr style={{width: "50%"}} /></div>
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>ACADEMLO</h1>
          <p>STUDENT</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>6+</h1>
          <p>PROJECTS COMPLETED</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>FULL STACK</h1>
          <p>TITLE</p>
        </div>
      </div>
    </div>
  )
}

export default About