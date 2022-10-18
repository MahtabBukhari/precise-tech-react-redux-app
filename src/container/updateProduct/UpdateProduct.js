import axios from 'axios'
import React, { useEffect } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import './updateProduct.css'

const UpdateProduct = () => {

    const Products = useSelector(state=>state.allProducts.products)
    console.log(Products)
    const { id } = useParams();
    console.log(id)
    const product = Products.find((p) => Number(p.id )=== Number(id));
    console.log(product)
  

  return (
    <Container>
    <Row className='updateFormRow'>
        <Col className='col-lg-6 col-md-6 col-sm-6'>

        <Form>
      <Form.Group className="mb-3" controlId="formBasicTitle">
        <Form.Label>Title</Form.Label>
        <Form.Control type="text" placeholder="product title" />
       
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPrice">
        <Form.Label>Price</Form.Label>
        <Form.Control type="number" placeholder="price of product" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicDescription">
        <Form.Label>Description</Form.Label>
        <Form.Control as='textarea' placeholder="write description" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicCategory">
        <Form.Label>Category</Form.Label>
        <Form.Control type="text" placeholder="product category" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicImage">
        <Form.Label>Image</Form.Label>
        <Form.Control type="file" placeholder="upload image" />
      </Form.Group>
      
      <Button variant="primary" style={{backgroundColor:"purple",outline:"none",border:"none"}} type="submit">
        update
      </Button>
    </Form>
        </Col>
    </Row>

    </Container>
  )
}

export default UpdateProduct
