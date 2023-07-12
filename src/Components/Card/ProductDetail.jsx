import React, { useContext } from 'react';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import CancelIcon from '@mui/icons-material/Cancel';
import { Button,Box ,Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import LensIcon from '@mui/icons-material/Lens';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import { Link } from 'react-router-dom';
import ContextProvider from '../../Context/ContextProvider';










const ProductDetail = () => {

   const {detailProduct,addtoCart} = useContext(ContextProvider);
  

  return (
   <Box sx={{height:'97vh', backgroundColor:'#efebe9'}}>
    <Card  sx={{height:{lg:400,md:400,sm:700,xs:700} , width:{lg:1000,md:900,sm:400,xs:300},display:'flex',flexDirection:{lg:'row',md:'row',sm:'column',xs:'column'} ,gap:2,position:'absolute' , top:'50%' , left:'50%',transform:'translate(-50%,-42%)' }} >
    <CardMedia
    
        component='img'
        alt='Product Image'
        height={400}
        width={400}
        image={detailProduct.pImg}
       
        
    />

  

    <CardContent  style={{ display:'flex',flexDirection:'column',gap:15,alignItems:'center',justifyContent:'center',backgroundColor:'grey',padding:'14px 5px'}}>
        <Typography variant='h5' style={{fontWeight:'bold'}}>
            {detailProduct.pName}
        </Typography>


        <Typography variant='caption' style={{ display:'flex', justifyContent:'center' ,alignItems:'center'}} >
                Available in Color
                {
                    detailProduct.pAvailableColor.map((availableColor)=>(
                        <LensIcon key={availableColor} style={{color:`${availableColor}`}}/>
                    ))
                }
        </Typography>

        <Typography variant='h6'  style={{ fontWeight:'bold', display:'flex',alignItems:'center', justifyContent:'center',padding:'0 7px'}}>
             {detailProduct.pPrice}
            <CurrencyRupeeIcon fontSize='5'/>
        </Typography>

        <CardActions>
            <Button style={{height:'55px'}} variant='contained' startIcon={<AccountBalanceIcon/>}>Purchase</Button>
            <Button style={{height:'55px'}} variant='contained'  endIcon={<AddShoppingCartIcon/>} onClick={()=>{addtoCart(detailProduct)}} >Add to Cart</Button>
          

        </CardActions>
       
       <Link to = '/Category' style={{textDecoration:'none'}}>
            <CancelIcon style={{color:'black', position:'absolute', top:'2px' , right:'2px' }}/>
        </Link> 
    </CardContent>
   
   

    </Card>
    </Box> 
  );
}

export default ProductDetail;
