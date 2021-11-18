import React, { Component } from 'react';
import AddTask from './AddTask';
import TaskList from './TaskList'
import './App.css';


class App extends Component {
  state = {
    tasks: [
      {
        id: 1,
        text: "Do some shopping",
        date: '2021-11-18',
        important: true,
        active: true,
        finishDate: null
      },
      {
        id: 2,
        text: "Wash the car",
        date: '2021-11-20',
        important: true,
        active: true,
        finishDate: null
      },
      {
        id: 3,
        text: "Read a book",
        date: '2021-12-30',
        important: false,
        active: true,
        finishDate: null
      },
      {
        id: 4,
        text: "Visit a friend",
        date: '2021-11-25',
        important: false,
        active: true,
        finishDate: null
      },
      {
        id: 5,
        text: "Go to the gym",
        date: '2021-11-16',
        important: true,
        active: true,
        finishDate: null
      },
      {
        id: 6,
        text: "Prepare a project",
        date: '2021-11-18',
        important: true,
        active: true,
        finishDate: null
      },
      {
        id: 7,
        text: "Listen to a new record",
        date: '2021-11-18',
        important: true,
        active: true,
        finishDate: null
      },
      {
        id: 8,
        text: "Rob a bank",
        date: '2021-11-18',
        important: true,
        active: true,
        finishDate: null
      },
    ]
  }

  deleteTask = (id) => {

    const tasks = [...this.state.tasks];
    const index = tasks.findIndex(task => task.id === id);
    tasks.splice(index, 1);

    // Option 2:
    /* let tasks = [...this.state.tasks];
    tasks.filter(task => task.id !== id);
    console.log(tasks); */

    this.setState({
      tasks
    })
  }

  changeTaskStatus = (id) => {
    const tasks = [...this.state.tasks];
    tasks.forEach(task => {
      if (task.id === id) {
        task.active = false;
        task.finishDate = new Date().getTime();
      }
    });
    this.setState({
      tasks
    })

  }

  addTask = (text, date, important) => {
    const nextId = this.state.tasks.length + 1;
    const task = {
      id: nextId,
      text: text,
      date: date,
      important: important,
      active: true,
      finishDate: null
    }
    console.log(task);
    this.setState(prevState => ({
      tasks: [...prevState.tasks, task]
    }))

    return true;

  }

  render() {
    return (
      <div className="App">
        <h1>To Do App</h1>

        <AddTask add={this.addTask} />
        <hr />
        <TaskList tasks={this.state.tasks} delete={this.deleteTask} change={this.changeTaskStatus} />
      </div>
    );
  }
}

export default App;
