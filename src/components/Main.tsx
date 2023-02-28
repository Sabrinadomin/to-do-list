import { Component } from 'react';

interface State {
  newTask: string
}
export default class Main extends Component<{}, State> {
  state = {
    newTask: ''
  };

  updateState = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ newTask: e.target.value })
  }
  render() {
    const { newTask } = this.state

    return(
      <div className='main'>
        <h1>To-do List</h1>

        <form action='#'>
          <input onChange= {this.updateState} type='text'/>
          <button type='submit'>Send</button>
        </form>

        <p>{newTask}</p>
      </div>
    );
  }
}
