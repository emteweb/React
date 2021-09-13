const Cash = (props) => {
    const value = ((props.cash / props.ratio) * props.price).toFixed(2)
    return (
        <div> {props.title} {props.cash <= 0 ? "" : value} </div>
    )
}

class ExchangeCounter extends React.Component {
    state = {
        amount: "",
        /*         ratioDollar: 3.8,
                ratioEuro: 4.2 */
        product: "electricity"
    }

    static defaultProps = {
        currencies: [
            {
                id: 0,
                name: "zloty",
                ratio: 1,
                title: "Value (Zlotys):"
            },
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
        ],
        prices: {
            electricity: .51,
            fuel: 4.76,
            oranges: 3.79
        }
    }


    handleChange = (e) => {
        this.setState({
            amount: e.target.value
        })
    }

    handleSelect = (e) => {
        this.setState({
            product: e.target.value,
            amount: ""
        })
    }

    insertSuffix = (select) => {
        if (select === "electricity") return <em>kWh</em>
        else if (select === "fuel") return <em>Litre</em>
        else if (select === "oranges") return <em>Kg</em>
        else return null;
    }

    selectPrice = (select) => {
        const price = this.props.prices[select]
        return price;
    }

    render() {
        const { amount, product } = this.state;

        const calculators = this.props.currencies.map(curr => (
            <Cash
                key={curr.id}
                ratio={curr.ratio}
                title={curr.title}
                cash={amount}
                price={this.selectPrice(product)}
            />
        ))
        return (
            <>
                <div className="app">
                    <label>Choose a product:
                        <select value={product} onChange={this.handleSelect}>
                            <option value="electricity">Electricity </option>
                            <option value="fuel">Fuel</option>
                            <option value="oranges">Oranges</option>
                        </select>
                    </label>
                    <br />
                    <label>
                        <input type="number" value={amount} onChange={this.handleChange} />
                        {this.insertSuffix(product)}
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