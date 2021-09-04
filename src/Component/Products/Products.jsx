import React, { Component } from 'react'
import { Grid } from '@material-ui/core';
import Product from './Product/Product';
import shoesImg from '../../img/shoes.jpg';
import macbookImg from '../../img/macbook.jpg';
import phoneImg from '../../img/phone.jpg';

const products = [

    { id: 1, name: 'shoes', description: 'Running Shoes', price:'RM 299.00' ,image: shoesImg },
    { id: 2, name: 'Macbook', description: 'Apple Macbook', price:'RM 5299.00',image: macbookImg },
    { id: 3, name: 'Phone', description: 'Samsung S20 Plus', price:'RM 4299.00',image: phoneImg},

];

class Products extends Component {
    render() {
        return (
            <main>
                <Grid container justify="center" spacing={4}>
                    {products.map((products) => (
                        <Grid item key={products.id} xs={12} sm={6} md={4} lg={3}>
                            <Product product={products}></Product>
                        </Grid>
                    ))}
                </Grid>
            </main>
        )
    }
}

export default Products
