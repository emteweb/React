const Item = (props) => (
    <li
        /* style={props.active ? { fontWeight: 'bold' } : { color: 'gray' }} */
        className={props.active ? "enabled" : "disabled"}

        // after click ...  anonymous function is called out and it calls out 'changeStatus' function
        // which has an 'id' given as a parameter
        onClick={() => props.changeStatus(props.id)}
    >
        {props.name}
    </li>
)