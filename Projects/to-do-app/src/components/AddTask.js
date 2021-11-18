import React, { Component } from 'react';
import './AddTask.css'


class AddTask extends Component {

    minDate = new Date().toISOString().slice(0, 10);

    state = {
        text: "",
        checked: false,
        maxDate: "2021-12-31",
        date: this.minDate,
    }

    handleTextField = (e) => {
        this.setState({
            text: e.target.value
        })
    }
    handleCheckbox = (e) => {
        this.setState({
            checked: e.target.checked
        })
    }
    handleClick = () => {
        const { text, date, checked } = this.state;
        if (text.length > 2) {
            const add = this.props.add(text, date, checked);
            if (add) {
                this.setState({
                    text: "",
                    checked: false,
                    date: this.minDate
                })
            }
        }
        this.setState({
            text: "Too short name"
        })
    }
    handleDate = (e) => {
        this.setState({
            date: e.target.value
        })
        //console.log(e.target.value);
    }


    render() {
        let maxDate = this.minDate.slice(0, 4) * 1 + 1;
        maxDate = maxDate + "-12-31";
        return (
            <div className="form">
                <input type="text" placeholder="Add a new task" value={this.state.text} onChange={this.handleTextField} />
                <input type="checkbox" checked={this.state.checked} onChange={this.handleCheckbox} />
                <label htmlFor="important" id="important">Priority</label> <br />
                <label htmlFor="dueDate">Due date: </label>
                <input type="date" value={this.state.date} min={this.minDate} max={maxDate} onChange={this.handleDate} />
                <button onClick={this.handleClick} >Add</button>
            </div>
        )
    }
}

export default AddTask;