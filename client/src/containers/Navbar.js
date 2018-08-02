import React, {Component} from "react";
import {Link} from "react-router-dom";
import profile from '../images/profile.JPG';
import NavLink from '../components/NavLink';


class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      links: [
        {path: "/", text: "Home", isActive: false},
        {path: "/about", text: "About", isActive: false},
        {path: "/projects", text: "Projects", isActive: false}
      ]
    }
  }

  componentDidMount() {
    const links = this.state.links.map(link => {
      link.isActive = link.path === window.location.pathname;
      return link;
    });
    this.setState({links});
  }

  handleClick(i) {
    const links = this.state.links.map((link, j) => {
      link.isActive = i === j;
      return link;
    });
    this.setState({links});
  }

  brandClick() {
    const links = this.state.links.map((link, j) => {
      link.isActive = j === 0;
      return link;
    });
    this.setState({links});
  }

	render(){
		return(
			<nav className="navbar navbar-expand-sm navbar-dark bg-dark">
				<Link to="/" className="navbar-brand" onClick={() => this.brandClick()}>
					<img src={profile} alt="Lauren Weaver" height="40px" width="40px" style={{borderRadius: 100}} />
				</Link>
			  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
			    <span className="navbar-toggler-icon"></span>
			  </button>

			  <div className="collapse navbar-collapse" id="navbarSupportedContent">
			    <ul className="navbar-nav mr-auto">
            {this.state.links.map((link, i) =>
              <NavLink 
                path={link.path}
                text={link.text}
                isActive={link.isActive}
                key={link.path}
                onClick={() => this.handleClick(i)}
              />
            )}
			    </ul>

			  </div>

			</nav>
		)
	}
}


export default Navbar;

