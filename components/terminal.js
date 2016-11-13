import React from 'react';
import ReactDOM from 'react-dom';

import $ from 'jquery';

class Terminal extends React.Component{
	constructor(props, context){
		super(props, context);

		this.state = {
			history:[]
		}
	}

	render(){

		var History = this.state.history.map(function (hist, i) {
			if(hist != ""){
				return(
					<li key={i}>{hist}</li>
				);
			}
		});

		return(
			<div className="terminal">
				<div className="header">
					<h2>Terminal</h2>
					<div className="buttons">
						<div className="wbutton" id="close"></div>
						<div className="wbutton" id="max"></div>
						<div className="wbutton" id="min"></div>
					</div>
				</div>
				<div className="content">
					<div className="history">
						<ul>
							{History}
						</ul>
					</div>
					<div className="input">
						<p>user@pc:~$</p>
						<input name="input" onKeyUp={this.command.bind(this)}></input>
					</div>
				</div>
			</div>
		);
	}

	command(event){
		if(event.keyCode == 13){
			var history = this.state.history;
			var command = event.target.value;

			history.push(command);
			this.setState({history: history});
			
			event.target.value = "";
			
			try {
				eval('this.'+command+'()');
			}
			catch(err){
				var history = this.state.history;

				var log = ("Command: "+command+" not found");
				history.push(log);

				this.setState({history: history});
			}
		}
	}

	clear(){
		this.setState({history: []});
	}
}

ReactDOM.render(
	<Terminal/>,
	document.getElementById('terminal')	
);