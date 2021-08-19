const Item = (props) => <li> {`fruit: ${props.content}`} </li>

class ListItems extends React.Component {

    state = {
        items: ["apple", "pear", "banana"]
    }
    render() {

        const Items = this.state.items.map(item => <Item key={item} content={item} />)
        return (
            <ul>
                {/* {this.state.items.map(item => <Item key={item} content={item} />)} */}
                {Items}
            </ul>
        )
    }
}

ReactDOM.render(<ListItems />, document.getElementById("root"));