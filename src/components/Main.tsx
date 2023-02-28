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
    tasks: [
      'Make coffee',
      'Drink water',
      'Study'
    ]
  };

  updateState = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ newTask: e.target.value });
  }
  render() {
    const { newTask, tasks } = this.state

    return(
      <div className='main'>
        <h1>To-do List</h1>

        <form action='#' className='task-form'>
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
          {tasks.map(task => (
            <li key = {task}>
              {task}
              <div>
                <FaEdit className='edit'/>
                <FaWindowClose className='delete'/>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
