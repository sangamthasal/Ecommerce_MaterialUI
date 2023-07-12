import { Box, Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import React from 'react';

import { Link } from 'react-router-dom';
import Model from '../../Images/Models/Model.png'
import Tshirtcover from '../../Images/Static/TshirtCover.jpg';
import ShirtCover from '../../Images/Static/shirtcoverphot.jpg';
import PantCover from '../../Images/Static/pantscoverphoto.jpg';


const Product=[
  {
    pId:'1',
    pName:'Tshirt',
    pImg:Tshirtcover,
    pPrice:700,
    pAvailableColor:['#454440','#9c9b98','#473809','#4f1919']
},
{
    pId:'2',
    pName:'Shirts',
    pImg:ShirtCover,
    pPrice:800,
    pAvailableColor:['#454440','#9c9b98','#473809','#4f1919']
},
{
    pId:'3',
    pName:'Pants',
    pImg:PantCover,
    pPrice:900,
    pAvailableColor:['#454440','#9c9b98','#473809','#4f1919']
},
]


const Headerpart = () => {


 
   
    

  return (
  <>
    <Box sx={{height:{lg:'80vh',md:'65vh',sm:'36vh',xs:'30vh'},position:'relative' ,backgroundColor:'#8d6e63',display:'flex',alignItems:'center',justifyContent:'space-around'}}>

        <Box sx={{maxWidth:{lg:'50vw',md:'45vw',sm:'40vw',xs:'30vw'},position:'absolute',top:'50%',right:'50%',transformX:'translate(-40%)'}}>
            <Typography sx={{
              
              fontSize:{lg:'40px',md:'30px',sm:'20px',xs:'10px'}
              
              
            }} >Explore, Discover, and Shop Your Way to Unparalleled Delight at Our <span style={{fontWeight:'bold'}}>MyBazzar</span></Typography>
        </Box>
      
        <CardMedia
        component='img'
        alt='Product Image'
        sx={{width:{lg:'400px',md:'400px',sm:'410px',xs:'200px'},height:{lg:'500px',md:'410px',sm:'400px',xs:'250px'},position:'absolute',bottom:'0%',right:'0%'}}
        image={Model}
        
    />
    
    </Box>

    
    <Box style={{backgroundColor:'#efebe9',maxWidth:'100vw' ,display:'flex',justifyContent:'center' ,position:'relative'}} >
       
    <Grid container justifyContent={'center'} alignContent={'space-around'} rowGap={4} columnGap={4} sx={{ minHeight:'50vh',maxWidth:'70vw' }} >
    {   
      Product&&Product.map((Item)=>(
              <Link to='/Category' style={{textDecoration:'none'  }} key={Item.pId}>
               <Card sx={{width:{lg:'350px',md:'250px',sm:'250px',xs:'200px'} ,height:{lg:"350px",md:'300px',sm:'300px',xs:'240px'}}} key={Item.pId}>
                  <CardMedia
                        component='img'
                        alt='Product Image'
                       sx={{width:{lg:'350px',md:'250px',sm:'250px',xs:'200px'},height:{lg:'300px',md:'250px',sm:'250px',xs:'200px'}}}
                        image={Item.pImg}
                        
                  />
                <CardContent >
                  <Typography variant='body1' textAlign={'center'}>{Item.pName}</Typography>
                </CardContent>
                  
               </Card>
               </Link>
            ))
          

        
} 
       
    </Grid>  
    <Link to='/Category' style={{position:'absolute',top:'20px',right:'14px',textDecoration:'none',color:'black',fontSize:'11px'}}>see more</Link>
    </Box>
    
  </>
  );
}

export default Headerpart;