const data = {
    users: [
        {
            id: 1,
            age: 29,
            name: "John",
            sex: "male"
        },
        {
            id: 2,
            age: 39,
            name: "Mark",
            sex: "male"
        },
        {
            id: 3,
            age: 19,
            name: "Kate",
            sex: "female"
        },
        {
            id: 4,
            age: 44,
            name: "David",
            sex: "male"
        },
        {
            id: 5,
            age: 18,
            name: "Lucy",
            sex: "female"
        },
    ]
}

/* const Person = (props) => (
    <div>
        <h1>User {props.user.name}</h1>
        <h2>is {props.user.age}</h2>
    </div>
) */

const Item = ({ user }) => ( // we take specific prop
    <div className="userInfo">
        <h1>{user.name}</h1>
        <p>Age: <strong> {user.age} </strong></p>
        <p>Sex: {user.sex}</p>
    </div>
)

class ListItems extends React.Component {
    state = {
        select: "all",
    }

    handleUsersFilter(option) {
        this.setState({
            select: option
        })
    }

    usersList = () => {
        let users = this.props.data.users;
        switch (this.state.select) {
            case "all":
                return users.map(user => <Item user={user} key={user.id}
                />)
            case "female":
                users = users.filter(user => user.sex === "female");
                return users.map(user => <Item user={user} key={user.id}
                />)
            case "male":
                users = users.filter(user => user.sex === "male");
                return users.map(user => <Item user={user} key={user.id}
                />)
        }
    }
    render() {
        return (
            <div>
                <button onClick={this.handleUsersFilter.bind(this, "all")}>Everybody</button>
                <button onClick={this.handleUsersFilter.bind(this, "female")}>Women</button>
                <button onClick={this.handleUsersFilter.bind(this, "male")}>Men</button>
                {this.usersList()}
            </div>
        )
    }
}

ReactDOM.render(<ListItems data={data} />, document.getElementById("root"));