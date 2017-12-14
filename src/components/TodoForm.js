import React from 'react';
import style from './TodoForm.css'


class TodoForm extends React.Component {
	constructor(props){
        super(props);
		this.state = {
			text: ''
	}
}
	
	handleSubmit(e) {
		e.preventDefault();
		const newTasky = {
			text: this.state.text
		};
		this.props.addTasky(newTasky);
		this.setState({text: ''});
	}

	changeHandler(e) {
		this.setState({text: e.target.value});  
	}
  

	
	render() {
		return (
			<form className={style.TodoForm} onSubmit={e => this.handleSubmit(e)}>
				
				<input 
					type="text" 
					placeholder='Nowe zadanie' 
					className={style.TodoFormInput} 
					onChange={e => this.changeHandler(e)}
					value={this.state.text} 
				/>
				
				<button className={style.TodoFormButton} type="submit">Dodaj</button>
				
			</form>
		)
	}
}

export default TodoForm;