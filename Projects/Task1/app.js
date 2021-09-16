class Showbox extends React.Component {
    state = {
        messages: [
            {
                id: 1,
                text: "Aaa",
                isActive: true,
            },
            {
                id: 2,
                text: "Bbb",
                isActive: false,
            },
            {
                id: 3,
                text: "Ccc",
                isActive: true,
            },
            {
                id: 4,
                text: "Ddd",
                isActive: true,
            },
            {
                id: 5,
                text: "Eee",
                isActive: false,
            },
        ],
        chosen: null
    }



    handleShowMessage = () => {

        const activeMsg = this.state.messages.filter(msg => {
            if (msg.isActive) return msg
        });

        const index = Math.floor(Math.random() * activeMsg.length);

        this.setState({
            chosen: activeMsg[index].text
        })

        // activeMsg.forEach(m => {
        //     console.log(m.text)
        // })
    }

    handleAddMessage = () => {

    }

    render() {
        return (
            <>
                <button id="btn" onClick={this.handleShowMessage} > Show a message </button>
                <br />
                <input type="text"></input>
                <button onClick={this.handleAddMessage}>Add a message</button>
                {this.state.chosen ? <h1>{this.state.chosen}</h1> : null}
                {/* <h1>{this.state.chosen}</h1> */}
            </>
        )
    }
}

ReactDOM.render(<Showbox />, document.getElementById('root'));