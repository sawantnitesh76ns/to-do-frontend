
import './App.css';
import React,{Component} from 'react'
import TodoLogin from './Components/todo/TodoApp'
import './bootstrap.css'
class App extends Component {
  render(){
    return (
      <div className="App">
        <TodoLogin></TodoLogin>
      </div>
    );

  }
  
}

export default App;
