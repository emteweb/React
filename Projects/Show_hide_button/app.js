class Message extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            messageIsActive: false
        }
        // we create a new method (handleMessageButton) in each instance of the component which is bound with class method
        this.handleMessageButton = this.handleMessageButton.bind(this) // video: 20:00
    }
    // this method is in Prototype (it exists in the class)
    handleMessageButton() {
        this.setState({
            messageIsActive: !this.state.messageIsActive
        })
    }

    render() {
        console.log(this.state.messageIsActive)
        const text = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. '
        return (
            <>
                <button onClick={this.handleMessageButton}> {this.state.messageIsActive ? 'Hide' : 'Show'} </button>
                {/* ver.1 */}
                {this.state.messageIsActive ? <p> {text} </p> : null}
                {/* ver.2 */}
                {/* {this.state.messageIsActive && <p> {text} </p>} */}
                {/* ver.3 (not the best - there's no point creating <p> if the state.messageIsActive is FALSE) */}
                {/* <p>{this.state.messageIsActive && text}</p> */}
            </>
        )
    }

}

ReactDOM.render(<Message />, document.getElementById('root'));

// <p>{this.state.messageIsActive && text}</p>