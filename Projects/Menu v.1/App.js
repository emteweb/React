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

    handleChangeStatus = (id) => {
        console.log(id)

        const items = this.state.items.map(item => {
            if (id === item.id) {
                item.active = !item.active
            }
            return item // if (id !== item.id) we return the copy of an existing item
            // if (id === item.id) we return the new value of 'active' property
            // that way we receive the copy of the first array with changed values
        })

        this.setState({
            items: items // we change the value of the original state of items to the new value 
            // here, the values in the new array
            // shorter way: items ('items: items')
        })
    }
    render() {
        return (
            <React.Fragment>
                <Header items={this.state.items} />
                <ListItems items={this.state.items} changeStatus={this.handleChangeStatus} />
            </React.Fragment>
        );
    }
}

