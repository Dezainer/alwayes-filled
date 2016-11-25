import React from 'react';
import ReactDOM from 'react-dom';

import {route, initiate} from '../core/alloc';

class Memory extends React.Component{
	constructor(props, context){
		super(props, context);

		var space = new Array(379);
		space = route();

		this.state = {
			memory: space
		}
	}

	course(){
		this.setState({memory: initiate()});
	}

	render(){

		var spaces = this.state.memory.map(function (m, index) {
			return(
				<li key={index}>{m}</li>	
			);
		});

		return(
			<div>
				<div className="memory">
					<ul>
						{spaces}
					</ul>
				</div>
				<button onClick={() => this.course()}>Iniciar</button>
			</div>
		);
	}
}

ReactDOM.render(
	<Memory/>,
	document.getElementById('memory')
);