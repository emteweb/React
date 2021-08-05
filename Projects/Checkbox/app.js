const ValidationMessage = (props) => <p> {props.txt}</p>

const OrderForm = (props) => {
    const { submit, change, isConfirmed } = props;
    return (
        <form onSubmit={submit}>
            <input type="checkbox" id="age" onChange={change} checked={isConfirmed} />
            <label htmlFor="age">I am at least 16 years old.</label>
            <br />
            <button type="submit"> Buy a ticket </button>
        </form>
    )
}
class TicketShop extends React.Component {
    state = {
        isConfirmed: false,
        isFormSubmitted: false
    }

    handleCheckboxChange = () => {
        this.setState({
            isConfirmed: !this.state.isConfirmed,
            isFormSubmitted: false
        })
    }
    displayMessage = () => {
        if (this.state.isFormSubmitted) {
            if (this.state.isConfirmed) {
                return <ValidationMessage txt="You can watch this movie." />
            } else {
                return <ValidationMessage txt="You are not allowed to watch the movie if you're under 16!" />
            }
        } else {
            return null
        }
    }
    handleFormSubmit = (e) => {
        e.preventDefault()
        if (!this.state.isFormSubmitted) {
            this.setState({
                isFormSubmitted: true
            })
        }
    }
    render() {
        const { isConfirmed, isFormSubmitted } = this.state;
        return (
            <>
                <h1> Buy a ticket for a horror movie :O </h1>
                <OrderForm
                    change={this.handleCheckboxChange}
                    submit={this.handleFormSubmit}
                    checked={isConfirmed}
                />
                {this.displayMessage()}
            </>
        )

    }
}

ReactDOM.render(<TicketShop />, document.getElementById("root"));