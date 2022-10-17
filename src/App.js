import React from 'react';
import './App.css';
import Header from './layout/Header';
import {Routes,Route} from 'react-router-dom'
import Products from './container/productsPage';
import { Container } from 'react-bootstrap';


const App = () => {
  return (
    <>
  <Header/>

  <Container>
    
  <Routes>

<Route exact path='/' element={<Products/>}/>

</Routes>

  </Container>
  
  
 
 
    
    </>
  )
}

export default App
