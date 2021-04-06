import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AppNavbar from './components/AppNavbar';
import TaskList from './components/TaskList';
import TaskModal from './components/TaskModal';
import {Provider} from 'react-redux';
import {Container} from 'reactstrap';
import store from './store';

 class App extends Component {

   render(){

     return (
      <Provider store={store}>
        <div className="App">
          <AppNavbar/>
          <Container>
             <TaskList/>
              <TaskModal/>
          </Container>
      </div>
      </Provider>
    );

   }
  
}

export default App;
