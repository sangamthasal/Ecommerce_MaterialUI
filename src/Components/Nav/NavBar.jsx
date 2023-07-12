import React, { useContext } from 'react';
import {AppBar,Box,Toolbar,Typography,Button, IconButton,Badge} from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {Link} from 'react-router-dom';
import ContextProvider from '../../Context/ContextProvider';

const pages = ['Home' , 'Category'];



export default function ButtonAppBar() {
  const{cartItems} = useContext(ContextProvider);

  const totalProduct=()=>{
    
    let total = 0;
   
    cartItems.forEach(element => {
     
        total = total + element.pAddedLimit;
        console.log(total);
      });
    return total
 
  }
  
 

  return (
   <AppBar position="static" sx={{backgroundColor:'black'}}>
   

      <Toolbar sx={{  display:'flex',justifyContent:'space-between'}}>
      <Link to='/' style={{textDecoration:'none'}} >
        <Typography 
        variant='h6' 
        sx={{
         
            fontFamily: 'monospace',
            fontWeight:700,
            letterSpacing: '.3rem',
            color:'white',
          
        }}
        
        >
         
            MYBAZZAR
          
         
        </Typography>
        </Link>
        <Box>
            {pages.map((page) => (
              <Button
                key={page}
                size='small'
                sx={{color:'inherit' }}
              >
                <Link to={`/${page}`} style={{textDecoration:'none' ,color:'inherit',fontSize:14 }}>
                  {page}
                </Link>
              </Button>
            ))}

           <IconButton
             size="small"
             color="inherit"
             >
              <Badge badgeContent={totalProduct()}>
                <Link to='/Cart' style={{textDecoration:'none' ,color:'inherit'}}>
                <ShoppingCartIcon sx={{fontSize:{lg:30,md:30,sm:20,xs:13}}}/>
                </Link>
              </Badge>
            </IconButton> 
          </Box>

      </Toolbar>



  
   </AppBar>
  );
}