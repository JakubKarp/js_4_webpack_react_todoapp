import React from 'react';
import style from './TodoForm.css'


class TodoForm extends React.Component {
	constructor(props){
        super(props);
		this.state = {
			oneTask: ''
	}
}
	
handleFormSubmit(event) {
	event.preventDefault();
	this.props.addTasky(this.state.oneTask)
}	
	
	
change(e) {
	this.setState({
		oneTask: e.target.value
	})
}    

  

	
	render() {
		return (
			<form className={style.TodoForm} onSubmit={this.handleFormSubmit}>
				<input type="text" placeholder='Nowe zadanie' onChange={this.change} value={this.state.oneTask} className={style.TodoFormInput} />
				<button className={style.TodoFormButton} type="submit">Dodaj</button>
				
			</form>
		)
	}
}

export default TodoForm;