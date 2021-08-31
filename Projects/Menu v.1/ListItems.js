const ListItems = (props) => {
    const order = props.items.map(item => (
        <Item
            key={item.id} // key is not transferred to props
            id={item.id} // to have "id" in props
            name={item.name}
            active={item.active}
            changeStatus={props.changeStatus}
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