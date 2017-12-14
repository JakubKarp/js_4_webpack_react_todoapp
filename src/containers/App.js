import React from 'react';
import uuid from 'uuid'
import style from './App.css';
import Title from '../components/Title';
import TodoList from '../components/TodoList';
import TodoForm from '../components/TodoForm';

class App extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      tasky: []
    };
    
    this.tasksNumber = this.state.tasky.length;

    this.removeTodo = this.removeTodo.bind(this);
  }
	
	
  addTodo({text}) {
    const tasky = [{
  		text,
  		id: uuid.v4()
  	}, ...this.state.tasky]
    
    this.setState({
      tasky
    });
  }
	
  removeTodo(id) {
    console.log('[app.js] id taks that will be removed', id)

    const remainder = this.state.tasky.filter(tasky => tasky.id !== id);
    
    this.setState({
      tasky: remainder
    });

  }

	
	
render() {
	return (
		<div>
			<Title taskCounter={this.tasksNumber}/>
			<div className={style.TodoApp}>
				<TodoList taski={this.state.tasky} remove={this.removeTodo} />
				<TodoForm addTasky={newTasky => this.addTodo(newTasky)}/>
			</div>
		</div>
		)
	}
}




export default App;


