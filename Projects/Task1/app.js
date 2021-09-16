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
        chosen: null,
        easyMsgs: ["Ann", "Bart", "Celine"],
        value: ""
    }



    handleShowMessage = () => {

        const activeMsg = this.state.messages.filter(msg => {
            if (msg.isActive) return msg
        });

        // const index = Math.floor(Math.random() * activeMsg.length);
        const index = Math.floor(Math.random() * this.state.easyMsgs.length);

        this.setState({
            // chosen: activeMsg[index].text
            chosen: this.state.easyMsgs[index]
        })

        // activeMsg.forEach(m => {
        //     console.log(m.text)
        // })
    }

    handleInputChange = e => {
        this.setState({
            value: e.target.value
        })
    }

    handleAddMessage = () => {
        if (this.state.value === "") return alert('Enter a message!');
        const newText = this.state.value;
        const msgs = [...this.state.easyMsgs] // we create a copy of an array
        msgs.push(newText);
        // const msgs = this.state.easyMsgs.concat(newText) // another way of creating a new array

        this.setState({
            easyMsgs: msgs,
            value: ""
        })
    }

    render() {
        return (
            <>
                <button id="btn" onClick={this.handleShowMessage} > Show a message </button>
                <br />
                <input id="newTxt" type="text" value={this.state.value} onChange={this.handleInputChange}></input>
                <button onClick={this.handleAddMessage}>Add a message</button>
                {this.state.chosen ? <h1>{this.state.chosen}</h1> : null}
                {/* <h1>{this.state.chosen}</h1> */}
            </>
        )
    }
}

ReactDOM.render(<Showbox />, document.getElementById('root'));