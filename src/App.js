import React, { Component } from 'react'
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Layout from './Components/Layout/Layout';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Views/Home/Home';
import Product from './Views/Product/Product';
import Cart from './Views/Cart/Cart';
import Login from './Views/Login/Login';
import Register from './Views/Register/Register';
import NotMatch from './NotMatch';
import AboutUs from './Views/AboutUS/AboutUs';

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
                <Footer />
            </React.Fragment>
        )
    }
}

export default App
