import React from 'react';
import Todo from './Todo.js'

class TodoList extends React.Component {
	render() {
		return (
			<ul> 
			{this.props.taski.map((cokolwiek) => 			
				<Todo key={cokolwiek.id} task={cokolwiek} remove={this.props.remove}/>
			)}
			</ul>
		)
	}
}

export default TodoList;

