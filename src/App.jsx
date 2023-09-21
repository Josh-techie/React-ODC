import React, { Component } from 'react';
import ReactDOM from 'react-dom';

//Compostant enfant qui affiche ine liste des tâches
class TaskList extends Component {
  render (){
   const {tasks, onDeleteTask} = this.props; 
  return (
    <ul>
      {
      tasks.map((task, index) => 
      (<li key={index}>
        {task}
        <button class="ml-3 bg-red-100" onClick={()=>onDeleteTask(index)}>Supprimer</button>
      </li>
      ))}
    </ul>);
  }
}

//Compasant parent qui gére liste de tâche
class App extends Component {
  constructor (props){
    super(props);
    this.state = {
      tasks: ['Tâche 1','Tâche 2','Tâche 3','Tâche 4', 'Tâche 5'],
    };
  }
  
 
  handleDeleteTask = (index) => {
    // Supprimer une tâche de la liste
    const updatedTasks = this.state.tasks.slice();
    updatedTasks.splice(index, 1);
    this.setState({ tasks: updatedTasks }); // Corrected the property name to 'tasks'
  };

  render (){
    return (
      <div class="ml-4">
        <br></br>
        <h2> <b> Liste de Tâches</b></h2><br></br>
        <TaskList tasks={this.state.tasks} onDeleteTask={this.handleDeleteTask} />
      </div>
    );
  }   
}

export default App

ReactDOM.render(<App />, document.getElementById('root'));