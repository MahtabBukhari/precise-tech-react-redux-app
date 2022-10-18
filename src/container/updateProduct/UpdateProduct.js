import axios from 'axios'
import React, { useEffect, useState } from 'react'
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

    const {title,price,description,category}=product
    console.log(title)

    const [ptitle,setPtitle]=useState(title)
    const [pprice,setPprice]=useState(price)
    const [pdescription,setPdescription]=useState(description)
    const [pcategory,setPcategory]=useState(category.name)
    const [pimage,setPimage]=useState()
  

  return (
    <Container>
    <Row className='updateFormRow'>
        <Col className='col-lg-6 col-md-6 col-sm-6'>

        <Form>
      <Form.Group className="mb-3" controlId="formBasicTitle">
        <Form.Label>Title</Form.Label>
        <Form.Control type="text" placeholder="product title" onChange={(e)=>{setPtitle(e.target.value)}} value={ptitle} />
       
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPrice">
        <Form.Label>Price</Form.Label>
        <Form.Control type="number" placeholder="price of product" onChange={(e)=>{setPprice(e.target.value)}} value={pprice} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicDescription">
        <Form.Label>Description</Form.Label>
        <Form.Control as='textarea' placeholder="write description" onChange={(e)=>{setPdescription(e.target.value)}}  value={pdescription} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicCategory">
        <Form.Label>Category</Form.Label>
        <Form.Control type="text" placeholder="product category" onChange={(e)=>{setPcategory(e.target.value)}} value={pcategory} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicImage">
        <Form.Label>Image</Form.Label>
        <Form.Control type="file" placeholder="upload image" onChange={(e)=>{setPimage(e.target.files[0])}}  />
      </Form.Group>
      
      <Button variant="primary" style={{backgroundColor:"purple",outline:"none",border:"none"}}  type="submit">
        update
      </Button>
    </Form>
        </Col>
    </Row>

    </Container>
  )
}

export default UpdateProduct
