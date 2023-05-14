import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import { useState, useEffect } from 'react'
import '../styles/globals.css'


export default function App({ Component, pageProps }) {
  const [cart,setcart]=useState({});
  const [amount,setamount]=useState(0);

  const addToCart =(itemcode,qty,price,name,size,variant)=>{
    let newcart=cart;
    if(itemcode in newcart){
      newcart[itemcode].qty=newcart[itemcode].qty+qty;
    }
    else
    {
      newcart[itemcode]={qty:1,price,name,variant,size}
    }
    setcart(newcart)
    savetoLocal(newcart);
  }

  const removeFromCart =(itemcode,qty,price,name,size,variant)=>{
    let newcart=cart;
    if(itemcode in newcart){
      if(newcart[itemcode].qty-qty>0)
      newcart[itemcode].qty=newcart[itemcode].qty-qty;
    }
    else
    {
      delete newcart[itemcode]
    }

    setcart(newcart)
    savetoLocal(newcart);
  }
  const savetoLocal=(availableCart)=>{
    localStorage.setItem("cart",JSON.stringify(availableCart))
    let temp=0;
    for(let i=0;i<Object.keys(availableCart).length;i++){
      temp=temp+(availableCart[Object.keys(availableCart)[i]].price*availableCart[Object.keys(availableCart)[i]].qty)
    }
    setamount(temp)
  }
  const clearCart = ()=>{
    setcart({});
    savetoLocal({});
  }
  useEffect(() => {
    try {
      if(localStorage.getItem('cart')){
        setcart(JSON.parse(localStorage.getItem('cart')))
      }
    } catch (error) {
      console.log('error')
    }

  }, [])
  
  return <>
          <Navbar addToCart={addToCart} cart={cart} removeFromCart={removeFromCart} clearCart={clearCart} amount={amount}/>
  <Component addToCart={addToCart} cart={cart} removeFromCart={removeFromCart} clearCart={clearCart} amount={amount} {...pageProps} />
  <Footer/>
  </>
}
