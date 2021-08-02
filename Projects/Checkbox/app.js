const PositiveMessage = () => <p> You can watch this movie. </p>

const NegativeMessage = () => <p> You are not allowed to watch the movie if you're under 16! </p>

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
                return <PositiveMessage />
            } else {
                return <NegativeMessage />
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
        console.log(this.state.isConfirmed)
        return (
            <>
                <h1> Buy a ticket for a horror movie :O </h1>
                <form onSubmit={this.handleFormSubmit}>
                    <input type="checkbox" id="age" onChange={this.handleCheckboxChange} checked={this.state.isConfirmed} />
                    <label htmlFor="age">I am at least 16 years old.</label>
                    <br />
                    <button type="submit"> Buy a ticket </button>
                </form>
                {this.displayMessage()}
            </>
        )

    }
}

ReactDOM.render(<TicketShop />, document.getElementById("root"));