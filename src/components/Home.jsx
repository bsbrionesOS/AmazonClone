import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import Product from "./Product";
import { db } from "../database/firebase";
import { DockTwoTone } from '@material-ui/icons';

const Home = () => {

  const [ products, setProducts ] = useState([]);

  useEffect(() => {
    getProducts();
  }, [])

  const getProducts = () => {
    db.collection('products').onSnapshot((snapshot) => {
      let tempProduct = [];

      tempProduct = snapshot.docs.map((doc) => (
        {
          id: doc.id,
          product: doc.data()
        }
        ));
      setProducts(tempProduct);
    })
  }

  return ( 
    <Container>
      <Banner>

      </Banner>
      <Content>
        {
          products.map((data) => (
            <Product 
              key={data.id}
              title={data.product.name}
              price={data.product.price}
              rating={data.product.rating}
              image={data.product.imageUrl}
            />
          ))
        }
      </Content>
    </Container>
   );
}
 
export default Home;

const Container = styled.div`
  max-width: 1500px;
  margin: 0 auto;
`

const Banner = styled.div`
  background-image: url("https://i.imgur.com/SYHeuYM.jpg");
  min-height: 600px;
  background-position: center;
  background-size: cover;
  z-index: 1;
  mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
`
const Content = styled.div`
  padding-left: 10px;
  padding-left: 10px;
  margin-top: -350px;
  z-index: 100px;
  display: flex;
`