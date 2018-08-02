import React, {Component} from "react";
import Project from '../components/Project';
import YelpCamp from '../images/yelpcamp.png';
import Warbler from  '../images/warbler.png';

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projectList: [
        {title: 'YelpCamp', 
        getDescription: () => <p className='card-text font-weight-light'>YelpCamp is a project from&nbsp;
          <a className="card-link text-secondary font-weight-normal" href='https://www.udemy.com/the-web-developer-bootcamp/'>
            The Web Developer Bootcamp on Udemy
          </a>. 
          Similar to Yelp, but for campsites. Users can post new campsites and add comments to campsites. A user can edit their content, but other users cannot. 
          This Node project uses Express, EJS, MongoDB, Mongoose, Passport, body-parser, and Bootstrap.
        </p>, 
        image: YelpCamp, 
        path: 'https://sheltered-thicket-36432.herokuapp.com/'},
        {title: 'Warbler', 
        getDescription: () => <p className='card-text font-weight-light'>An imitation of Twitter, part of&nbsp;
          <a className="card-link text-secondary font-weight-normal" href='https://www.udemy.com/the-advanced-web-developer-bootcamp/'>
            The Advanced Web Developer Bootcamp on Udemy
          </a>
          . Technologies include React, Redux, and Axios on the frontend. The backend uses Node.js, Express, MongoDB, Mongoose, and authentication with bcrypt and JWT. Currently only the front end is deployed in production, back end coming soon.
        </p>, 
        image: Warbler, 
        path: 'https://warbler-client-lw.herokuapp.com/'}
      ]
    }
  }

  render() {
    return (
      <div className="pt-4">
        <div className="card-deck">
          {this.state.projectList.map((project, i) =>
            <Project
              title={project.title}
              getDescription={project.getDescription}
              image={project.image}
              path={project.path}
              key={project.title}
            />
          )}
        </div>
      </div>
    )
  }
}

export default Projects;