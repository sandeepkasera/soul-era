interface RazorpayPrefill {
    name: string;
    email: string;
    contact: string;
  }
  
  interface RazorpayNotes {
    address: string;
  }
  
  interface RazorpayTheme {
    color: string;
  }
  
  interface RazorpayOptions {
    key_id: string;
    amount: string; // Assuming the amount is a string as per your example
    currency: string;
    name: string;
    description: string;
    image: string;
    order_id: string;
    callback_url: string;
    prefill: RazorpayPrefill;
    notes: RazorpayNotes;
    theme: RazorpayTheme;
    handler?: (response: any) => void;
  }
  
  interface Razorpay {
    open: () => void;
  }
  
  interface Window {
    Razorpay: new (options: RazorpayOptions) => Razorpay;
  }
  