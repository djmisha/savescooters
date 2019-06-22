import React from 'react';

const VoteTypes = [
	 {
		value: true,
		text: 'Yes',
		color: 'green',
	},
	{
		value: false,
		text: 'No',
		color: 'red',
	}
]


export class VotingChoices extends React.Component {
 makeVoteHappen() {
    console.log('You Have Voted!');

    const Vote = this.state.className === 'not__pressed' ? 'yes__pressed' : 'not__pressed';

    this.setState({ className: Vote });

    console.log(this.props.key);

  }	

  constructor(props) {
  	super(props);
  	this.state = {className:'not__pressed'};
  	this.makeVoteHappen = this.makeVoteHappen.bind(this);
  }
 
  render() {

  	const theButtons = VoteTypes.map((vote, i) => {
	 	return (
  			<button className={this.state.className} onClick={this.makeVoteHappen} key={'yourVote_' + i} text={vote.text} color={vote.color} >
	      		{vote.text}
		    </button>
		)
  	})
  	
    return (
    	<div>
		    <div className="vote__buttons">{theButtons}</div>
    	</div>
    );
  }
}



export class VoteCounter extends React.Component {
	
	constructor(props) {
	    super(props);
	    this.state = { text: 'Vote Now!'}
	  }

	render() {
	  
		return (
   	    	<div className="vote__counter">{this.state.text}</div>
		)
	}
}



