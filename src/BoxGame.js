import React, { Component } from 'react';
import { generateColor } from './helpers';
import Box from './Box';
import './BoxGame.css';

class BoxGame extends Component {
	static defaultProps= {
		quantity: 9
	}
	constructor(props) {
		super(props);
		this.state = {
			colors: Array.from({length: this.props.quantity})
		}
		this.generateInitialColors = this.generateInitialColors.bind(this);
		this.handleClick = this.handleClick.bind(this);
	}
	generateInitialColors() {		
		this.setState(currentState => ({
			colors: currentState.colors.map(
				color => generateColor()
			)
		}))
	}
	handleClick() {
		this.generateInitialColors();
	}
	render() {
		return (
			<div className="BoxGame">
				{ this.state.colors[0] 
				? this.state.colors.map(color => <Box onClick={this.changeColor} color={color} />) 
				: <button onClick={this.handleClick}>Comenzar</button> }
			</div>
		)
	}
}

export default BoxGame;