import React from 'react';
import {Switch, Route, withRouter} from "react-router-dom";
import Homepage from "../components/Homepage";
import About from "../components/About";

const Main = () => {
	return(
		<div className="container">
      <Switch>
        <Route exact path="/" render={() => <Homepage />} />
        <Route exact path="/about" render={() => <About />} />
      </Switch>
		</div>
	)
}

export default withRouter(Main);