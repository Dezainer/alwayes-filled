import React from 'react';
import ReactDOM from 'react-dom';

class Terminal extends React.Component{
	constructor(props, context){
		super(props, context);

		this.state = {
			history:[]
		}
	}

	render(){

		var History = this.state.history.map(function (hist) {
			if(hist != ""){
				return(
					<div className="history">
						<ul>
							<li>{hist}</li>
						</ul>
					</div>
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
					{History}
					<div className="input">
						<p>user@pc:~$</p>
						<input name="input" onKeyPress={() => this.call(event)}></input>
					</div>
				</div>
			</div>
		);
	}

	call(event){
		console.log(event.wich);
	}
}

ReactDOM.render(
	<Terminal/>,
	document.getElementById('terminal')	
);