import React, { useContext } from 'react';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import CancelIcon from '@mui/icons-material/Cancel';
import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import LensIcon from '@mui/icons-material/Lens';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import { Link } from 'react-router-dom';
import ContextProvider from '../../Context/ContextProvider';










const ProductDetail = () => {

   const {detailProduct,addtoCart} = useContext(ContextProvider);
  

  return (
    <Card  style={{height:400 , width:1000 ,display:'flex' ,gap:4,position:'absolute' , top:'50%' , left:'50%',transform:'translate(-50%,-42%)' }} >
    <CardMedia
    
        component='img'
        alt='Product Image'
        height={400}
        width={400}
        image={detailProduct.pImg}
       
        
    />

    {/*  {console.log('inone')} */}

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
  );
}

export default ProductDetail;
