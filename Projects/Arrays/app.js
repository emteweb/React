const data = {
    users: [
        {
            id: 1,
            age: 29,
            name: "John"
        },
        {
            id: 2,
            age: 39,
            name: "Mark"
        },
        {
            id: 3,
            age: 19,
            name: "Kate"
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
    <div>
        <h1>User {user.name}</h1>
        <h2>is {user.age}</h2>
    </div>
)

class ListItems extends React.Component {

    /* state = {
        items: ["apple", "pear", "banana"]
    } */
    render() {
        const users = this.props.data.users;
        const Items = users.map(user => <Item key={user.id} user={user} />)
        return (
            <ul>
                {/* {this.state.items.map(item => <Item key={item} content={item} />)} */}
                {Items}
            </ul>
        )
    }
}

ReactDOM.render(<ListItems data={data} />, document.getElementById("root"));