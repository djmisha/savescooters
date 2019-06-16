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
 handleClick() {
    console.log('You Have Voted!');
  }	
 
  render() {

  	const theButtons = VoteTypes.map((vote, i) => {
	 	return (
  			<button onClick={this.handleClick} key={'yourVote_' + i} text={vote.text} color={vote.color} >
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
	render() {
	  
	  	let myVote;
	  	if (this.props.color === "red") {
	  		myVote = "You have voted"
	  	}
	  	else {
	  		myVote = "Vote now!"
	  	}

		return (
   	    	<div className="vote__counter">{myVote}</div>
		)
	}
}



