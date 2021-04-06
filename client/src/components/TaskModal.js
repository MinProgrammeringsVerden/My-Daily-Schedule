import React, {Component} from 'react';
import { Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input} from 'reactstrap';
import {connect } from 'react-redux';
import {addTask} from '../actions/taskActions';
import PropTypes from 'prop-types';


class TaskModal  extends Component {
    state = { 
        modal : false,
        name :''
     }

     toggle =()=> {
         this.setState({
          modal: !this.state.modal
         })
     };

     onChange = (e)=> {
         this.setState({[e.target.name]:e.target.value})

     }

     onSubmit = (e) => {
         e.preventDefault();
         const task = {
            name : this.state.name 
          };

         this.props.addTask(task);
         this.toggle();
        };


    render() { 
        return ( 
            <div>
              <Button color="success" onClick={this.toggle} style={{marginBottom:'3rem'}}>Add a task</Button>
              <Modal isOpen={this.state.modal} toggle={this.toggle}>
                   <ModalHeader toggle={this.toggle}> New Task</ModalHeader>
                        <ModalBody>
                            <Form onSubmit={this.onSubmit}>
                                <FormGroup>
                                    <Label for="task">New task</Label>
                                    <Input type="text" name="name" id="task" placeholder ="write a task" onChange={this.onChange} />
                                </FormGroup>
                                <Button color="primary">Task added</Button>
                            </Form>
                        </ModalBody>
              </Modal>
          </div>
        );
         
    }
};

TaskModal.propTypes = {
    addTask : PropTypes.func.isRequired , 
    task : PropTypes.object.isRequired
  };

 const mapStateToProps = state =>({
     task : state.task
 });



export default connect(mapStateToProps ,{addTask})(TaskModal) ;