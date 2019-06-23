import React from 'react';
import logo from './scooter.jpg';


class ScooterLogo extends React.Component {

	makeLogoSpin() {
		console.log('SPIIIINNN!');
		const Spin = this.state.className === 'scooter__logo yes__spin' ? 'scooter__logo not__spin' : 'scooter__logo yes__spin';
		this.setState({ className: Spin });
	}	

	constructor(props) {
		super(props);
		this.state = {
			className:'scooter__logo not__spin',
			voteType: 'save-or-not'
		};
		this.makeLogoSpin = this.makeLogoSpin.bind(this);
	}
	render() {
		return (
			<div className={this.state.className} onClick={this.makeLogoSpin}>
			<img src={logo} className="logo-img" alt="scooter" />
			<div>{this.state.voteType}</div>
			</div>
			)
	}
};


export default ScooterLogo;



