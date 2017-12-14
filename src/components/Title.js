import React from 'react';
import style from './Title.css';

class Title extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			taskCounter: 0
		}
	}
	
	
	render() {
		return (
			<div className={style.divTitle}>
				<h1 className={style.h1Title}>APLIKACJA</h1>
				<p className={style.pTitle}>Liczba zadań: <span>{this.props.taskCounter}</span> </p> 
			</div>
		)
	}
}

export default Title;


