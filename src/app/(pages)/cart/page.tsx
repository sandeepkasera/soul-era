"use client"
import Header from '@/app/components/Header';
import PaymentCheckout from '@/app/components/paymentCheckout';
import React, {useState, useEffect} from 'react';
import productList from '@/app/assets/data/productlist.json'
import { useCart } from '@/app/context/cart/cartContext';
import axios from "axios";
// import { useRouter } from 'next/router';

const CartPage = () => {
  const {
    cart,
    addTocart,
    remove } = useCart();
  const handleAddToCart = (id: number) => {
    addTocart(id)
  }
  const handleRemove = (id: number) => {
    remove(id)
  }
  const cartItem = productList.filter(product => cart.includes(product.id));
  const calculateTotal = () => {
    return cartItem.reduce((total, product) => total + product.price, 0)
  };

  const [orderDetails, setOrderDetails] = useState<object>({});
  const [checkoutVisible, setCheckoutVisible] = useState<boolean>(false);
  const onCheckout = async (amount: number, id: string) => {
    const options = {
      "amount": amount,
      "currency": "INR",
      "receipt": id
    }
    try {
      const response = await axios.post("/api/payment/razorpay", options);
      setOrderDetails(response.data);
      setCheckoutVisible(!checkoutVisible)
        
      // const router = useRouter();
      // router.push(`/pay?total=${calculateTotal()}`);
      
       
    } catch (error: any) {  
      console.log("err', error");
            
    } finally {
        console.log("finally");
        
    }
}
useEffect(()=> {
  setCheckoutVisible(!checkoutVisible)
},[orderDetails])

  return (
    <>
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">Shopping Cart{checkoutVisible}</h1>
        <div className="bg-white shadow-md rounded-lg p-6">
          {cartItem.length > 0 ? (
            <>
              <ul>
                {cartItem.map(item => (
                  <li key={item.id} className="flex justify-between items-center mb-4">
                    <div>
                      <h2 className="text-xl text-gray-600">{item.brand}</h2>
                      <p className="text-gray-600">Desc: {item.name}</p>
                      <p className="text-gray-600">Price: Rs {item.price}</p>

                    </div>
                    <div>
                      <button onClick={() => handleRemove(item.id)} className="bg-red-500 text-white px-4 py-2 rounded">Remove</button>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="text-right mt-6">
                <p className=" text-xl bg-blue-500 text-white px-6 py-2 rounded mt-4 ">Total:Rs {calculateTotal()}</p>
                <button onClick={()=> onCheckout(calculateTotal(), "12345")} className="bg-blue-500 text-white px-6 py-2 rounded mt-4">Checkout</button>
                {checkoutVisible && <PaymentCheckout order={orderDetails}/>}
              </div>
            </>
          ) : (
            <p className="text-center text-gray-600">Your cart is empty</p>
          )}
        </div>
      </div>
    </>
  );
};

export default CartPage;
