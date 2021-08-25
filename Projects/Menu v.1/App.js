class App extends React.Component {
    state = {
        items: [
            { id: 1, name: "Tea", active: true },
            { id: 2, name: "Potatoes", active: false },
            { id: 3, name: "Salad", active: false },
            { id: 4, name: "Chicken soup", active: false },
            { id: 5, name: "Coffee", active: false },
            { id: 6, name: "Bread", active: true },
        ]
    }
    render() {
        return (
            <React.Fragment>
                <Header items = {this.state.items} />
                <ListItems items = {this.state.items} />
            </React.Fragment>
        );
    }
}

