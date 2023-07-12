import React, {useContext } from 'react';
import NavBar from '../Components/Nav/NavBar'
import { Box, Button, Card, CardActions, CardContent, CardMedia, Container, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import ContextProvider from '../Context/ContextProvider';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import DeleteIcon from '@mui/icons-material/Delete';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';


const CartScreen = () => {


 
  const{cartItems,addtoCart,removefromCart,removeProduct} = useContext(ContextProvider);

  const calculateItems=()=>{
    let totalitems=0;
    cartItems.forEach((item)=>{
      totalitems = totalitems + item.pAddedLimit;
    })

    return totalitems;
  }
 
  const calculateTotal=()=>{
    let totalprice =0;
    cartItems.forEach((item)=>{
 
        totalprice = totalprice + (Number(item.pPrice) * Number(item.pAddedLimit));
      
    })
    return totalprice;
  }

 
 
  return (
    <>
  <Box sx={{height:'100vh',backgroundColor:'#efebe9'}}>
      <NavBar/>
      <Box sx={{display:{lg:'none',md:'none',sm:'block',xs:'block'}}}>
                  <Typography> Sub total of products :  <Button endIcon={<CurrencyRupeeIcon/>}> { calculateTotal()} </Button> </Typography> 
                  <Typography>Details :-</Typography>
        </Box>
 {(cartItems.length>0)?
      <Container sx={{ display:{lg:'flex',md:'flex',sm:'flex',xs:'flex'},flexDirection:{sm:'column-reverse',xs:'column-reverse'},justifyContent:{lg:'space-between',md:'space-between'}}} >
        
       

        <Box sx={{display:'flex',flexDirection:'column-reverse',alignItems:{lg:'flex-start',md:'flex-start',sm:'center',xs:'center'},rowGap:5, paddingTop:3}}>

             

          {
            cartItems.map((Item)=>(
              <Card key={Item.pId} sx={{ width:{lg:'500px',md:'400px',sm:'550px',xs:'260px'},height:{lg:'200px',md:'200px',sm:'200px',xs:'140px'},display:'flex',position:'relative'}}>
                  
                  <Button style={{position:'absolute',top:'1px',right:'1px'}} onClick={()=>removeProduct(Item)} endIcon={<DeleteIcon/>}>  
                   
                  </Button>

                  <CardMedia
                    image={Item.pImg}
                    sx={{
                      height:{lg:'200px',md:'200px',sm:'200px',xs:'150px'},
                      width:{lg:'300px',md:'300px',sm:'300px',xs:'100px'}
                    }}
                  />

                  <CardContent sx={{maxWidth:{xs:'160px'},display:'flex',flexDirection:'column',justifyContent:'space-around'}}>
                    <Typography>
                      {Item.pName}
                    </Typography>
                    <Typography style={{display:'flex',alignItems:'center'}}>
                      Price : 
                    <CurrencyRupeeIcon/>{Item.pPrice}
                    </Typography>
                    <Typography>
                      Total Products :
                      { Item.pAddedLimit}
                    </Typography>

                  <CardActions>
                    <Button variant='contained' onClick={()=>{addtoCart(Item)}}>Add</Button>
                    <Button variant='contained' onClick={()=>{removefromCart(Item)}}>Remove</Button>
                  </CardActions>

                  </CardContent>
              </Card>
            ))
          }

          </Box>

          <Box  sx={{ maxHeight:{ backgroundColor:'#eeeeee',lg:'500px',md:'500px',sm:'500px',xs:'400px'} ,maxWidth:{ lg:'600px' , md:'400px',sm:'500px',xs:'400px'},display:{lg:'block',md:'block',sm:'flex' ,xs:'flex' },alignSelf:{sm:'center',xs:'center'},position:{lg:'fixed',md:'fixed'},top:'75px',right:'50px',overflowY:'scroll' }}>
         <TableContainer>
            <Table >
              <TableHead>
                <TableRow>
                    <TableCell style={{textAlign:'center'}}>Product Image </TableCell>
                    <TableCell style={{textAlign:'center'}}>Product Name </TableCell>
                    <TableCell style={{textAlign:'center'}}>Total Product </TableCell>
                    <TableCell style={{textAlign:'center'}}>Product Price </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {
                  cartItems.map((Items)=>(
                    <TableRow>
                        <TableCell>
                          <CardMedia
                            image={Items.pImg}
                            sx={{
                              height:{lg:'70px',md:'50px',sm:'50px',xs:'40px'},
                              width:{lg:'70px',md:'50px',sm:'50px',xs:'40px'}
                            }}
                         />
                    </TableCell>
                    <TableCell style={{textAlign:'center'}}>
                      {Items.pName}
                    </TableCell>
                    <TableCell sx={{textAlign:'center'}}>
                      <Button onClick={()=>{removefromCart(Items)}}>-</Button>
                      <span style={{fontSize:'1rem',display:'block'}}>{Items.pAddedLimit}</span>
                      <Button onClick={()=>{addtoCart(Items)}}>+</Button>
                    </TableCell>
                    <TableCell style={{textAlign:'center'}}>
                      {Items.pPrice*Items.pAddedLimit}
                    </TableCell>
                    </TableRow>
                  
                  ))
                }
                 <TableRow >
                  <TableCell colSpan={2}>
                    <Typography variant='h5'>Total</Typography>
                  </TableCell>
                  <TableCell style={{textAlign:'center'}}>
                    {calculateItems()}
                  </TableCell>
                  <TableCell style={{textAlign:'center'}}>
                    <Button  color='success' endIcon={ <CurrencyRupeeIcon/>}>
                    { calculateTotal()}
                    </Button>
                 </TableCell>
                </TableRow>
              </TableBody>
            
               
           
              
            </Table>
         </TableContainer>
         </Box>
      </Container>:
      <>
        <Container style={{height:'70vh',display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
          <Typography variant='h5'>No Item Added</Typography>
          <ProductionQuantityLimitsIcon style={{fontSize:'100px'}}/>
        </Container>
      </>
}
</Box>
      </>
  );
}

export default CartScreen;
