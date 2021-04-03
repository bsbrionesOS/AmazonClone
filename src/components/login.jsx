import React from 'react';
import styled from 'styled-components';
import { auth, provider } from '../database/firebase'

const Login = ({ setUser }) => {

  const signIn = () => {
    auth.signInWithPopup(provider).then((result) => {
      let user = result.user;
      let newUser = {
        name: user.displayName,
        email: user.email,
        photo: user.photoURL
      }
      setUser(newUser);
    }).catch((error) => {
      alert(error.message)
    })
  }

  return ( 
    <Container>
      <Content>
        <AmazonLogo src="https://i.pinimg.com/originals/08/5f/d8/085fd8f7819dee3b716da73d3b2de61c.jpg"/>
        <h1>Sign into amazon</h1>
        <LoginButton
          onClick={signIn}
        >
          Sign in with google
        </LoginButton>
      </Content>
    </Container>
   );
}
 
export default Login;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #F8F8F8;
  display: grid;
  place-items: center;
`

const Content = styled.div`
  padding: 100px;
  background-color: white;
  border-radius: 5px;
  box-shadow: 0 1px 3px grey;
  text-align: center;
`

const AmazonLogo = styled.img`
  height: 100px;
  margin-bottom: 40px;
`

const LoginButton = styled.button`
  margin-top: 50px;
  background-color: #F0C14B;
  height: 40px;
  border: 2px solid #A88734;
  border-radius: 4px;
  padding: 4px 8px;
  cursor: pointer;  
`