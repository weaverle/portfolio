import React from 'react';
import profile from '../images/profile.JPG';

const About = () => {
	return(
		<div className="about">
      <div className="py-lg-5">
        <div className="row">
          <div className="col-md pb-3">
            <img src={profile} alt="Lauren Weaver" height="100px" width="100px" style={{borderRadius: 100}} />
          </div>
          <div className="col-md-10 px-lg-5">
            <h3>About Me</h3>
            
            <p>
              I am passionate about learning new things, and in tech there is always something to learn. My latest endeavor into web programming includes JavaScript, Node, React, MongoDB, along with many other tools and technologies.
            </p>
            <p>
              I have an engineering background with a B.S. in Chemical Engineering from the University of Colorado at Boulder and 10+ years working as a LabVIEW programmer. LabVIEW is a software language used primarily in industrial and laboratory environments. Beyond my engineering skills I have strong communication skills and the ability to organize and manage projects. I am hard-working with attention to detail and the perseverance to work through problems and get things done.
            </p>
            <p>
              Located in the Denver area, I love being outdoors and enjoying the mountains. I am also passionate about volunteering and working to improve the lives of others.
            </p>

          </div>
        </div>
      </div>
    </div>
	)
}

export default About;