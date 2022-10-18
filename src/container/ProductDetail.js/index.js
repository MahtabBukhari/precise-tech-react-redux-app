import axios from 'axios'
import React, { useEffect } from 'react'
import { Alert, Button, Col, Container, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useParams,useNavigate } from 'react-router-dom'
import { selectedProduct ,removeSelectedProduct} from '../../Redux/Actions/productActions';
import { DeleteSelectedProduct } from '../../Redux/Actions/productActions'
import './ProductDetail.css'

const ProductDetail = () => {

    const navigate =useNavigate()
    const dispatch = useDispatch()

    const {id:pID} = useParams()
    
    const singleProduct = useSelector(state=>state.product)
    const {id,title,description,price,category}=singleProduct;
    // const {image:Image}=category

   

    useEffect(()=>{
        
        const fetchProduct=async()=>{

            const response = await axios.get(`https://api.escuelajs.co/api/v1/products/${pID}`).catch(err=>{
                console.log(err)
            })

            dispatch(selectedProduct(response.data))
        }

        fetchProduct()
       

     return ()=>{
        dispatch(removeSelectedProduct())
     }

    },[pID,dispatch])





    const onDelete=async(id)=>{

        await axios.delete(`https://api.escuelajs.co/api/v1/products/${id}`).catch(err=>{
           console.log(err) })

           dispatch(DeleteSelectedProduct(id))

           navigate('/')
       
       
       }

       const onEdit=(id)=>{

        navigate(`/product/update/${id}`)

       }

    
    

 
  return (
    <>
  <Container>
    <Row><Col className='mt-2 ProductButtons'>
    <Button className='mr-2 upButton' variant='outline-info' onClick={()=>{onEdit(id)}}>Update</Button>
    <Button className='delButton' variant='outline-danger' onClick={()=>{onDelete(id)}}>Delete</Button>
    </Col></Row>
    {Object.keys(singleProduct).length===0?(
        <div><h3>Loading...</h3></div>
    ):(
        <Row className='productDitails' style={{height:"80vh",marginTop:"1vmax",marginBottom:"1vmax"}}>
        <Col className='ProductImage col-lg-6 col-md-6 col-sm6'>
        
            <img src={category.image} alt="productImage" width="300vmax" height="350vmax"/>
        </Col>
        <Col className='col-lg-6 col-md-6 col-sm6 p-3 productDiscription'>
            <h3>{title}</h3>

           <p><strong>$ {price}</strong></p>
            <Alert key="danger" variant="danger" style={{width:'100%'}}>{category.name}</Alert>
            <h3>Description</h3>
            <p  >{description}</p>
            <Button style={{backgroundColor:"purple",outline:"none",border:"none"}} color='white'>Add to cart</Button>
        </Col>
       
    </Row>

    )}
   
  </Container>
    </>
  )
}

export default ProductDetail
