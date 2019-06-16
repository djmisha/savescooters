import React from 'react';
import logo from './scooter.jpg';


class ScooterLogo extends React.Component {
  render() {
    return (
    	<div className="scooter__logo">
		    <img src={logo} className="logo-img" alt="logo" />
	    </div>
    	)
  }
};


export default ScooterLogo;



