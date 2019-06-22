import React from 'react';
import logo from './scooter.jpg';


class ScooterLogo extends React.Component {

	makeLogoSpin() {
	   console.log('SPIIIINNN!');
	   const Spin = this.state.className === 'yes__spin' ? 'not__spin' : 'yes__spin';
	   this.setState({ className: Spin });
	 }	

  constructor(props) {
  	super(props);
  	this.state = {className:'not__spin'};
  	this.makeLogoSpin = this.makeLogoSpin.bind(this);
  }
  render() {
    return (
    	<div className={this.state.className} onClick={this.makeLogoSpin}>
		    <img src={logo} className="logo-img" alt="scooter" />
	    </div>
    	)
  }
};


export default ScooterLogo;



