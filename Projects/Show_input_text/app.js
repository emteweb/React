class App extends React.Component {
    state = {
        value: ""
    }

    handleInputChange(e) {
        console.log("Zawartosc w event'cie " + e.target.value)
        console.log("Zawartosc value przed setState " + this.state.value)
        this.setState({
            value: e.target.value
        })
        console.log("Zawartosc value po setState " + this.state.value)
    }

    handleResetClick = () => {
        this.setState({
            value: ""
        })
    }

    render() {
        console.log("Zawartosc value w trakcie metody render " + this.state.value)
        return (
            <>
                <input value={this.state.value} onChange={this.handleInputChange.bind(this)} type="text" placeholder="wpisz ..." />
                <button onClick={this.handleResetClick}>Reset</button>
                <h1>{this.state.value}</h1>
            </>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));