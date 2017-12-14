import React from 'react';
import style from './Todo.css'


class Todo extends React.Component {

	handleClick(ev, id) {
		ev.preventDefault();
		this.props.remove(id);
  }
	
	render() {
		console.log('what to render', this.props)
		return (
			<li className={style.liTodo} >
				<p>{this.props.task.text}
					<button type="submit" className={style.liButton} onClick={ev => this.handleClick(ev, this.props.task.id)}>Zrobione</button>
				</p>
			</li>
		)
	}
	
}

export default Todo;

