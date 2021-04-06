import React, { Component } from 'react';
import { Container , Button ,  ListGroup, ListGroupItem } from 'reactstrap';
import {TransitionGroup , CSSTransition} from 'react-transition-group';
import {connect } from 'react-redux';
import {getTasks , deleteTask} from '../actions/taskActions';
import PropTypes from 'prop-types';



class TaskList extends Component {

  componentDidMount(){
    this.props.getTasks();
  }

  deleteClicked = (id) => {
    this.props.deleteTask(id);
    }
  


    render() { 
        const{tasks} = this.props.task
        return ( 
            <Container>
               <ListGroup>
                    <TransitionGroup>
                      {tasks.map(({_id, name}) => (
                        <CSSTransition 
                          key={_id} 
                          timeout={500} 
                          classNames="task">
                            <ListGroupItem style ={{background: "yellow"}}  >
                                <Button  
                                 className = "remove"
                                 color="danger"
                                 size ="sm"
                                 onClick = {this.deleteClicked.bind(this ,_id)}
                                 > &times;
                                </Button>
                                {name}
                            </ListGroupItem> 
                        </CSSTransition>
                      ))}
                    </TransitionGroup>
                </ListGroup>
                
            </Container>
            

         );
    }
};
TaskList.propTypes = {
  getTasks : PropTypes.func.isRequired , 
  deleteTask : PropTypes.func.isRequired , 
  task : PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  task : state.task
});
 
export default connect(mapStateToProps, {getTasks , deleteTask}) (TaskList);