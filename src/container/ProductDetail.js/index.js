import axios from 'axios'
import React, { useEffect } from 'react'
import { Alert, Button, Col, Container, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { selectedProduct } from '../../Redux/Actions/productActions';

import './ProductDetail.css'

const ProductDetail = () => {

    const dispatch = useDispatch()

    const {id} = useParams()
    console.log(id)

    useEffect(()=>{
        const fetchProduct=async()=>{

            const response = await axios.get(`https://fakestoreapi.com/products/${id}`).catch(err=>{
                console.log(err)
            })

            dispatch(selectedProduct(response.data))
        }

        fetchProduct()
    },[id,dispatch])

    const singleProduct = useSelector(state=>state.product)
    const {title,description,image:Image,price,category}=singleProduct
    
  return (
    <>
  <Container>
    {Object.keys(singleProduct).length===0?(
        <div><h3>Loading...</h3></div>
    ):(
        <Row className='productDitails' style={{border:"",height:"80vh",marginTop:"2vmax"}}>
        <Col className='ProductImage col-lg-6 col-md-6 col-sm6'>
            <img src={Image} alt="productImage" width="300vmax" height="350vmax"/>
        </Col>
        <Col className='col-lg-6 col-md-6 col-sm6 p-3 productDiscription'>
            <h3>{title}</h3>

           <p><strong>$ {price}</strong></p>
            <Alert key="danger" variant="danger" style={{width:'100%'}}>{category}</Alert>
            <h3>Description</h3>
            <p>{description}</p>
            <Button style={{backgroundColor:"purple",outline:"none",border:"none"}} color='white'>Add to cart</Button>
        </Col>
       
    </Row>

    )}
   
  </Container>
    </>
  )
}

export default ProductDetail
