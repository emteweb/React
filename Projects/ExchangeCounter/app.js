/* const Dollars = (props) => (
    <div> Value (Dollars): {props.cash <= 0 ? "" : (props.cash / props.ratio).toFixed(2)}</div>
)
const Euros = (props) => {
    const value = (props.cash / props.ratio).toFixed(2)
    return (
        <div> Value (Euros): {props.cash <= 0 ? "" : value} </div>
    )
}
 */
const Cash = (props) => {
    const value = (props.cash / props.ratio).toFixed(2)
    return (
        <div> {props.title} {props.cash <= 0 ? "" : value} </div>
    )
}



class ExchangeCounter extends React.Component {
    state = {
        amount: "",
        ratioDollar: 3.8,
        ratioEuro: 4.2
    }
    hadleChange = (e) => {
        this.setState({
            amount: e.target.value
        })
    }

    render() {
        const { amount, ratioDollar, ratioEuro } = this.state;
        return (
            <>
                <div className="app">
                    <label>
                        <input type="number" value={this.state.amount} onChange={this.hadleChange} />
                    </label>
                    {/* <Dollars cash={amount} ratio={ratioDollar} />
                    <Euros cash={amount} ratio={ratioEuro} /> */}
                    <Cash cash={amount} ratio={ratioDollar} title="Value (Dollars):" />
                    <Cash cash={amount} ratio={ratioEuro} title="Value (Euro):" />
                </div>
            </>
        )
    }
}

ReactDOM.render(<ExchangeCounter />, document.getElementById('root'));