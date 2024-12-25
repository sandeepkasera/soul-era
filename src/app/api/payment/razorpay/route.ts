import { NextRequest, NextResponse } from "next/server";
import Razorpay from "razorpay";

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { amount, currency, receipt } = reqBody;
    if (!amount || !currency || !receipt) {
      console.log('Missing required fields');
      return NextResponse.json(
        { error: 'Missing required fields: amount, currency, or receipt' },
        { status: 400 }
      );
    }
    console.log(process.env.KEY_ID);
    
    const razorpay = new Razorpay({
      key_id: process.env.KEY_ID || '',
      key_secret: process.env.KEY_SECRET || ''
    });    
    const options = {
      amount: amount*100,
      currency,
      receipt,
    };

    const order = await razorpay.orders.create(options);      
    if (!order) {
    return NextResponse.json(
        { error: "ORDER NOT CREATED" },
        { status: 500 }
    );
    }
      
    return NextResponse.json({ order });
  } catch (error: any) {
    console.error('Error occurred:', error); // Log the full error
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }
}
