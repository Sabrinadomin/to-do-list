import { Component } from 'react';
import { FaEdit, FaPlus, FaWindowClose } from 'react-icons/fa';
import './Main.css';

interface State {
  newTask: string
  tasks: string[]
}
export default class Main extends Component<{}, State> {
  state = {
    newTask: '',
    tasks: [''],
  };

  updateState = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ newTask: e.target.value });
  }

  handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { tasks } = this.state;
    let { newTask } = this.state;
    newTask = newTask.trim();
    if (newTask && !tasks.includes(newTask)) {
      this.setState({ tasks: [...tasks, newTask], newTask: '' })
    }
  }

  deleteTask = (e: React.MouseEvent<SVGElement, MouseEvent>, index: number) => {
    const { tasks } = this.state;
    const newTasks = [...tasks]

    newTasks.splice(index, 1)

    this.setState({
      tasks: [...newTasks]
    })
  }

  editTask = (e: React.MouseEvent<SVGElement, MouseEvent>, index: number) => {

  }

  createTaskLi(task: string, index: number) {
    if(task !== '') {
      return <li key = {task}>
      {task}
      <span>
        <FaEdit
          onClick={ (e) => this.editTask(e, index) }
          className='edit'
        />

        <FaWindowClose
          onClick={ (e) => this.deleteTask(e, index) }
          className='delete'
        />

      </span>
    </li>
    }
    else {
      return
    }
  }

  render() {
    const { newTask, tasks } = this.state

    return(
      <div className='main'>
        <h1>To-do List</h1>

        <form  onSubmit={this.handleSubmit} action='#' className='task-form'>
          <input
            onChange= {this.updateState}
            type='text'
            value={newTask}
          />
          <button type='submit'>
            <FaPlus/>
          </button>
        </form>

        <ul className='tasks'>
          {tasks.map((task, index) => (this.createTaskLi(task, index)))}
        </ul>
      </div>
    );
  }
}
