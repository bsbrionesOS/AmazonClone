import React from 'react';
import styled from 'styled-components';

const CartTotal = ({ getTotalPrice, getCount }) => {


  return ( 
    <Container>
      <Subtotal>Subtotal ({getCount()} items): ${getTotalPrice()}</Subtotal>
      <CheckoutButton>Proceed to Checkout</CheckoutButton>
    </Container>

   );
}
 
export default CartTotal;

const Container = styled.div`
  background-color: white;
  flex: 0.3;
  padding: 20px;
`
const CheckoutButton = styled.button`
  background-color: #F0C14B;
  width: 100%;
  padding: 4px 8px;
  border: 2px solid #a88734;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  :hover {
    background: #ddb347
  }
`

const Subtotal = styled.h2`
  margin-bottom: 16px;

`