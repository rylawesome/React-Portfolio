import React from 'react';
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Home from "./components/pages/Home"
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Projects from "./components/pages/Projects"

function App() {

    return (
        <>
        <Router>
            <Navbar />
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/projects' exact component={Projects} />
            </Switch>
        </Router>
        </>
    );
}

export default App;