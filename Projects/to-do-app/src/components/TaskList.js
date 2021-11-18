import React from 'react';
import Task from './Task';

const TaskList = (props) => {
    const active = props.tasks.filter(task => task.active);
    const done = props.tasks.filter(task => !task.active);

    done.sort((a, b) => b.finishDate - a.finishDate);
    /* done.sort((a, b) => {
        if (a.finishDate < b.finishDate) {
            return 1
        }
        if (a.finishDate > b.finishDate) {
            return -1
        }
        return 0
    }) */

    if (active.length >= 2) {
        active.sort((a, b) => {

            a = a.text.toLowerCase();
            b = b.text.toLowerCase();
            if (a < b) {
                return -1
            }
            if (a > b ) {
                return 1
            }
            return 0
        })
    }

    const activeTasks = active.map(task =>
        <Task key={task.id} task={task} delete={props.delete} change={props.change} />)
    const doneTasks = done.map(task =>
        <Task key={task.id} task={task} delete={props.delete} change={props.change} />)
    return (
        <>
            <div>
                <h2>Tasks to do:</h2>

                {activeTasks.length > 0 ? activeTasks : <h3>No new tasks</h3>}

            </div>
            <hr />
            <div>
                <h3>Tasks completed <em> ({done.length})</em></h3>
                {done.length > 5 && <span style={{ color: "orange" }}> The list show 5 recently completed tasks</span>}
                {doneTasks.slice(0, 5)}
            </div>
        </>
    );
}

export default TaskList;

