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


/*
//ale
// komponent prezentacyjny
import React from 'react';
import style from './Title.css';

const Title = props => {
// forma zapisu nagłówka - tytuł + liczba zadań + wartość tej liczby
	return (
			<div className={style.Title}>
			<h1>{props.title}</h1>
			<div><p>Number of items:</p> {props.number}</div>
			</div>
			);
}

// wyeksportowanie na potrzeby App.js
export default Title;*/