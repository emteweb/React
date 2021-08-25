const Header = (props) => {
    const activeItems = props.items.filter(item => item.active)
    const number = activeItems.length
    return (
        <header>
            <h2> Order summary: {number} </h2>
            <h2> Bill: {number ? `${number*10}$`: 'Nothing to pay'} </h2>
        </header>
    )
}