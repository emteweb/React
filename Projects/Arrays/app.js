class ListItems extends React.Component {

    state = {
        items: ["apple", "pear", "banana"]
    }
    render() {
        return (
            <ul>
                {/* map(<arrayElement>, <arrayIndex>) */}
                {this.state.items.map(item => <li key={item}> {item} </li>)}
            </ul>
        )
    }
}

ReactDOM.render(<ListItems />, document.getElementById("root"));