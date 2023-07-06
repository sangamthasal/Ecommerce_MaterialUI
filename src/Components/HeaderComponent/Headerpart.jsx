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
    <Box style={{minHeight:'38vh' ,backgroundColor:'#8d6e63',display:'flex',alignItems:'center',justifyContent:'space-around'}}>

        <Box style={{width:'50vw'}}>
            <Typography variant='h4' >Explore, Discover, and Shop Your Way to Unparalleled Delight at Our <span style={{fontWeight:'bold'}}>MyBazzar</span></Typography>
        </Box>
      
        <CardMedia
        component='img'
        alt='Product Image'
        style={{width:'500px',height:'400px'}}
        image={Model}
        
    />
    
    </Box>

    
    <Box style={{backgroundColor:'#efebe9',maxWidth:'100vw' ,display:'flex',justifyContent:'center' ,position:'relative'}} >
       
    <Grid container justifyContent={'center'} alignContent={'space-around'} rowGap={4} columnGap={4} sx={{ minHeight:'50vh',maxWidth:'70vw' }} >
    {   
      Product&&Product.map((Item)=>(
              <Link to='/Category' style={{textDecoration:'none'  }} key={Item.pId}>
               <Card style={{width:'300px' ,height:'300px'}} key={Item.pId}>
                  <CardMedia
                        component='img'
                        alt='Product Image'
                        height='240px'
                        width='100px'
                        image={Item.pImg}
                        
                  />
                <CardContent>
                  <Typography variant='body1' textAlign={'center'}>{Item.pName}</Typography>
                </CardContent>
                  
               </Card>
               </Link>
            ))
          

        
} 
       
    </Grid>  
    <Link to='/Category' style={{position:'absolute',top:'20px',right:'140px',textDecoration:'none',color:'black',fontSize:'17px'}}>see more</Link>
    </Box>
    
  </>
  );
}

export default Headerpart;