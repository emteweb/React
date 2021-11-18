import React from 'react';


const Task = (props) => {

    const stylePrio = {
        color: 'red'
    }

    const { text, date, id, active, important, finishDate } = props.task;

    if (active) {
        return (
            <>
                <div>
                    <p>
                        <strong style={important ? stylePrio : null}>{text}</strong> - due date <span> {date} </span>
                        <button onClick={() => props.change(id)}>Task completed</button>
                        <button onClick={() => props.delete(id)}>X</button>
                    </p>
                </div>
            </>
        )
    } else {
        const completionDate = new Date(finishDate).toLocaleString();
        return (
            <div>
                <p>
                    <strong>{text}</strong> - due date <em> {date} </em> <br />
                    <span style={{ fontSize: 12 }}>(Completion date: {completionDate} )</span>

                    <button onClick={() => props.delete(id)}>X</button>
                </p>
            </div>
        )
    }

}

export default Task;