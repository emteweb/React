const PositiveMessage = () => <p> You can watch this movie. </p>

const NegativeMessage = () => <p> You are not allowed to watch the movie if you're under 16! </p>

class CheckboxAgeConfirmation extends React.Component {
    state = {
        isConfirmed: false
    }

    handleCheckboxChange = () => {
        this.setState({
            isConfirmed: !this.state.isConfirmed
        })
    }
    displayMessage = () => {
        if (this.state.isConfirmed) {
            return <PositiveMessage />
        } else {
            return <NegativeMessage />
        }
    }
    render() {
        console.log(this.state.isConfirmed)
        return (
            <>
                <h1> Buy a ticket for a horror movie :O </h1>
                <input type="checkbox" id="age" onChange={this.handleCheckboxChange} checked={this.state.isConfirmed} />
                <label htmlFor="age">I am at least 16 years old.</label>
                {this.displayMessage()}
            </>
        )

    }
}

ReactDOM.render(<CheckboxAgeConfirmation />, document.getElementById("root"));