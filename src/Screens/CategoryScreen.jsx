import React, { useState,useEffect, useContext} from 'react';
import NavBar from '../Components/Nav/NavBar'
import { Box, List, Stack, Typography,ListItem, Skeleton } from '@mui/material';
import Productcard from '../Components/Card/Productcard';
import ContextProvider from '../Context/ContextProvider';


const CategoryScreen = () => {
  const{Products} = useContext(ContextProvider);
  const[istrue,setIstrue]  = useState(false);

  const[ProductsList,setProducts] = useState([]);
  
  useEffect(()=>{
    setProducts(Products)
    setTimeout(()=>{
      setIstrue(true);
  },2000)
  
  },[Products])


  return (
    <Box>
        <NavBar/>
          <Stack spacing={12} style={{justifyContent:'center',alignItems:'center',backgroundColor:'#efebe9',padding:'10px'}}>

        {
    
    ProductsList && ProductsList.map((Product)=>(
          
        
            <Box key={Product.ProductId} style={{maxWidth:'80vw' , display:'flex',flexDirection:'column',alignItems:'center'}}>
             
             {istrue?<Typography variant='h6' fontFamily='sans-serif' >{Product.ProductCategory}</Typography>:<Skeleton variant='text' height={50} width={100}/>}
              
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
                         istrue?Product.CategoryItems.map((product)=>(
                        
                          <ListItem key={product.pId} >
                                <Productcard product={product}  ch={'200px'} cw={'150px'} h={'150px'} w={'150px'}/>
                          </ListItem>
                        
                              )):
                              Product.CategoryItems.map(()=>(
                              <>
                              <Stack>
                              <Skeleton variant='rectangular' width={'150px'} height={'200px'}style={{marginRight:'20px'}}/>
                              <Skeleton variant='rectangular' width={'150px'} height={'50px'}style={{marginRight:'20px'}}/>
                              </Stack>
                              </>
                              ))
                        
                                
                      }
      
              </List>
             
              </Box>
             
           ))

           
      }

          </Stack>
    </Box>
  );
}

export default CategoryScreen;
