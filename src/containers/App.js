import React from 'react';
import uuid from 'uuid'
import style from './App.css';
import Title from '../components/Title';
import TodoList from '../components/TodoList';
import TodoForm from '../components/TodoForm';




class App extends React.Component {
	constructor(props){
        super(props);
		this.state = {
			tasky: [
				{
					text: 'val',
					id: uuid.v4()        
				},
				{
					text: 'val2',
					id: uuid.v4() 

				},
				{
					text: 'vzzwdzl2',
					id: uuid.v4()
				}
			]
		};
		this.tasksNumber = this.state.tasky.length;
	}
	
addTodo(val){
        const newTasky = {
            text: val,
            id: uuid.v4(),
        };
        const tasky = [...this.state.tasky, newTasky];
        this.setState({tasky});
    }
	
removeTodo(id) {
        const remainder = this.state.tasky.filter(newTasky => newTasky.id !== id);
        this.setState({tasky: remainder});
    }	
	
	
render() {
	return (
		<div>
			<Title taskCounter={this.tasksNumber}/>
			<div className={style.TodoApp}>
				<TodoList taski={this.state.tasky} remove={this.removeTodo.bind(this)} addTasky={this.addTodo} />
				<TodoForm />
			</div>
			
		</div>
		)
	}
}




export default App;

/*

//ale

// kontener
import React from 'react';
import uuid from 'uuid'; // import biblioteki uuid - tworzenie unikatowych wartości dla klucza id
import style from './App.css'; // stylowanie App
import Title from '../components/Title'; // import komponentu prezentacyjnego - nagłówek + licznik zadań
import TodoList from '../components/TodoList'; // import komponentu prezentacyjnego z listą zadań

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = { // przykładowe dane - lista zadań
            data: [
                {id: 1,
                text: 'Clean the room'
                }, {
                id: 2,
                text: 'Wash the dishes'
                }, {
                id: 3,
                text: 'Feed my cat'
                }]
        };
    }
    addTodo(val){
        const todo = {
            text: val,
            id: uuid.v4(),
        };
        const data = [...this.state.data, todo];
        this.setState({data});
    }

    removeTodo(id) {
        const remainder = this.state.data.filter(todo => todo.id !== id);
        this.setState({data: remainder});
    }

    render() {
        return (
            <div className={style.TodoApp}>
                <Title title = "My list" number={this.state.data.length} />
                <TodoList remove={this.removeTodo.bind(this)} data={this.state.data} />
            </div>
        );
    }
}

export default App;

*/


