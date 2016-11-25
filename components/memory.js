import React from 'react';
import ReactDOM from 'react-dom';

import {route, alloc, dealloc, open, getMemory} from '../core/alloc';

class Memory extends React.Component{
	constructor(props, context){
		super(props, context);

		var space = new Array(379);
		space = route();

		this.state = {
			memory: space,
			order : 7,
			deas  : 0
		}
	}

	course(){
		var i = this.state.order;
		console.log(i);

		if(i < 17){
			if(i == 11 && this.state.deas != 1){
				dealloc(9);
				i--;
				this.setState({deas: 1});
			}else if (i == 15 && this.state.deas != 2){
				dealloc(11);
				i--;
				this.setState({deas: 2});
			}else{
				var result = alloc(open[i - 7]);
				this.setState({memory: getMemory()});
			}

		}else if(i == 17){
			alloc(25);
			this.setState({memory: getMemory()});
		}else{
			alert('acabou');
		}

		i++;
		this.setState({order: i});
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