// src/components/CartLayout.tsx

"use client";

import React from 'react';
import { Inter } from 'next/font/google';
import { CounterProvider } from '../context/cart/cartContext';

const inter = Inter({ subsets: ['latin'] });

export default function CartLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={inter.className}>
      <CounterProvider>
        {children}
      </CounterProvider>
    </div>
  );
}
