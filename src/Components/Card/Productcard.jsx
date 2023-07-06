import React, { useContext } from 'react';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import { Link } from 'react-router-dom';
import ContextProvider from '../../Context/ContextProvider';



const Productcard = (props) => {



  const {AddtoDetail} = useContext(ContextProvider)


  return (
   <Link to='/ProductDetail' style={{textDecoration:'none'}}>
    <Card style={{height:`${props.ch}` , width:`${props.cw}`}} onClick={()=>{AddtoDetail(props.product)}}>
        <CardMedia
        
            component='img'
            alt='Product Image'
            height={`${props.h}`}
            width={`${props.w}`}  
            image={props.product.pImg} 
            
        />
      
      {/* {console.log('inside second')}  */} 
      
        <CardContent style={{display:'flex',flexDirection:'column',alignItems:'center',backgroundColor:'#bdbdbd',paddingTop:'2px'}}>
            <Typography style={{fontWeight:'bold'}}>
                {props.product.pName}
            </Typography>

            <Typography variant='button' fontSize='0.8rem' style={{ display:'flex',alignItems:'center', justifyContent:'center'}}>
             Price:{props.product.pPrice} 
            <CurrencyRupeeIcon fontSize='5'/>
            </Typography>
           
        </CardContent>
       
    </Card>
    </Link>
  );
}

export default Productcard;
