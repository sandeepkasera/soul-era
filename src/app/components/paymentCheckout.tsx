import { useEffect } from 'react';
import Razorpay from 'razorpay';

const PaymentCheckout = (orderDetails: any) => {
  useEffect(() => {
    console.log("Hi checkout", orderDetails);
    
    if (!orderDetails.order.order) return;

    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.async = true;
    document.body.appendChild(script);
    
    script.onload = () => {
        console.log("script loaded");
        
      const options: RazorpayOptions = {
        key_id: 'rzp_test_BWHYNQbEzPVoVP', // Enter the Key ID generated from the Dashboard
        amount: orderDetails.order.order.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
        currency: 'INR',
        name: 'Acme Corp', // your business name
        description: 'Test Transaction',
        image: 'https://example.com/your_logo',
        order_id: orderDetails.order.order.id, // Use the orderID prop here
        callback_url: 'https://eneqd3r9zrjok.x.pipedream.net/',
        prefill: {
          name: 'Gaurav Kumar', // your customer's name
          email: 'gaurav.kumar@example.com',
          contact: '9000090000', // Provide the customer's phone number for better conversion rates 
        },
        notes: {
          address: 'Razorpay Corporate Office',
        },
        theme: {
          color: '#3399cc',
        },
      };

      var rzp1 = new window.Razorpay(options);
    // rzp1.on("payment.failed", function (response) {
    //   alert(response.error.code);
    //   alert(response.error.description);
    //   alert(response.error.source);
    //   alert(response.error.step);
    //   alert(response.error.reason);
    //   alert(response.error.metadata.order_id);
    //   alert(response.error.metadata.payment_id);
    // });
    rzp1.open();
    };

    // Cleanup script when component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, [orderDetails]); // Dependency array to run effect when orderID changes

  return null; // No need to render anything
};

export default PaymentCheckout;
