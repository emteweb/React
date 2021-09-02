class Form extends React.Component {
    state = {
        city: "London",
        text: "",
        isLiked: true,
        number: 0
    }
    handleChange = e => {
        console.log(e.target.name)
        console.log(e.target.type)
        if (e.target.type === "checkbox") {
            this.setState({
                [e.target.name]: e.target.checked
            })
        }
        else {
            this.setState({
                [e.target.name]: e.target.value // in SQUARE brackets when we give a string in properties of an object
            })
        }

    }
    render() {
        return (
            <div>
                <label>
                    City name:
                    <input name="city" value={this.state.city} onChange={this.handleChange} type="text" />
                </label>
                <br />
                <label>
                    A few words about the city:
                <textarea name="text" value={this.state.text} onChange={this.handleChange}></textarea>
                </label>
                <br />
                <label>
                    Do you like the city?
                    <input name="isLiked" type="checkbox" checked={this.state.isLiked} onChange={this.handleChange} />
                </label>
                <br />
                <label>
                    How many times did you visit this place?
                    <select name="number" value={this.state.number} onChange={this.handleChange}>
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="more">more</option>
                    </select>
                </label>
            </div>
        )
    }
}

ReactDOM.render(<Form />, document.getElementById('root'));