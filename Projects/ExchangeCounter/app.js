const Cash = (props) => {
    const value = (props.cash / props.ratio).toFixed(2)
    return (
        <div> {props.title} {props.cash <= 0 ? "" : value} </div>
    )
}

class ExchangeCounter extends React.Component {
    state = {
        amount: "",
        /*         ratioDollar: 3.8,
                ratioEuro: 4.2 */
    }

    currencies = [
        {
            id: 1,
            name: "dollar",
            ratio: 3.8,
            title: "Value (Dollars):"
        },
        {
            id: 2,
            name: "euro",
            ratio: 4.3,
            title: "Value (Euros):"
        },
        {
            id: 3,
            name: "pounds",
            ratio: 5.2,
            title: "Value (Pounds):"
        },
    ]
    hadleChange = (e) => {
        this.setState({
            amount: e.target.value
        })
    }

    render() {
        const { amount, ratioDollar, ratioEuro } = this.state;

        const calculators = this.currencies.map(curr => (
            <Cash key={curr.id} ratio={curr.ratio} title={curr.title} cash={amount} />
        ))
        return (
            <>
                <div className="app">
                    <label>
                        <input type="number" value={this.state.amount} onChange={this.hadleChange} />
                    </label>
                    {/*                     <Cash cash={amount} ratio={ratioDollar} title="Value (Dollars):" />
                    <Cash cash={amount} ratio={ratioEuro} title="Value (Euro):" /> */}
                    {calculators}
                </div>
            </>
        )
    }
}

ReactDOM.render(<ExchangeCounter />, document.getElementById('root'));