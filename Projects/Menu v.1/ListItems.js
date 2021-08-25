const ListItems = (props) => {
    const order = props.items.map(item => (
<Item 
key = {item.id}
name = {item.name}
active = {item.active}
/>
    ))
    return (
        <div className="list">
            <h1> Your order:</h1>
            <ul>
                {order}
            </ul>
        </div>

    )
}