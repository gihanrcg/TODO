import React, { Component } from 'react';
import Todos from './components/Todos';
import Header from './components/layouts/Header';
import AddTodo from './components/AddToDo';
import uuid from 'uuid';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import About from './components/pages/about'
import './App.css';
import Axios from 'axios';

class App extends Component {

  state = {
    todos: []
  }

  componentDidMount() {
    Axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
    .then(res => this.setState({
      todos:res.data
    }));
  }

  markComplete = (id) => {

    this.setState({
      todos: this.state.todos.map(todo => {

        if (todo.id === id) {
          todo.isCompleted = !todo.isCompleted;
        }
        return todo;

      })
    })
  }

  delTodo = (id) => {
    this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] });
  }

  AddTodo = (title) => {
    const newTodo = {
      id: uuid.v4(),
      title: title,
      isCompleted: false
    }

    this.setState({ todos: [...this.state.todos, newTodo] })
  }

  render() {
    return (
      <Router>
        <div className="App">
       
          <div className="container">
          <Header/> 
            <Route exact path="/" render = {props => (
              <React.Fragment>
                <AddTodo AddTodo={this.AddTodo} />
                <div style={{ width: '40%', marginLeft: '30%' }}>
                  <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo} />
                </div>
              </React.Fragment>
            )} />

            <Route path="/about" component={About} />


          </div>
        </div>
      </Router>
    );
  }
}
export default App;
