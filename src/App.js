import "./App.css";
import Header from "./components/Header";
import {useState, useEffect} from "react";
import { auth, db } from './database/firebase';
import Cart from "./components/Cart";
import Home from "./components/Home";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import styled from "styled-components";
import Login from './components/login';

function App() {
  const [ user, setUser] = useState(JSON.parse(localStorage.getItem('user')));
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    getCartItems();
  }, [])

  const getCartItems = () => {
    db.collection('cartItems').onSnapshot((snapShot) => {

      const tempItems = snapShot.docs.map((doc) => (
        {
          id: doc.id,
          product: doc.data()
        }
      ))
       setCartItems(tempItems);
    })
  }

  const signOut = () => {
    auth.signOut().then(() => {
      setUser(null);
      localStorage.removeItem('user');
    })

  }
  console.log("User",user);
  return (
    
    <Router>
      {
        !user ? (
          <Login setUser={setUser}/>
        ) : (
      <Container>
        <Header cartItems={cartItems} user={user} signOut={signOut}/>
        <Switch>
          <Route path="/cart">
            <Cart cartItems={cartItems} />
          </Route>

          <Route path="/">
            <Home />
          </Route>
        </Switch>
    </Container>
        )
      }
    </Router>
  );
}

export default App;

const Container = styled.div`
  background-color: #EAEDED;
`
