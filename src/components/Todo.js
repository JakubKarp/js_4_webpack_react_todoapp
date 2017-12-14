import React from 'react';
import style from './Todo.css'


class Todo extends React.Component {

handleClick(ev) {
	ev.preventDefault();
	this.props.remove(this.props.id);
    }
	
	render() {
		return (
			<li  className={style.liTodo} >
				<p>{this.props.text}
				<button type="submit" className={style.liButton} onClick={ev => this.handleClick(ev)}>Zrobione</button>
			
				</p>
			</li>
		)
	}
	
}

export default Todo;

