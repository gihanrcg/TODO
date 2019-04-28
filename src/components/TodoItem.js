import React, { Component } from 'react';
import PropTypes from 'prop-types';



class TodoItem extends Component {

    getStyle = () => {
        return {
            background: '#f0f0e0',
            textDecoration: this.props.todo.isCompleted ? 'line-through' : 'none',
            color: this.props.todo.isCompleted ? 'red' : '#0FBCA0',
            align:'left'
        }
    }



    render() {

        const {id, title} = this.props.todo;
        return (
            <div style={this.getStyle()}>
                <p>
                    <input type='checkBox' onChange={this.props.markComplete.bind(this,id)}/>
                  {title}           
                    <button style={closeBtnStyle} onClick = {this.props.delTodo.bind(this,id)}>X</button>
                </p>
            </div>


        )
    }
}
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}

const closeBtnStyle = {
    borderRadius : '50%',
    color:'white',
    backgroundColor:'red',
    float : 'right',
    cursor:'pointer',
    padding:'5px 8px'
}

export default TodoItem;