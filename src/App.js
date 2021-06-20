import './App.css';
import React ,{useEffect} from 'react';
import Header from './commponents/header';
import Home from './commponents/home';
import Login from './commponents/Login'
import Checkout from './screens/checkout';
import Orders from './commponents/Orders';
import Payment from './screens/Payment';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import { auth } from './firebase';
import { useStateValue } from './StateProviders';
import {loadStripe} from '@stripe/stripe-js';
import {Elements} from '@stripe/react-stripe-js';


const promise = loadStripe("pk_test_51J436bSHc533uoY5DucGGSZg0gCijZoCUIQlRyo18JgbpGncji5lBA6dOW8OXalT3HaOSi9aWowdEZoYpmbOvxn600C9z6PGbF");

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged(authUser=>{
      console.log('The user is', authUser);
      if(authUser){
        dispatch({
          type:'Set_user',
          user:authUser
        })

      }else{
        dispatch({
          type:'Set_user',
          null:null
        })

      }
    })
  },[])
  
  return (
    <Router>
    <div className="App">
      
      <Switch>
      <Route path="/Login">
      <Login/>
      </Route>
      <Route path="/checkout">
      <Header/>
      <Checkout/>
      </Route>
      <Route path="/payment">
      <Header/>
      <Elements stripe={promise}>
      <Payment/>
      </Elements>
      </Route>
      <Route path="/Orders">
      <Header/>
      <Orders/>
      </Route>
      <Route path="/">
      <Header/>
      <Home/>
      </Route>
      </Switch>
      
    </div>
    </Router>
  );
}

export default App;
