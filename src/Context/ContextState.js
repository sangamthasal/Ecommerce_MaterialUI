import React, { useEffect, useState } from 'react';
import ContextProvider from './ContextProvider';
import { ProductsLists } from '../Products/ProductsLists';





const ContextState = (props) => {


  const[Products,setProducts] = useState(ProductsLists);

  const[cartItems,setCartItems] = useState([]); 

  const[detailProduct,settoDetail] = useState({});

  useEffect(()=>{
    console.log('setproductoperation')
      setProducts(ProductsLists)
  },[Products,cartItems])


console.log('props',props)


 const AddtoDetail =(prod)=>{
    settoDetail(prod)
 }


 const addtoCart=(product)=>{
 
      if(cartItems.includes(product)){
          product.pAddedLimit++;
          setProducts([...cartItems]);
      }
      else{
      console.log('notExist');
      setCartItems(cartItems => [...cartItems,product])
      }
    
 }

 const removefromCart=(product)=>{

  if(product.pAddedLimit>1){
    product.pAddedLimit--;
    setProducts([...cartItems])
  }else{
    setCartItems(cartItems => cartItems.filter((e)=>(e.pId !== product.pId)))
  }

}

const removeProduct=(product)=>{
  setCartItems(cartItems => cartItems.filter((e)=>(e.pId !== product.pId)))
}



const contextValue ={Products,cartItems,detailProduct,addtoCart,removefromCart,AddtoDetail,removeProduct};

  return (
    <ContextProvider.Provider value={contextValue}>
        {props.children}
    </ContextProvider.Provider>
  );

}

export default ContextState;
