import React from 'react';
import style from './Todo.css'


class Todo extends React.Component {
	render() {
		return (
			<li  className={style.liTodo}>
				<p>{this.props.text}
				<button type="submit" className={style.liButton} onClick={event => this.handleClick()}>Zrobione</button>
			
				</p>
			</li>
		)
	}
	handleClick(event) {
        this.props.remove(this.props.id);
    }
}

export default Todo;


/*//ale
import React from 'react';
import style from './Todo.css'; // stylowanie

class Todo extends React.Component {
    constructor(props) {
        super(props);
    }

    // renderowanie listy - tytuł zadania z Todo oraz przycisk usuwający zadanie
    render() {
        return (
            <li className={style.Todo}>
                {this.props.todo} 
                <button onClick={event => this.handleClick()}>Remove</button>
            </li>
        )
    }

    // podpięcie handlera dla przycisku usuwającego zadanie
    handleClick(event) {
        this.props.remove(this.props.id);
    }
}

// wyeksportowanie na potrzeby TodoList.js
export default Todo;*/