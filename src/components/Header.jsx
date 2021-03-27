import React from 'react';
import styled from "styled-components";

const Header = () => {
  return ( 
    <div>
      <HeaderLogo></HeaderLogo>
    </div>
   );
}
 
export default Header;

const HeaderLogo = styled.div`
  height: 60px;
  background-color: #0f1111;
`