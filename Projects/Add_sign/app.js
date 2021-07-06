// Przycisk - po kliknieciu dodawana jest litera do tekstu

class App extends React.Component {
    // we set "state" either in a contructor or directly as a property
    /* constructor(props) {
        super(props);
        this.state = {
            text: ""
        } 
        // we can define "this" in a constructor. Then, we do not use "bind" in render method
        //this.handleClick = this.handleClick.bind(this)
    }*/
    // defining state directly in a class
    state = {
        text: ""
    }
    // ver.1 - in arrow functions "this" is set to a parent element 

    handleClick = () => {
        const number = Math.floor(Math.random() * 10);
        this.setState({
            text: this.state.text + number
        })
    }
    //ver.2 - we declare a method and use 'BINDING' to permanently assign property THIS
    /* handleClick() {
        const letter = "a";
        this.setState({
            text: this.state.text + letter
        })
    } */

    //ver.3 
    /* handleClick() {
       const letter = "a";
       instead of an object we use arrow function  
       this.setState((prevState) => {
           return {
               text: this.prevState.text + letter
           }
       })
   } */

    //ver.4 - instead of "return" we can use a shorter way
    /* handleClick() {
        const letter = "a";
        this.setState((prevState) => ({
            text: this.prevState.text + letter
        })
        )
    } */


    render() {
        return (
            <>
                {/* ver.1 */}
                {/* <button onClick={this.handleClick}> Dodaj "A"</button> */}
                {/* ver.2 */}
                <button onClick={this.handleClick.bind(this)}> {this.props.btnTitle}</button>
                {/* calling "bind" on the method handleClick returns "this" which is set to a class */}
                {/* <h1>{this.state.text}</h1> */}
                <ResultPanel display={this.state.text} />
            </>
        )
    }
}

const ResultPanel = (props) => {
    return (
        <h1>{props.display}</h1>
    )
}

ReactDOM.render(<App btnTitle="dodaj cyfre" />, document.getElementById("root"))