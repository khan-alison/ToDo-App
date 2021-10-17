import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Todo from './components/Todo'
import Layout from './components/Layout'

interface IAppProps{
  // data:string;
}

interface IAppState{
  arrTodo:IObject[]
}

interface IObject{
  value:string;
  done:boolean
}

class MainPage extends Component<IAppProps,IAppState> {
    constructor(props:IAppProps) {
        super(props);
        this.state = {
            arrTodo:[]
        }
    }


  onAddNewTask =  (data:string) => {
    const cloneArrTodo:IObject[] = [...this.state.arrTodo]
    cloneArrTodo.push({
      value: data,
      done:false
    }
      )
    this.setState({arrTodo:cloneArrTodo})
  }

  onDelete = (index:number)=>{
    const cloneArrTodo:IObject[] = [...this.state.arrTodo]
    cloneArrTodo.splice(index, 1)
    this.setState({arrTodo:cloneArrTodo})
  }

  onChangeState = (index:number)=>{
    const cloneArrTodo:IObject[] = [...this.state.arrTodo]
    cloneArrTodo[index].done = !cloneArrTodo[index].done
    this.setState({arrTodo:cloneArrTodo})
  }
  render() {
    const {arrTodo} = this.state

    return (
      <div className="app"> 
        <div className="container">
            <h1>Todo</h1>
        <Layout onAddTask={this.onAddNewTask}/>
        <ul>{
            arrTodo && arrTodo.length && 
            arrTodo.map((todo,index) => {
                return(
                    <Todo key={index + 'taskName'} index={index} taskName={todo.value} done={todo.done} 
                    onDelete={()=>{this.onDelete(index)}} onChangeStatus={()=>this.onChangeState(index)}/>
                )
            })
        }</ul>
        </div>
      </div>
    )
  }
}

export default MainPage;
