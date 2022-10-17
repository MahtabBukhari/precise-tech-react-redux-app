import React from 'react'
import { Button, Card, CardImg } from 'react-bootstrap'
import { useSelector } from 'react-redux'

const ProductComponent = () => {
    const products = useSelector(state=>state.allProducts.products)
    console.log(products)
  return (
    <>
      <Card style={{ width: '18rem',margin:'1vmax'}}>
      <Card.Img variant="top" src="" />
      <Card.Body>
        <Card.Title>{products[0].title}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </>
  )
}

export default ProductComponent
