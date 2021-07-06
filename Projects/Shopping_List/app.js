class ShoppingList extends React.Component {
    state = {
        item1: 'ogorki',
        item2: 'sok',
        item3: 'cos do picia'
    }
    // ver. 1
    /* render() {
        return (
            <>
                <h1> Lista zakupow: </h1>
                <ul>
                    <li>{this.state.item1}</li>
                    <li>{this.state.item2}</li>
                    <li>{this.state.item3}</li>
                </ul>
            </>
        )
    } */
    // ver. 2
    render() {
        return (
            <>
                <h1> Lista zakupow: </h1>
                <ul>
                    <ItemList name={this.state.item1} example={2 + 2} />
                    <ItemList name={this.state.item2} />
                    <ItemList name={this.state.item3} />
                </ul>
            </>
        )
    }
}
// za pomoca komponentu funkcyjnego
/* const ItemList = (props) => {
    return (
        <li>{props.name}</li>
    )
}
 */
// za pomoca komponentu klasowego

class ItemList extends React.Component {
    render() {
        return (
            <li>{this.props.name} - {this.props.example}</li>
        )
    }
}

ReactDOM.render(<ShoppingList />, document.getElementById('root'));