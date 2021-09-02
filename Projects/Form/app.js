class Form extends React.Component {
    state = {
        city: "London",
        text: "",
        isLiked: true,
        number: 0
    }
    handleCityChange = e => {
        this.setState({
            city: e.target.value
        })
    }
    handleTextChange = e => {
        this.setState({
            text: e.target.value
        })
    }

    handleCheckboxChange = e => {
        this.setState({
            isLiked: e.target.checked
        }
        )
    }

    handleVisitsChange(e) {
        this.setState({
            number: e.target.value
        })
    }
    render() {
        return (
            <div>
                <label>
                    City name:
                    <input value={this.state.city} onChange={this.handleCityChange} type="text" />
                </label>
                <br />
                <label>
                    A few words about the city:
                <textarea value={this.state.text} onChange={this.handleTextChange}></textarea>
                </label>
                <br />
                <label>
                    Do you like the city?
                    <input type="checkbox" checked={this.state.isLiked} onChange={this.handleCheckboxChange} />
                </label>
                <br />
                <label>
                    <select value={this.state.number} onChange={this.handleVisitsChange.bind(this)}>
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