import React from 'react';
import Task from './Task';

const TaskList = () => {
    return (
        <ul>
            <Task num={1} />
            <Task num={2} />
            <Task num={3}/>
        </ul>
    );
}
 
export default TaskList;

