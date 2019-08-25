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

    const myVote = this.state.className === 'not__pressed' ? 'yes__pressed' : 'not__pressed';

    const myColor = this.state.color === 'green' ? 'red' : 'green';

    this.setState({ className: myVote, color: myColor });

    console.log(this.props.key);

  }	

  constructor(props) {
  	super(props);
  	this.state = {
  		className:'not__pressed',
  		color: 'gray',
	 };
  	this.makeVoteHappen = this.makeVoteHappen.bind(this);
  }
 
  render() {

  	const theButtons = VoteTypes.map((vote, i) => {
	 	return (
  			<button className={this.state.className} onClick={this.makeVoteHappen} key={'yourVote_' + i} text={vote.text} style={{background: this.state.color}} >
	      		{vote.text}-{vote.color}
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



