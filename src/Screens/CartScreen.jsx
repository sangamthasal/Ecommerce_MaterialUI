import React, { useContext } from 'react';
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
      <NavBar/>
 {(cartItems.length>0)?
      <Container style={{display:'flex',justifyContent:'space-between'}} >
        
        <Box style={{display:'flex',flexDirection:'column-reverse',alignItems:'flex-start'  ,rowGap:40, paddingTop:40}}>
          {
            cartItems.map((Item)=>(
              <Card key={Item.pId} style={{width:'500px',height:'200px',display:'flex',position:'relative'}}>
                  
                  <Button style={{position:'absolute',top:'1px',right:'1px'}} onClick={()=>removeProduct(Item)} endIcon={<DeleteIcon/>}>  
                   
                  </Button>

                  <CardMedia
                    image={Item.pImg}
                    style={{
                      height:'200px',
                      width:'300px'
                    }}
                  />

                  <CardContent style={{display:'flex',flexDirection:'column',justifyContent:'space-around'}}>
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

          <Box style={{maxHeight:'600px', position:'fixed',top:'75px',right:'50px',overflowY:'scroll'}}>
         <TableContainer >
            <Table>
              <TableHead>
                <TableRow >
                    <TableCell style={{textAlign:'center'}}>Product Image </TableCell>
                    <TableCell style={{textAlign:'center'}}>Product Name </TableCell>
                    <TableCell style={{textAlign:'center'}}>Total Product </TableCell>
                    <TableCell style={{textAlign:'center'}}>Product Price </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {
                  cartItems.map((Items)=>(
                    <TableRow >
                        <TableCell style={{textAlign:'center'}}>
                          <CardMedia
                            image={Items.pImg}
                            style={{
                              height:'70px',
                              width:'70px'
                            }}
                         />
                    </TableCell>
                    <TableCell style={{textAlign:'center'}}>
                      {Items.pName}
                    </TableCell>
                    <TableCell style={{justifyContent:'center',alignItems:'center'}}>
                      <Button onClick={()=>{removefromCart(Items)}}>-</Button>
                      {Items.pAddedLimit}
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
      </>
  );
}

export default CartScreen;
