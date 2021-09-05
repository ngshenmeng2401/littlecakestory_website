import React, { Component } from 'react'
import Header from './Components/Header/Header';
import Layout from './Components/Layout/Layout';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Components/Views/Home';
import Product from './Components/Views/Product';
import Cart from './Components/Views/Cart';
import Login from './Components/Views/Login';
import Register from './Components/Views/Register';
import NotMatch from './Components/NotMatch';
import AboutUs from './Components/Views/AboutUs'

class App extends Component {
    render() {
        return (
            <React.Fragment>
                <Header/>
                <Layout>
                    <Router>
                        <Switch>
                            <Route exact path="/" component={Home}/>
                            <Route exact path="/aboutus" component={AboutUs}/>
                            <Route exact path="/product" component={Product}/>
                            <Route exact path="/cart" component={Cart}/>
                            <Route exact path="/login" component={Login}/>
                            <Route exact path="/register" component={Register}/>
                            <Route component={NotMatch}/>
                        </Switch>
                    </Router>
                </Layout>
            </React.Fragment>
        )
    }
}

export default App
