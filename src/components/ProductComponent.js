import axios from 'axios';
import React, { useEffect } from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

//import action creator
import { setProducts } from '../Redux/Actions/productActions';




const ProductComponent = () => {
    
    //import dispatchor
    const dispatch = useDispatch()

   

    useEffect(()=>{

        const fetchProducts=async()=>{

            const response =await axios.get('https://api.escuelajs.co/api/v1/products').catch(err=>{
                console.log('Err', err)
            })
            dispatch(setProducts(response.data))
        }
        
        fetchProducts()
     },[dispatch])


     //get data from store
    const products = useSelector(state=>state.allProducts.products)
    console.log(products)
    const productList = products.map(product=>{

        const {id,title,price,category}=product;
        return(
        
            <Card key={id} style={{ width: '15rem',margin:'1vmax',padding:"1vmax"}} className="productsCards">
              <Link to={`/product/${id}`}>

              <Container>
                <Card.Img variant="top" src={category.image} width='100%' height="200vmax"/>
            <Card.Body>
              <Card.Title style={{textDecoration:'none',color:'black'}}>{title}</Card.Title>
              <Card.Text style={{textDecoration:'none',color:'black'}}>
                <strong>${price}</strong>
         
              </Card.Text>
              <Card.Text style={{textDecoration:'none',color:'black'}}>
                {category.name}
              </Card.Text>
            </Card.Body>
                </Container>
              </Link>
           
          </Card>
          
          
        )
    })
  return (
    <>
    <Row>
        <Col className='ProductList col-lg-12 col-md-12 col-sm-12'>
        {productList}
        
        </Col>
    </Row>
   
    </>
  )
}

export default ProductComponent
