import React from 'react';
import Todo from './Todo.js'

class TodoList extends React.Component {
	render() {
		return (
			<ul> 
			{this.props.taski.map(cokolwiek => 			
				<Todo text={cokolwiek.text} key={cokolwiek.id} remove={cokolwiek.remove}/>
			)}
			 
			</ul>
		)
	}
}

export default TodoList;

