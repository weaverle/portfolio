import React, {Component} from "react";

class Project extends Component {
  render() {
    const {title, getDescription, image, path} = this.props;
    return (
      <div className="card text-secondary">
        <div className="card-block">
          <img className="card-img-top" src={image} alt={title} />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            {getDescription()}
            <a href={path} className="btn btn-secondary">View Project</a>
          </div>
        </div>
      </div>
    );
  }
}

export default Project;