const header = <h1 className="title"> Witaj na stronie </h1>
const classBig = "big";
const handleClick = () => alert("Click!");
const main = (
  <div>
    <h1 onClick={handleClick} className="red">Pierwszy artykul</h1>
    <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. At sed optio ducimus quaerat natus eligendi nesciunt, saepe, quos cum dolore dolorem quasi reiciendis voluptates rerum consectetur totam officiis non omnis.</p>
  </div>
)

const footer = (
  <footer>
    <p className={classBig}> Stopka </p>
  </footer>
)

const app = [header, main, footer]
//ReactDOM.render(app, document.getElementById('root'));

// komponent funkcyjny/bezstanowy

const Header = () => {
  return <h1>Witaj na stronie</h1>
}

// komponent klasowy/stanowy

class Blog extends React.Component {
  /* state = {
    number: 0
  } */
  render() {
    return (
      <section>
        <h2> Artykul</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos ducimus dolores consectetur delectus iste, dolorum necessitatibus animi rerum nihil earum, mollitia inventore doloribus assumenda soluta sunt, neque molestiae. Odio, suscipit.</p>
      </section>
    )
  }
}

const App = () => {
  return (
    <>
      <Header />
      <Blog />
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));