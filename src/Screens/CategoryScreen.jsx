import React, { useState,useEffect, useContext} from 'react';
import NavBar from '../Components/Nav/NavBar'
import { Box, List, Stack, Typography,ListItem} from '@mui/material';
import Productcard from '../Components/Card/Productcard';
import ContextProvider from '../Context/ContextProvider';


const CategoryScreen = () => {
  const{Products} = useContext(ContextProvider);


  const[ProductsList,setProducts] = useState([]);
  
  useEffect(()=>{
    setProducts(Products)
   
  
  },[Products])


  return (
    <>
        <NavBar/>
          <Box style={{minHeight:'100vh',backgroundColor:'#efebe9'}}>
          <Stack spacing={10} style={{justifyContent:'center',alignItems:'center',padding:'10px'}}>

        {
    
    ProductsList && ProductsList.map((Product)=>(
          
        
            <Box key={Product.ProductId} style={{maxWidth:'80vw' , display:'flex',flexDirection:'column',alignItems:'center'}}>
             
           <Typography variant='h6' fontFamily='sans-serif' >{Product.ProductCategory}</Typography>
              
             <List
                  sx={{
                  width: '100%',
                  maxWidth: '100vw',
                  height:210,
                  maxHeight: 450, 
                  display:'flex',
                  overflowY:'hidden',
                  overflow:'auto'
                }}>
       
                      {
                         Product.CategoryItems.map((product)=>(
                        
                          <ListItem key={product.pId} >
                                <Productcard product={product}  ch={'200px'} cw={'150px'} h={'150px'} w={'150px'}/>
                          </ListItem>
                        
                              ))
                        
                                
                      }
        
              </List>
             
              </Box>
             
           ))

           
      }

          </Stack>
          </Box>
    </>
  );
}

export default CategoryScreen;
