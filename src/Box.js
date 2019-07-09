import React, { Component } from 'react';
import { generateColor } from './helpers';
import './Box.css';

class Box extends Component {
	constructor(props) {
		super(props);
		this.state = {
			color: this.props.color
		}
		this.changeColor = this.changeColor.bind(this);
	}
	changeColor(e) {
		const div = e.currentTarget;
		div.style.backgroundColor = generateColor();
	}
	render() {
		return (
			<div className="Box" onClick={this.changeColor} style={{backgroundColor: this.state.color}}></div>
		)
	}
}

export default Box;