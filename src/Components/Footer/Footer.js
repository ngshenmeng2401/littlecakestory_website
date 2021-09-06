import React from 'react';
import { FooterStyle } from './style';
import { Form, Button } from 'react-bootstrap';

const Footer = () => {
    return (
        // <Navbar bg="dark" variant="dark" expand="xl" fixed="bottom">
            <FooterStyle>
                <div  className="main-footer position" >
                    <div className="footer-middle">
                        <div className="container">
                            <div className="row">
                                <h4 className="title1 fontsize1">A fun mix of fantastical flavours, right at your doorstep!</h4>
                                <h5 className="content1 marginbottom">Cakes are meant to bring joy and elevate the mood of any occasion. That is why we at Eat Cake Today strives to be the best cake delivery service in Malaysia. Hundreds of mouth-watering, crave-inducing, luscious cakes are available for purchase and are categorized under a number of collections, namely brownies, bundts, cheesecakes, cupcakes, customized cakes, designer cakes, dessert table, eggless cakes, healthy cakes, halal cakes, jelly cakes, loafs, less sweet cakes, macarons, Mille crepes, pastries, vegan dairy-free cakes, and sugar flowers.</h5>
                            </div>
                            <div className="row">
                                {/* Column 1 */}
                                <div className="col-md-3 col-sm-6">
                                    <h4 className="title1 fontsize2">Little Cake Story Links</h4>
                                    <ul className="list-unstyled">
                                        <li><a href="">Best Selling Cakes</a></li>
                                        <li><a href="">Cake News</a></li>
                                        <li><a href="">Career</a></li>
                                        <li><a href="">Contact Us</a></li>
                                        <li><a href="">About Us</a></li>
                                    </ul>
                                </div>
                                {/* Column 2 */}
                                <div className="col-md-5 col-sm-7">
                                    <h4 className="title1 fontsize2">Buy Cakes Online For Birthday / Get Together</h4>
                                    <ul className="list-unstyled content1">
                                        <li>Little Cake Story is the No.1 Cake Delivery Shop in Kuala Lumpur (KL), Petaling Jaya (PJ), Klang Valley and Selangor, Malaysia. We deliver fresh birthday cakes to your door in 4 hours!</li>
                                        <br />
                                        <li>Together, our 500+ premium cakes (including designer and customized) from local bakers near me and you including special recipe cakes cater for your next corporate/office bulk order, wedding and kids events.</li>
                                        <br />
                                        <li>Buy a cake online for yourself or send a cake to your friends and family today!</li>
                                        <br />
                                        <li></li>
                                    </ul>
                                </div>
                                <div className="col-md-4 col-sm-6">
                                    <h4 className="title1 fontsize2">Little Cake Story Newsletter</h4>
                                    <Form>
                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Control type="email" placeholder="Enter email" />
                                        </Form.Group>
                                        <Button type="submit">
                                            Sign Up
                                        </Button>
                                    </Form>
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