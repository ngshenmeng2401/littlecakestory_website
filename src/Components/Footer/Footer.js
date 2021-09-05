import React from 'react';
import { FooterStyle } from './style';
import { Navbar } from 'react-bootstrap';

const Footer = () => {
    return (
        // <Navbar bg="dark" variant="dark" expand="xl" fixed="bottom">
            <FooterStyle>
                <div className="main-footer position" >
                    <div className="footer-middle">
                        <div className="container">
                            <div className="row">
                                <h4>Title</h4>
                                <h5>Content</h5>
                            </div>
                            <div className="row">
                                {/* Column 1 */}
                                <div className="col-md-3 col-sm-6">
                                    <h4>Title</h4>
                                    <ul className="list-unstyled">
                                        <li><a href="">A</a></li>
                                        <li><a href="">A</a></li>
                                        <li><a href="">A</a></li>
                                        <li><a href="">A</a></li>
                                    </ul>
                                </div>
                                {/* Column 2 */}
                                <div className="col-md-3 col-sm-6">
                                    <h4>Title</h4>
                                    <ul className="list-unstyled">
                                        <li><a href="">B</a></li>
                                        <li><a href="">B</a></li>
                                        <li><a href="">B</a></li>
                                        <li><a href="">B</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="footer-bottom">
                                <p className="text-xs-center">
                                    &copy;{new Date().getFullYear()} Little Cake Story - Cake Delevery from Malaysia's Best Baker
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </FooterStyle>
        // </Navbar>
        
    )
}

export default Footer
