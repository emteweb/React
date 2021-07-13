class Counter extends React.Component {

    state = {
        count: 0,
        // score: 0
        score: this.props.score // wykorzystujemy wlasciwosc props, ktora zostala przekazana jako atrybut w ReactDOM
    }
    handleMathClick(type, number) {
        //debugger
        if (type === "substraction") {
            this.setState(prevState => ({
                count: prevState.count + 1,
                score: prevState.score - number
            }))
        } else if (type === "reset") {
            this.setState(prevState => (
                {
                    count: prevState.count + 1,
                    score: 0
                }
            ))
        }
        else if (type === "addition") {
            this.setState(prevState => (
                {
                    count: prevState.count + 1,
                    score: prevState.score + number
                }
            ))
        }
    }
    render() {
        return (
            <>
                {/* powiązanie funkcji przez "bind" z podaniem argumentów  */}
                <button onClick={this.handleMathClick.bind(this, "substraction", 1)}>-1</button>
                {/* wywołanie w "onClick" funkcji anonimowej i w srodku tej funkcji przekazujemy parametry */}
                <button onClick={() => this.handleMathClick("substraction", 10)}>-10</button>
                <button onClick={this.handleMathClick.bind(this, "reset")}>Reset score</button>
                <button onClick={this.handleMathClick.bind(this, "addition", 1)}>+1</button>

                <h1>Number of clicks: {this.state.count} </h1>
                <h1> Score: {this.state.score} </h1>
            </>
        )
    }
}

ReactDOM.render(<Counter score={0} />, document.getElementById("root"));