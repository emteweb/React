class Counter extends React.Component {

    state = {
        count: 0,
        // score: 0
        score: this.props.score // wykorzystujemy wlasciwosc props, ktora zostala przekazana jako atrybut w ReactDOM
    }
    handleMathClick = (type, number) => {
        //debugger
        if (type === "subtraction") {
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
                <MathButton
                    name="-1"
                    number="1"
                    type="subtraction"
                    click={this.handleMathClick}
                />

                <MathButton
                    name="-10"
                    number="10"
                    type="subtraction"
                    click={this.handleMathClick}
                />
                <MathButton
                    name="reset"
                    type="reset"
                    click={this.handleMathClick}
                />
                <MathButton
                    name="+1"
                    number="1"
                    type="addition"
                    click={this.handleMathClick}
                />

                <h1>Number of clicks: {this.state.count} </h1>
                <h1> Score: {this.state.score} </h1>
            </>
        )
    }
}

const MathButton = (props) => {
    const number = parseInt(props.number)
    return (
        <button onClick={() => props.click(props.type, number)}> {props.name} </button>
    )
}

ReactDOM.render(<Counter score={0} />, document.getElementById("root"));