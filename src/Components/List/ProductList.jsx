import React, {  useEffect, useState } from 'react';
import {List, ListItem } from '@mui/material';
import Productcard from '../Card/Productcard';




const ProductList = (props) => {


console.log('productlist',props.Product)

  const[Product,setProduct] = useState([]);
  
  useEffect(()=>{
      setProduct(props.Product)
  },[])
  
  console.log(Product)

 
  return (
     <List
     sx={{
       width: '100%',
       maxWidth: '100vw',
       height:210,
       maxHeight: 450, 
       display:'flex',
       overflowY:'hidden',
       overflowX:'scroll'
     }}>
        
{
    Product&&Product.CategoryItems.map((product)=>(
              
      <ListItem key={product.pId} >
           <Productcard product={product}  ch={'200px'} cw={'150px'} h={'150px'} w={'150px'}/>
     </ListItem>

         ))
   
          
}
    
       </List>

  );
}


export default ProductList;
