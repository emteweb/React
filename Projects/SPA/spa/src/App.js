import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, NavLink, Route, Routes } from 'react-router-dom';

const Home = () => <h1> Home page</h1>
const News = () => <h1>Recent news ...</h1>
const Contact = () => <h1>Contact us</h1>
const NotFound = () => <h1>Page not found !!!</h1>

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <nav>
            <ul>
              <li><NavLink to="/">Start</NavLink></li>
              <li><NavLink to="/news">News</NavLink></li>
              <li><NavLink to="/contact">Contact</NavLink></li>
            </ul>
          </nav>
          <section>

            <Routes>

              <Route path="/" element={<Home />} /><Route />
              <Route path="/news" element={<News />} /><Route />
              <Route path="/contact" element={<Contact />} /><Route />
              <Route path="/*" element={<NotFound />} /><Route />

            </Routes>
          </section>
        </div>
      </Router>
    );
  }
}

export default App;
