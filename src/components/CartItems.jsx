import React from 'react';
import styled from 'styled-components';
import CartItem from "./common/CartItem";

const CartItems = () => {
  return ( 
    <Container>
      <Title>Shopping Cart</Title>
      <hr />
      <ItemsContainer>
        <CartItem />
      </ItemsContainer>
    </Container>

   );
}
 
export default CartItems;

const Container = styled.div`
  height: 300px;
  background-color: white;
  flex: 0.8;
  margin-right: 18px;
  padding: 20px
`
const Title = styled.div`

`

const ItemsContainer = styled.div`

`