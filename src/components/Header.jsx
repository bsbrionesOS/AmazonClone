import React from 'react';
import styled from "styled-components";
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';

const Header = () => {
  return ( 
    <Container>
      <HeaderLogo>
        <img src={"https://i.imgur.com/7I9Was5.png"}/>
      </HeaderLogo>

      <HeaderOptionAddress>
        <OptionLineOne>Hello</OptionLineOne>
        <OptionLineTwo>Select your address</OptionLineTwo>
      </HeaderOptionAddress>

      <HeaderSearch>
        <HeaderSearchInput type='text' />

        <HeaderSearchIconContainer>
          <SearchIcon />
        </HeaderSearchIconContainer>
      </HeaderSearch>

      <HeaderNavItems>

        <HeaderOption>
          <OptionLineOne>Hello, Brandon</OptionLineOne>
          <OptionLineTwo>Account & Lists</OptionLineTwo>
        </HeaderOption>

        <HeaderOption>
          <OptionLineOne>Return</OptionLineOne>
          <OptionLineTwo>& Orders</OptionLineTwo>
        </HeaderOption>

        <HeaderOptionCart>
          <ShoppingBasketIcon />
          <CartCount>5</CartCount>
        </HeaderOptionCart>

      </HeaderNavItems>

    </Container>
   );
}
 
export default Header;

const Container = styled.div`
  height: 60px;
  background-color: #0F1111;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: white;
`

const HeaderLogo = styled.div`
  img {
    width: 100px;
    margin-left: 11px
  }
`
const HeaderOptionAddress = styled.div`

`
const OptionLineOne = styled.div`

`
const OptionLineTwo = styled.div`
  font-weight: 700;
`
const HeaderSearch = styled.div`
 display: flex;
`

const HeaderSearchInput= styled.input`

`
const HeaderSearchIconContainer= styled.div`

`

const HeaderNavItems = styled.div`
  display: flex;
`

const HeaderOption = styled.div`

`

const HeaderOptionCart = styled.div`

`

const CartCount = styled.div`

`