import React from 'react';
import Todo from './Todo.js'

class TodoList extends React.Component {
	render() {
		return (
			<ul> 
			{this.props.taski.map(cokolwiek => 			
				<Todo text={cokolwiek.text} id={cokolwiek.id} remove={cokolwiek.remove}/>
			)}
			 
			</ul>
		)
	}
}

export default TodoList;

/*
//ale
// komponent prezentacyjny
import React from 'react';
import style from './TodoList.css'; // stylowanie
import Todo from './Todo'; // importowanie listy + przycisku usuwającego item

const TodoList = props => {
// tworzenie poszczególnych elementów listy
    const todoListItems = props.data.map(item => <Todo key={item.id} id={item.id} todo={item.text} remove={props.remove}/>)
    return (
        <ul className={style.TodoList}>{todoListItems}</ul>
    )
}

export default TodoList;*/